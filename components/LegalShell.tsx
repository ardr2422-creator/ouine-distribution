import { Eyebrow } from "./Eyebrow";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalShell({ eyebrow, title, updated, children }: LegalShellProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {updated && <p className="mt-3 text-sm text-slate-blue">{updated}</p>}
      <div className="legal-prose mt-10 space-y-4 text-[15px] leading-relaxed text-slate-blue [&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
