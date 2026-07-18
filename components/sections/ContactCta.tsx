import type { Dictionary, Locale } from "@/lib/i18n";
import { contact } from "@/lib/site";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowUpRight, LinkedIn, Mail, MapPin, Phone, WhatsApp } from "../icons";

export function ContactCta({ dict }: { dict: Dictionary; locale: Locale }) {
  const t = dict.contactSection;

  const channels = [
    { icon: Phone, label: t.phone, value: contact.phone, href: contact.phoneHref },
    { icon: WhatsApp, label: t.whatsapp, value: contact.phone, href: contact.whatsapp, external: true },
    { icon: Mail, label: t.email, value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section id="contact" className="scroll-mt-28 bg-brand-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-300">
                <span className="h-1.5 w-1.5 rounded-full bg-sun-400" aria-hidden />
                {t.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-200">{t.sub}</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 flex items-start gap-3 text-sm text-brand-200">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sun-400" />
                <span>
                  <strong className="font-semibold text-white">{t.address}</strong>
                  <br />
                  {contact.address.street}, {contact.address.postalCode} {contact.address.city},{" "}
                  {contact.address.country}
                </span>
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 80}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-2 transition-colors duration-500 hover:border-sun-400/40"
                >
                  <span className="flex items-center gap-4 rounded-[calc(1.75rem-0.375rem)] p-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sun-400 text-brand-950">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
                        {channel.label}
                      </span>
                      <span className="block text-sm font-semibold text-white sm:text-base">
                        {channel.value}
                      </span>
                    </span>
                  </span>
                  <span
                    className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={260}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold text-white">{t.linkedinTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">{t.linkedinText}</p>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-brand-950 transition-all duration-500 ease-fluid hover:bg-sun-300 active:scale-[0.98]"
                >
                  <LinkedIn className="h-4 w-4" />
                  {t.linkedinCta}
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-950/10 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
