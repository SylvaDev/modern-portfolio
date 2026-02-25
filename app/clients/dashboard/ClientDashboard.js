"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STATUS_LABELS = {
  draft: "Draft",
  pending_payment: "Pending payment",
  processing: "Processing",
  in_progress: "In progress",
  complete: "Complete",
};

function formatMoney(cents, currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export default function ClientDashboard() {
  const [projects, setProjects] = useState([]);
  const [paymentsByProject, setPaymentsByProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [payingId, setPayingId] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setProjects(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    projects.forEach((p) => {
      fetch(`/api/projects/${p.id}/payments`)
        .then((res) => (res.ok ? res.json() : []))
        .then((data) => {
          setPaymentsByProject((prev) => ({
            ...prev,
            [p.id]: Array.isArray(data) ? data : [],
          }));
        })
        .catch(() => {});
    });
  }, [projects]);

  async function handlePay(projectId) {
    setPayingId(projectId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project_id: projectId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || "Could not start checkout");
    } catch (e) {
      alert("Something went wrong");
    } finally {
      setPayingId(null);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-slate-400">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-50">Your projects</h1>
          <a
            href="/auth/logout"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            Log out
          </a>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 text-center text-slate-400">
            You don’t have any projects yet. When we start working together, they’ll show up here.
          </div>
        ) : (
          <ul className="space-y-4">
            {projects.map((p) => {
              const payments = paymentsByProject[p.id] ?? [];
              const paidCents = payments
                .filter((x) => x.status === "succeeded")
                .reduce((s, x) => s + (x.amount_cents || 0), 0);
              const totalCents = p.total_amount_cents || 0;
              const canPay = totalCents > 0 && paidCents < totalCents && (p.stripe_payment_link_url || true);

              return (
                <li
                  key={p.id}
                  className="card-elevated rounded-xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-50">{p.title}</h2>
                      {p.description && (
                        <p className="mt-1 text-sm text-slate-400 line-clamp-2">{p.description}</p>
                      )}
                      <p className="mt-2 inline-block rounded-full bg-slate-800 px-3 py-0.5 text-xs font-medium text-slate-300">
                        {STATUS_LABELS[p.status] ?? p.status}
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-slate-400">
                        Total: {formatMoney(totalCents, p.currency)}
                      </p>
                      <p className="text-slate-300">
                        Paid: {formatMoney(paidCents, p.currency)}
                      </p>
                      {canPay && (
                        <button
                          type="button"
                          onClick={() => handlePay(p.id)}
                          disabled={payingId !== null}
                          className="mt-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
                        >
                          {payingId === p.id ? "Redirecting…" : "Pay now"}
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/" className="hover:text-emerald-400">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
