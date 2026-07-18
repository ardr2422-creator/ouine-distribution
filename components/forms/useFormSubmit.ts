"use client";

import { useState } from "react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(payload: Record<string, unknown>): Promise<boolean> {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  }

  return { status, submit, reset: () => setStatus("idle") };
}

export const fieldClasses =
  "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-blue/50 shadow-[inset_0_1px_2px_rgba(16,27,56,0.03)] outline-none transition-all duration-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

export const labelClasses = "mb-1.5 block text-sm font-semibold text-ink";
