"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "pending_payment", label: "Pending payment" },
  { value: "processing", label: "Processing" },
  { value: "in_progress", label: "In progress" },
  { value: "complete", label: "Complete" },
];

export default function NewProjectForm() {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    client_id: "",
    title: "",
    description: "",
    status: "processing",
    total_amount_cents: "",
    currency: "usd",
    stripe_payment_link_url: "",
    target_completion_date: "",
  });

  useEffect(() => {
    fetch("/api/profiles")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setClients(Array.isArray(data) ? data : []))
      .catch(() => setClients([]))
      .finally(() => setLoading(false));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "total_amount_cents" ? value.replace(/\D/g, "") : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.client_id || !form.title) return;
    setSaving(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          total_amount_cents: Number(form.total_amount_cents) || 0,
          target_completion_date: form.target_completion_date || null,
          stripe_payment_link_url: form.stripe_payment_link_url || null,
        }),
      });
      const data = await res.json();
      if (res.ok && data.id) {
        router.push("/admin/projects");
        return;
      }
      alert(data.error || "Failed to create project");
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setSaving(false);
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
    <div>
      <h2 className="mb-6 text-xl font-bold text-slate-50">New project</h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
        <div>
          <label htmlFor="client_id" className="mb-1 block text-sm font-medium text-slate-300">
            Client
          </label>
          <select
            id="client_id"
            name="client_id"
            required
            value={form.client_id}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          >
            <option value="">Select client</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name || c.email || c.id}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-300">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-slate-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="status" className="mb-1 block text-sm font-medium text-slate-300">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="total_amount_cents" className="mb-1 block text-sm font-medium text-slate-300">
            Total (cents, e.g. 10000 = $100)
          </label>
          <input
            id="total_amount_cents"
            name="total_amount_cents"
            type="text"
            inputMode="numeric"
            value={form.total_amount_cents}
            onChange={handleChange}
            placeholder="10000"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="currency" className="mb-1 block text-sm font-medium text-slate-300">
            Currency
          </label>
          <input
            id="currency"
            name="currency"
            type="text"
            value={form.currency}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="stripe_payment_link_url" className="mb-1 block text-sm font-medium text-slate-300">
            Stripe payment link URL (optional)
          </label>
          <input
            id="stripe_payment_link_url"
            name="stripe_payment_link_url"
            type="url"
            value={form.stripe_payment_link_url}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="target_completion_date" className="mb-1 block text-sm font-medium text-slate-300">
            Target completion date (optional)
          </label>
          <input
            id="target_completion_date"
            name="target_completion_date"
            type="date"
            value={form.target_completion_date}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-emerald-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
          >
            {saving ? "Creating…" : "Create project"}
          </button>
          <Link
            href="/admin/projects"
            className="rounded-full border border-slate-600 px-5 py-2 font-medium text-slate-300 transition hover:border-slate-500"
          >
            Cancel
          </Link>
        </div>
      </form>
      <p className="mt-6">
        <Link href="/admin/projects" className="text-sm text-slate-500 hover:text-emerald-400">
          ← Back to projects
        </Link>
      </p>
    </div>
  );
}
