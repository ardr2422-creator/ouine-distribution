import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { getDictionary, isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: dict.meta.cookiesTitle,
    robots: { index: false },
    alternates: {
      canonical: `${siteUrl}/${locale}/cookies`,
      languages: {
        fr: `${siteUrl}/fr/cookies`,
        en: `${siteUrl}/en/cookies`,
        "x-default": `${siteUrl}/fr/cookies`,
      },
    },
  };
}

function FrenchContent() {
  return (
    <>
      <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lors de la consultation d&apos;un
        site. Il permet notamment de faire fonctionner le site, de mémoriser vos préférences ou de
        mesurer l&apos;audience.
      </p>

      <h2>Les cookies utilisés sur ce site</h2>
      <h3>Cookies strictement nécessaires</h3>
      <p>
        Ils sont indispensables au fonctionnement du site et ne nécessitent pas votre
        consentement :
      </p>
      <ul>
        <li>
          <strong>ouine-cookie-consent</strong> (stockage local) — mémorise votre choix concernant
          les cookies. Durée : jusqu&apos;à suppression par vos soins.
        </li>
      </ul>
      <h3>Cookies de mesure d&apos;audience</h3>
      <p>
        À ce jour, ce site n&apos;utilise aucun outil de mesure d&apos;audience. Si un outil
        d&apos;analytics venait à être ajouté, il ne serait activé qu&apos;avec votre consentement
        et cette page serait mise à jour.
      </p>

      <h2>Gérer votre consentement</h2>
      <p>
        Vous pouvez modifier votre choix à tout moment en supprimant les données de navigation de
        ce site dans les réglages de votre navigateur, puis en effectuant un nouveau choix via le
        bandeau qui s&apos;affichera lors de votre prochaine visite. Vous pouvez également
        configurer votre navigateur pour refuser les cookies.
      </p>

      <h2>En savoir plus</h2>
      <p>
        Pour plus d&apos;informations sur vos droits, consultez notre{" "}
        <a href="/fr/politique-de-confidentialite">politique de confidentialité</a> ou le site de
        la{" "}
        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <h2>What is a cookie?</h2>
      <p>
        A cookie is a small file stored on your device when you visit a website. It is used to
        make the site work, remember your preferences or measure its audience.
      </p>

      <h2>Cookies used on this site</h2>
      <h3>Strictly necessary cookies</h3>
      <p>These are essential to the operation of the site and do not require your consent:</p>
      <ul>
        <li>
          <strong>ouine-cookie-consent</strong> (local storage) — remembers your cookie choice.
          Duration: until you delete it.
        </li>
      </ul>
      <h3>Audience measurement cookies</h3>
      <p>
        To date, this site does not use any analytics tool. If one is added in the future, it will
        only be activated with your consent and this page will be updated.
      </p>

      <h2>Managing your consent</h2>
      <p>
        You can change your choice at any time by deleting this site&apos;s browsing data in your
        browser settings, then making a new choice via the banner displayed on your next visit.
        You can also configure your browser to refuse cookies.
      </p>

      <h2>Learn more</h2>
      <p>
        For more information about your rights, see our{" "}
        <a href="/en/politique-de-confidentialite">privacy policy</a> or the website of the French
        data protection authority, the{" "}
        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>
    </>
  );
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <LegalShell eyebrow={dict.footer.legalTitle} title={dict.meta.cookiesTitle}>
      {locale === "fr" ? <FrenchContent /> : <EnglishContent />}
    </LegalShell>
  );
}
