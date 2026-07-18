import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { contact } from "@/lib/site";
import { LinkedIn, Mail, MapPin, Phone, WhatsApp } from "./icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = `/${locale}`;
  const year = new Date().getFullYear();

  const nav = [
    { href: home, label: dict.nav.home },
    { href: `${home}#engagements`, label: dict.nav.commitments },
    { href: `${home}#marques`, label: dict.nav.brands },
    { href: `${home}#devenir-revendeur`, label: dict.nav.reseller },
    { href: `${home}/contact`, label: dict.nav.contact },
  ];

  const legal = [
    { href: `${home}/mentions-legales`, label: dict.footer.legal },
    { href: `${home}/politique-de-confidentialite`, label: dict.footer.privacy },
    { href: `${home}/cookies`, label: dict.footer.cookies },
  ];

  return (
    <footer className="border-t border-ink/8 bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-ouine.webp"
              alt="Ouine Distribution"
              width={639}
              height={100}
              className="h-8 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-blue">
              {dict.footer.blurb}
            </p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-brand-600 transition-colors duration-300 hover:border-brand-600/40 hover:text-brand-700"
              aria-label="LinkedIn Ouine Distribution"
            >
              <LinkedIn className="h-4.5 w-4.5" />
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
              {dict.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-blue transition-colors duration-300 hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-blue">
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-brand-700"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-brand-700"
                >
                  <WhatsApp className="h-4 w-4 shrink-0 text-brand-600" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 break-all transition-colors duration-300 hover:text-brand-700"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-600" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  {contact.address.street}, {contact.address.postalCode} {contact.address.city},{" "}
                  {contact.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/8 pt-6 text-xs text-slate-blue sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Ouine Distribution. {dict.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
