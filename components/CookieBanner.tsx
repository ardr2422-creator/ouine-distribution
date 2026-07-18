"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

const STORAGE_KEY = "ouine-cookie-consent";

export function CookieBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // stockage indisponible : on n'affiche pas le bandeau en boucle
    }
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() }),
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookies"
      className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md"
    >
      <div className="rounded-3xl border border-ink/10 bg-white/95 p-5 shadow-[0_24px_60px_-20px_rgba(16,27,56,0.35)] backdrop-blur-xl">
        <p className="text-sm leading-relaxed text-slate-blue">
          {dict.cookieBanner.text}{" "}
          <Link
            href={`/${locale}/cookies`}
            className="font-semibold text-brand-600 underline-offset-2 hover:underline"
          >
            {dict.cookieBanner.more}
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700 active:scale-[0.98]"
          >
            {dict.cookieBanner.accept}
          </button>
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink/25 active:scale-[0.98]"
          >
            {dict.cookieBanner.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
