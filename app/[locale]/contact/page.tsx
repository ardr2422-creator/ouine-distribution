import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, LinkedIn, Mail, MapPin, Phone, WhatsApp } from "@/components/icons";
import { getDictionary, isLocale } from "@/lib/i18n";
import { contact, siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages: {
        fr: `${siteUrl}/fr/contact`,
        en: `${siteUrl}/en/contact`,
        "x-default": `${siteUrl}/fr/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale);
  const t = dict.contactPage;
  const ts = dict.contactSection;

  const channels = [
    { icon: Phone, label: ts.phone, value: contact.phone, href: contact.phoneHref },
    { icon: WhatsApp, label: ts.whatsapp, value: contact.phone, href: contact.whatsapp, external: true },
    { icon: Mail, label: ts.email, value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-sun-400/12 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{ts.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-blue sm:text-lg">{t.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 80}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-ink/8 bg-white p-2 shadow-[0_16px_40px_-24px_rgba(16,27,56,0.25)] transition-colors duration-500 hover:border-brand-600/30"
                >
                  <span className="flex items-center gap-4 p-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-blue">
                        {channel.label}
                      </span>
                      <span className="block text-sm font-semibold text-ink sm:text-base">
                        {channel.value}
                      </span>
                    </span>
                  </span>
                  <span
                    className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cloud text-brand-600 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={260}>
              <div className="rounded-[1.75rem] border border-ink/8 bg-cloud p-6">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-slate-blue">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" />
                  <span>
                    <strong className="font-semibold text-ink">{ts.address}</strong>
                    <br />
                    {contact.address.street}, {contact.address.postalCode} {contact.address.city},{" "}
                    {contact.address.country}
                  </span>
                </p>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors duration-300 hover:text-brand-700"
                >
                  <LinkedIn className="h-4 w-4" />
                  {ts.linkedinCta}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="rounded-[2rem] border border-ink/8 bg-cloud/80 p-2 shadow-[0_30px_80px_-40px_rgba(16,27,56,0.35)]">
              <ContactForm dict={dict} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
