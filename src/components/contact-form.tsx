"use client";

import { useState } from "react";

type PropertyType = "Residential" | "Commercial" | "Industrial" | "Other";

interface FormState {
  name: string;
  phone: string;
  email: string;
  propertyType: PropertyType | "";
  monthlyBill: string;
  location: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  monthlyBill: "",
  location: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error("Contact form submission error", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="propertyType"
            className="text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            value={form.propertyType}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
          >
            <option value="">Select</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="monthlyBill"
            className="text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            Monthly Bill (approx.)
          </label>
          <input
            id="monthlyBill"
            name="monthlyBill"
            required
            value={form.monthlyBill}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="location"
            className="text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            Location
          </label>
          <input
            id="location"
            name="location"
            required
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-wide text-slate-700"
        >
          Additional details (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400/0 transition focus:bg-white focus:ring-2"
        />
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300 disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Submit Inquiry"}
        </button>
        {submitted && (
          <p className="text-xs text-emerald-600">
            Thank you. Our team will reach out shortly.
          </p>
        )}
      </div>
    </form>
  );
}

