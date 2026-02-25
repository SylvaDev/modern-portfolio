import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-helpers";
import Link from "next/link";

export default async function AdminLayout({ children }) {
  const { redirect: redirectTo } = await requireAdmin();
  if (redirectTo) redirect(redirectTo);

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/admin" className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            SylvaDev Admin
          </Link>
          <nav className="flex gap-4 text-sm text-slate-400">
            <Link href="/admin/projects" className="transition hover:text-emerald-400">
              Projects
            </Link>
            <a href="/auth/logout" className="transition hover:text-emerald-400">
              Log out
            </a>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
    </div>
  );
}
