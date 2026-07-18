import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";
import { CtaButton } from "../CtaButton";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { Sparkle } from "../icons";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="relative overflow-hidden">
      {/* halos décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-sun-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28">
        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {t.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg font-semibold text-brand-700">{t.hook}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-blue sm:text-lg">
              {t.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaButton href={`/${locale}#devenir-revendeur`} variant="sun">
                {t.ctaPrimary}
              </CtaButton>
              <CtaButton href={`/${locale}/contact`} variant="ghost">
                {t.ctaSecondary}
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/8 pt-6">
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-blue">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-bold text-brand-700">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          {/* double cadre façon matériel */}
          <div className="rounded-[2rem] border border-ink/8 bg-white/60 p-2 shadow-[0_30px_80px_-30px_rgba(16,27,56,0.35)] backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="/images/hero-food.jpg"
                alt={t.imageAlt}
                width={1600}
                height={1067}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-950/25 via-transparent to-transparent"
              />
            </div>
          </div>
          {/* badge flottant */}
          <div className="absolute -bottom-6 left-4 flex max-w-[16rem] items-start gap-3 rounded-3xl border border-ink/8 bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(16,27,56,0.4)] backdrop-blur-xl sm:left-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun-400/20 text-sun-600">
              <Sparkle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{t.badgeTitle}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-blue">{t.badgeText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
