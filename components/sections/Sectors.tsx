import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { Building, Cart, CoffeeCup, Leaf, Store } from "../icons";

const icons = [Store, Leaf, Building, Cart, CoffeeCup];

export function Sectors({ dict }: { dict: Dictionary }) {
  const t = dict.sectors;

  return (
    <section className="bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
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
              <div className="mt-8 hidden rounded-[2rem] border border-ink/8 bg-white/70 p-2 shadow-[0_24px_60px_-30px_rgba(16,27,56,0.25)] lg:block">
                <Image
                  src="/images/grocery.jpg"
                  alt={t.imageAlt}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[4/3] w-full rounded-[calc(2rem-0.5rem)] object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={item.title} delay={i * 70} className={i === 4 ? "sm:col-span-2" : ""}>
                  <article className="group h-full rounded-[2rem] border border-ink/8 bg-white p-6 transition-all duration-500 ease-fluid hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(16,27,56,0.3)] sm:p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-sun-400/20 group-hover:text-sun-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-blue">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
