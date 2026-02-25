import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const body = await request.text();
  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const projectId = session.metadata?.project_id || session.client_reference_id;
    const paymentIntentId = session.payment_intent ?? session.id;
    const amountTotal = session.amount_total ?? 0;
    const currency = (session.currency || "usd").toLowerCase();

    if (projectId && amountTotal > 0) {
      const { error } = await supabaseAdmin.from("payments").insert({
        project_id: projectId,
        amount_cents: amountTotal,
        currency,
        stripe_payment_intent_id: typeof paymentIntentId === "string" ? paymentIntentId : null,
        stripe_session_id: session.id,
        status: "succeeded",
      });
      if (error) console.error("Failed to insert payment:", error);
    }
  }

  return NextResponse.json({ received: true });
}
