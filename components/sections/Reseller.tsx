import type { Dictionary } from "@/lib/i18n";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ResellerForm } from "../forms/ResellerForm";
import { Check } from "../icons";

export function Reseller({ dict }: { dict: Dictionary }) {
  const t = dict.reseller;

  return (
    <section id="devenir-revendeur" className="relative scroll-mt-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-sun-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-blue">{t.sub}</p>
            </Reveal>
            <Reveal delay={160}>
              <ul className="mt-8 space-y-4">
                {t.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun-400/25 text-sun-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="rounded-[2rem] border border-ink/8 bg-cloud/80 p-2 shadow-[0_30px_80px_-40px_rgba(16,27,56,0.35)]">
              <ResellerForm dict={dict} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
