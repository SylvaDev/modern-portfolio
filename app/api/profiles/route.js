import { NextResponse } from "next/server";
import { getOrCreateProfile } from "@/lib/auth-helpers";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const profile = await getOrCreateProfile();
    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("id, email, name, role, created_at")
      .order("name", { ascending: true });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
