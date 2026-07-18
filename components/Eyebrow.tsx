export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 shadow-[0_1px_2px_rgba(16,27,56,0.04)]">
      <span className="h-1.5 w-1.5 rounded-full bg-sun-400" aria-hidden />
      {children}
    </span>
  );
}
