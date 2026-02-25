import { NextResponse } from "next/server";
import { getOrCreateProfile } from "@/lib/auth-helpers";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(request, { params }) {
  try {
    const profile = await getOrCreateProfile();
    if (!profile) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: projectId } = await params;

    const { data: project } = await supabaseAdmin
      .from("projects")
      .select("id, client_id")
      .eq("id", projectId)
      .single();

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    if (profile.role !== "admin" && project.client_id !== profile.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { data, error } = await supabaseAdmin
      .from("payments")
      .select("id, amount_cents, currency, stripe_payment_intent_id, status, created_at")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
