import { NextResponse } from "next/server";
import { getOrCreateProfile } from "@/lib/auth-helpers";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const profile = await getOrCreateProfile();
    if (!profile) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Admin: see all projects with basic client info
    if (profile.role === "admin") {
      const { data, error } = await supabaseAdmin
        .from("projects")
        .select(
          "id, client_id, title, description, status, total_amount_cents, currency, stripe_payment_link_url, target_completion_date, created_at, updated_at, profiles(id, email, name)",
        )
        .order("created_at", { ascending: false });

      if (error) throw error;
      return NextResponse.json(data ?? []);
    }

    // Client: only their own, no drafts
    const { data, error } = await supabaseAdmin
      .from("projects")
      .select(
        "id, title, description, status, total_amount_cents, currency, stripe_payment_link_url, target_completion_date, created_at, updated_at",
      )
      .eq("client_id", profile.id)
      .neq("status", "draft")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (err) {
    console.error("GET /api/projects error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const profile = await getOrCreateProfile();
    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const {
      client_id,
      title,
      description,
      status = "processing",
      total_amount_cents = 0,
      currency = "usd",
      stripe_price_id,
      stripe_payment_link_url,
      target_completion_date,
    } = body || {};

    if (!client_id || !title) {
      return NextResponse.json(
        { error: "client_id and title are required" },
        { status: 400 },
      );
    }

    const allowedStatuses = [
      "draft",
      "pending_payment",
      "processing",
      "in_progress",
      "complete",
    ];

    const safeStatus = allowedStatuses.includes(status)
      ? status
      : "processing";

    const { data, error } = await supabaseAdmin
      .from("projects")
      .insert({
        client_id,
        title,
        description: description ?? null,
        status: safeStatus,
        total_amount_cents: Number(total_amount_cents) || 0,
        currency: currency || "usd",
        stripe_price_id: stripe_price_id ?? null,
        stripe_payment_link_url: stripe_payment_link_url ?? null,
        target_completion_date: target_completion_date || null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err) {
    console.error("POST /api/projects error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

