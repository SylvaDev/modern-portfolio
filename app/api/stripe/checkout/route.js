import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getOrCreateProfile } from "@/lib/auth-helpers";
import { supabaseAdmin } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const profile = await getOrCreateProfile();
    if (!profile) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { project_id } = body;
    if (!project_id) {
      return NextResponse.json({ error: "project_id required" }, { status: 400 });
    }

    const { data: project, error: projectError } = await supabaseAdmin
      .from("projects")
      .select("id, client_id, title, total_amount_cents, currency")
      .eq("id", project_id)
      .single();

    if (projectError || !project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    if (project.client_id !== profile.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (project.total_amount_cents <= 0) {
      return NextResponse.json({ error: "Project has no amount set" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || request.nextUrl?.origin || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "affirm"],
      line_items: [
        {
          price_data: {
            currency: (project.currency || "usd").toLowerCase(),
            unit_amount: project.total_amount_cents,
            product_data: {
              name: project.title,
              description: `Project: ${project.title}`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/clients/dashboard?paid=1`,
      cancel_url: `${baseUrl}/clients/dashboard`,
      client_reference_id: project_id,
      metadata: { project_id },
      customer_email: profile.email || undefined,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
