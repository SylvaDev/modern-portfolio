"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill out all fields before sending.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email configuration is missing. Please set your EmailJS environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey,
        }
      );

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again in a moment or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-sm">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium text-slate-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:ring"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-slate-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:ring"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-slate-300"
        >
          Project details
        </label>
        <textarea
          id="message"
          rows={3}
          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:ring"
          placeholder="Tell me about your idea, timeline, and budget range."
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      <p className="text-[11px] text-slate-400">
        I&apos;ll get back within 1–2 business days.
        <a
          href="mailto:info@irvingsylva.dev"
          className="font-medium text-emerald-400 underline-offset-4 hover:underline"
        ></a>
      </p>
      {status.message && (
        <p
          className={`text-[11px] ${
            status.type === "success" ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

