import { NextResponse } from "next/server";
import { getOrCreateProfile } from "@/lib/auth-helpers";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(request, { params }) {
  try {
    const profile = await getOrCreateProfile();
    if (!profile) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { data: project, error } = await supabaseAdmin
      .from("projects")
      .select("id, client_id, title, description, status, total_amount_cents, currency, stripe_price_id, stripe_payment_link_url, target_completion_date, created_at, updated_at")
      .eq("id", id)
      .single();

    if (error || !project) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (profile.role !== "admin" && project.client_id !== profile.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(project);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const profile = await getOrCreateProfile();
    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = await params;
    const body = await request.json();
    const updates = {};
    const allowed = [
      "title",
      "description",
      "status",
      "total_amount_cents",
      "currency",
      "stripe_price_id",
      "stripe_payment_link_url",
      "target_completion_date",
    ];
    for (const key of allowed) {
      if (body[key] !== undefined) updates[key] = body[key];
    }
    if (body.status && !["draft", "pending_payment", "processing", "in_progress", "complete"].includes(body.status)) {
      delete updates.status;
    }

    const { data, error } = await supabaseAdmin
      .from("projects")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const profile = await getOrCreateProfile();
    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = await params;
    const { error } = await supabaseAdmin.from("projects").delete().eq("id", id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
