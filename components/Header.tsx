"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { ArrowUpRight } from "./icons";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const home = `/${locale}`;

  const links = [
    { href: `${home}#engagements`, label: dict.nav.commitments },
    { href: `${home}#marques`, label: dict.nav.brands },
    { href: `${home}#devenir-revendeur`, label: dict.nav.reseller },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const langSwitcher = (
    <div
      className="flex items-center rounded-full border border-ink/10 bg-white/60 p-0.5 text-xs font-bold"
      aria-label="Language"
    >
      {(["fr", "en"] as const).map((code) => (
        <Link
          key={code}
          href={switchLocalePath(pathname, code)}
          aria-current={locale === code ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors duration-300 ${
            locale === code
              ? "bg-brand-600 text-white"
              : "text-slate-blue hover:text-brand-700"
          }`}
        >
          {code}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-ink/8 bg-white/85 py-2 pl-4 pr-2 shadow-[0_12px_40px_-12px_rgba(16,27,56,0.18)] backdrop-blur-xl sm:pl-5">
        <Link href={home} className="shrink-0" aria-label="Ouine Distribution">
          <Image
            src="/images/logo-ouine.webp"
            alt="Ouine Distribution"
            width={639}
            height={100}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-blue transition-colors duration-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">{langSwitcher}</div>
          <Link
            href={`${home}#devenir-revendeur`}
            className="group hidden items-center gap-2 rounded-full bg-brand-600 py-1.5 pl-4 pr-1.5 text-sm font-semibold text-white transition-all duration-500 ease-fluid hover:bg-brand-700 active:scale-[0.98] md:inline-flex"
          >
            {dict.nav.cta}
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? dict.nav.close : dict.nav.open}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-4.5 rounded-full bg-ink transition-all duration-500 ease-fluid ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4.5 rounded-full bg-ink transition-all duration-500 ease-fluid ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 z-[-1] bg-paper/95 backdrop-blur-2xl transition-opacity duration-500 ease-fluid lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-center gap-2 px-8 pt-16"
          aria-label="Navigation mobile"
        >
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`font-display text-3xl font-semibold text-ink transition-all duration-700 ease-fluid hover:text-brand-600 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div
            style={{ transitionDelay: open ? "400ms" : "0ms" }}
            className={`mt-8 flex items-center gap-4 transition-all duration-700 ease-fluid ${
              open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              href={`${home}#devenir-revendeur`}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
            >
              {dict.nav.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            {langSwitcher}
          </div>
        </nav>
      </div>
    </header>
  );
}
