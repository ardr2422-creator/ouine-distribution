"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";
import { Check } from "../icons";
import { fieldClasses, labelClasses, useFormSubmit } from "./useFormSubmit";

export function ResellerForm({ dict }: { dict: Dictionary }) {
  const t = dict.reseller.form;
  const { status, submit } = useFormSubmit();
  const [interests, setInterests] = useState<string[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);

  const toggleInterest = (option: string) => {
    setInterests((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationError(null);
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!name) return setValidationError(t.required);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setValidationError(t.invalidEmail);
    if (!consent) return setValidationError(t.consentRequired);

    const ok = await submit({
      type: "reseller",
      name,
      email,
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      interests,
      message: String(data.get("message") ?? "").trim(),
      consent,
      website: String(data.get("website") ?? ""),
    });
    if (ok) form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-[calc(2rem-0.5rem)] bg-white p-8 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Check className="h-6 w-6" />
        </span>
        <p className="max-w-sm text-base font-medium text-ink">{t.success}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[calc(2rem-0.5rem)] bg-white p-6 sm:p-8"
      aria-label={dict.reseller.title}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="reseller-name" className={labelClasses}>
            {t.name} <span className="text-brand-600">*</span>
          </label>
          <input
            id="reseller-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="reseller-email" className={labelClasses}>
            {t.email} <span className="text-brand-600">*</span>
          </label>
          <input
            id="reseller-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="reseller-phone" className={labelClasses}>
            {t.phone} <span className="text-xs font-normal text-slate-blue">({t.optional})</span>
          </label>
          <input
            id="reseller-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="reseller-company" className={labelClasses}>
            {t.company} <span className="text-xs font-normal text-slate-blue">({t.optional})</span>
          </label>
          <input
            id="reseller-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={t.companyPlaceholder}
            className={fieldClasses}
          />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={labelClasses}>{t.interests}</legend>
        <div className="flex flex-wrap gap-2">
          {t.interestOptions.map((option) => {
            const active = interests.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleInterest(option)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                  active
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-ink/10 bg-white text-slate-blue hover:border-brand-400/50 hover:text-brand-700"
                }`}
              >
                {active && <Check className="h-3.5 w-3.5" />}
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="reseller-message" className={labelClasses}>
          {t.message} <span className="text-xs font-normal text-slate-blue">({t.optional})</span>
        </label>
        <textarea
          id="reseller-message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className={`${fieldClasses} resize-y`}
        />
      </div>

      {/* pot de miel anti-spam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-slate-blue">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-600"
        />
        <span>{t.consent}</span>
      </label>

      {(validationError || status === "error") && (
        <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {validationError ?? t.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(48,83,159,0.55)] transition-all duration-500 ease-fluid hover:bg-brand-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
