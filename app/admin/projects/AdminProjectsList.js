"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "pending_payment", label: "Pending payment" },
  { value: "processing", label: "Processing" },
  { value: "in_progress", label: "In progress" },
  { value: "complete", label: "Complete" },
];

function formatMoney(cents, currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: (currency || "usd").toUpperCase(),
  }).format((cents || 0) / 100);
}

export default function AdminProjectsList() {
  const [projects, setProjects] = useState([]);
  const [paymentsByProject, setPaymentsByProject] = useState({});
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-slate-400">Loading…</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-50">All projects</h2>
        <Link
          href="/admin/projects/new"
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          New project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 text-center text-slate-400">
          No projects yet.{" "}
          <Link href="/admin/projects/new" className="text-emerald-400 hover:underline">
            Create one
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400">
                <th className="p-3 font-medium">Project</th>
                <th className="p-3 font-medium">Client</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Total</th>
                <th className="p-3 font-medium">Paid</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => {
                const payments = paymentsByProject[p.id] ?? [];
                const paidCents = payments
                  .filter((x) => x.status === "succeeded")
                  .reduce((s, x) => s + (x.amount_cents || 0), 0);
                const client = p.profiles;
                return (
                  <tr key={p.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="p-3">
                      <span className="font-medium text-slate-200">{p.title}</span>
                    </td>
                    <td className="p-3 text-slate-400">
                      {client?.name || client?.email || p.client_id}
                    </td>
                    <td className="p-3">
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-slate-300">
                        {STATUS_OPTIONS.find((s) => s.value === p.status)?.label ?? p.status}
                      </span>
                    </td>
                    <td className="p-3 text-slate-300">
                      {formatMoney(p.total_amount_cents, p.currency)}
                    </td>
                    <td className="p-3 text-slate-300">
                      {formatMoney(paidCents, p.currency)}
                    </td>
                    <td className="p-3">
                      <Link
                        href={`/admin/projects/${p.id}/edit`}
                        className="text-emerald-400 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-8">
        <Link href="/admin" className="text-sm text-slate-500 hover:text-emerald-400">
          ← Back to admin
        </Link>
      </p>
    </div>
  );
}
