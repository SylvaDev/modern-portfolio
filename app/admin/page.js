import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-helpers";
import Link from "next/link";

export const metadata = {
  title: "Admin | SylvaDev",
  description: "Admin dashboard.",
};

export default async function AdminPage() {
  const { profile, redirect: redirectTo } = await requireAdmin();
  if (redirectTo) redirect(redirectTo);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-50">Admin</h1>
          <a
            href="/auth/logout"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            Log out
          </a>
        </div>
        <nav className="flex flex-wrap gap-4">
          <Link
            href="/admin/projects"
            className="rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-4 font-medium text-slate-200 transition hover:border-emerald-500/50 hover:bg-slate-800"
          >
            Manage projects
          </Link>
        </nav>
        <p className="mt-6 text-sm text-slate-500">
          Logged in as {profile?.name}
        </p>
      </div>
    </div>
  );
}
