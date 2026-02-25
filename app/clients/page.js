import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Client Portal | SylvaDev",
  description: "Sign in to view your projects and payments.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 md:pt-28">
        <section className="section-fade-in mx-auto max-w-xl rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center shadow-xl">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
            Client Portal
          </h1>
          <p className="mb-8 text-slate-400">
            Sign in to view your projects, status, and make payments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/auth/login?returnTo=/clients/dashboard"
              className="rounded-full bg-emerald-500 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Log in
            </a>
            <a
              href="/auth/login?screen_hint=signup&returnTo=/clients/dashboard"
              className="rounded-full border border-slate-600 bg-slate-800/50 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:bg-slate-800"
            >
              Sign up
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-400">
              ← Back to home
            </Link>
          </p>
        </section>
        <Footer />
      </main>
    </div>
  );
}
