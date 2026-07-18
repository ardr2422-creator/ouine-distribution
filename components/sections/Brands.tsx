import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { CtaButton } from "../CtaButton";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { Sparkle } from "../icons";

const MUFEED_URL = "https://mufeed.fr/";

export function Brands({ dict }: { dict: Dictionary }) {
  const t = dict.brands;

  return (
    <section id="marques" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-blue">{t.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Carte Mufeed */}
          <Reveal>
            <article className="h-full rounded-[2rem] border border-ink/8 bg-white/70 p-2 shadow-[0_24px_60px_-30px_rgba(16,27,56,0.25)]">
              <div className="grid h-full overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white sm:grid-cols-[1fr_0.85fr]">
                <div className="flex flex-col justify-between gap-8 p-7 sm:p-9">
                  <div>
                    <Image
                      src="/images/logo-mufeed.png"
                      alt={t.mufeed.logoAlt}
                      width={1110}
                      height={310}
                      className="h-9 w-auto"
                    />
                    <p className="mt-5 text-sm font-semibold text-brand-700">{t.mufeed.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-blue">
                      {t.mufeed.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {t.mufeed.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-brand-700"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <CtaButton href={MUFEED_URL} external>
                      {t.mufeed.cta}
                    </CtaButton>
                  </div>
                </div>
                <div className="relative min-h-56 sm:min-h-full">
                  <Image
                    src="/images/almonds.jpg"
                    alt={t.mufeed.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </Reveal>

          {/* Carte « à venir » */}
          <Reveal delay={120}>
            <article className="flex h-full flex-col justify-between gap-10 rounded-[2rem] border border-dashed border-brand-600/25 bg-brand-50/60 p-8 sm:p-9">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sun-400 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950">
                <Sparkle className="h-3.5 w-3.5" />
                {t.coming.badge}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{t.coming.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-blue">{t.coming.text}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
