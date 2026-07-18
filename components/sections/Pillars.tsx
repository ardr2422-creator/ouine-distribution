import type { Dictionary } from "@/lib/i18n";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { Check } from "../icons";

export function Pillars({ dict }: { dict: Dictionary }) {
  const t = dict.pillars;

  return (
    <section id="engagements" className="scroll-mt-28 bg-brand-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-2xl">
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
            <p className="mt-4 text-base leading-relaxed text-brand-200">{t.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="group h-full rounded-[2rem] border border-white/10 bg-white/5 p-1.5 transition-colors duration-500 hover:border-sun-400/30">
                <div className="flex h-full flex-col gap-4 rounded-[calc(2rem-0.375rem)] bg-white/5 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun-400 text-brand-950 transition-transform duration-500 ease-fluid group-hover:scale-105">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-200">{item.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
