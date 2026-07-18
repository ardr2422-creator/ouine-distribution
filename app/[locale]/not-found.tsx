import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
      <p className="font-display text-7xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">
        Page introuvable — Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-blue">
        La page que vous cherchez n&apos;existe pas ou a été déplacée. / The page you are looking
        for does not exist or has been moved.
      </p>
      <Link
        href="/fr"
        className="mt-8 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
      >
        Retour à l&apos;accueil — Back home
      </Link>
    </section>
  );
}
