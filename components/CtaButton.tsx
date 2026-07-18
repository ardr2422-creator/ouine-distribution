import Link from "next/link";
import { ArrowUpRight } from "./icons";

const baseClasses =
  "group inline-flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ease-fluid active:scale-[0.98]";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "sun";
  external?: boolean;
};

export function CtaButton({ href, children, variant = "primary", external }: CtaButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-brand-600 pl-6 pr-2 py-2 text-white shadow-[0_10px_30px_-10px_rgba(48,83,159,0.55)] hover:bg-brand-700"
      : variant === "sun"
        ? "bg-sun-400 pl-6 pr-2 py-2 text-brand-950 shadow-[0_10px_30px_-10px_rgba(226,168,0,0.6)] hover:bg-sun-300"
        : "border border-ink/10 bg-white/70 px-6 py-3.5 text-ink hover:border-brand-600/30 hover:text-brand-700";

  const iconWrap =
    variant === "ghost"
      ? null
      : (
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 ${
              variant === "primary" ? "bg-white/15 text-white" : "bg-brand-950/10 text-brand-950"
            }`}
            aria-hidden
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        );

  const content = (
    <>
      <span className={variant === "ghost" ? "" : "py-1.5"}>{children}</span>
      {iconWrap}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${styles}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${baseClasses} ${styles}`}>
      {content}
    </Link>
  );
}
