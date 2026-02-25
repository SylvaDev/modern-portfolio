import { auth0 } from "./auth0.js";
import { supabaseAdmin } from "./supabase.js";

/**
 * Get current Auth0 session (server-side). Returns null if not logged in.
 */
export async function getSession() {
  return auth0.getSession();
}

/**
 * Get or create Supabase profile for the current user; return profile with role.
 * Use in API routes and server components after confirming session exists.
 * @returns { Promise<{ id: string, auth0_id: string, email: string | null, name: string | null, role: 'admin' | 'client' } | null> }
 */
export async function getOrCreateProfile() {
  const session = await auth0.getSession();
  if (!session?.user?.sub) return null;

  const auth0Id = session.user.sub;
  const email = session.user.email ?? null;
  const name = session.user.name ?? null;

  const { data: existing } = await supabaseAdmin
    .from("profiles")
    .select("id, auth0_id, email, name, role")
    .eq("auth0_id", auth0Id)
    .single();

  if (existing) return existing;

  const { data: inserted, error } = await supabaseAdmin
    .from("profiles")
    .insert({
      auth0_id: auth0Id,
      email,
      name,
      role: "client",
    })
    .select("id, auth0_id, email, name, role")
    .single();

  if (error) throw error;
  return inserted;
}

/**
 * Require auth and return profile. Redirects to login if no session.
 * Use in server components/layouts; for API routes return 401 instead of redirect.
 */
export async function requireProfile() {
  const session = await auth0.getSession();
  if (!session) return { profile: null, redirect: "/auth/login?returnTo=/clients/dashboard" };
  const profile = await getOrCreateProfile();
  if (!profile) return { profile: null, redirect: "/auth/login" };
  return { profile, redirect: null };
}

/**
 * Require admin role. Returns { profile } or { redirect }.
 */
export async function requireAdmin() {
  const { profile, redirect } = await requireProfile();
  if (redirect) return { profile: null, redirect };
  if (profile.role !== "admin") return { profile: null, redirect: "/clients/dashboard" };
  return { profile, redirect: null };
}
