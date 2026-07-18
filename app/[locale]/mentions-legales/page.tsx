import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: dict.meta.legalTitle,
    robots: { index: false },
    alternates: {
      canonical: `${siteUrl}/${locale}/mentions-legales`,
      languages: {
        fr: `${siteUrl}/fr/mentions-legales`,
        en: `${siteUrl}/en/mentions-legales`,
        "x-default": `${siteUrl}/fr/mentions-legales`,
      },
    },
  };
}

function FrenchContent() {
  return (
    <>
      <h2>Présentation du site</h2>
      <p>
        Conformément à l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans
        l&apos;économie numérique, les intervenants du site{" "}
        <a href={siteUrl}>{siteUrl.replace("https://", "")}</a> sont :
      </p>
      <h3>Propriétaire</h3>
      <ul>
        <li>OUINE DISTRIBUTION</li>
        <li>SIREN : 933 305 021 — SIRET (siège) : 933 305 021 00026</li>
        <li>Forme juridique : SARL (société à responsabilité limitée)</li>
        <li>Capital social : 1 000,00 €</li>
        <li>Numéro TVA intracommunautaire : FR84933305021</li>
        <li>RCS : 933 305 021 R.C.S. Versailles</li>
        <li>Activité : commerce d&apos;alimentation générale</li>
      </ul>
      <h3>Siège social</h3>
      <p>2 rue Croix Castel, 78600 Maisons-Laffitte, France</p>
      <h3>Contact</h3>
      <p>
        Email : <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>
        <br />
        Responsable de la publication : Mameri Zakaria
      </p>
      <h3>Hébergeur</h3>
      <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com</p>

      <h2>Conditions d&apos;utilisation</h2>
      <p>
        L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation pleine et entière
        des présentes conditions. OUINE DISTRIBUTION se réserve la possibilité de modifier ces
        conditions à tout moment ; les utilisateurs sont invités à les consulter régulièrement.
      </p>

      <h2>Services fournis</h2>
      <p>
        Les informations publiées sur le site sont fournies à titre indicatif. OUINE DISTRIBUTION
        met en œuvre des moyens raisonnables pour assurer l&apos;exactitude et la mise à jour des
        contenus, mais ne garantit pas qu&apos;ils soient exhaustifs, exacts ou à jour. En cas
        d&apos;anomalie constatée, merci de signaler le problème à{" "}
        <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a> en
        précisant la page concernée.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Sauf mention contraire, les contenus (textes, images, logos, graphismes, vidéos, bases de
        données, etc.) publiés sur ce site sont la propriété d&apos;OUINE DISTRIBUTION ou de ses
        partenaires et sont protégés par le Code de la propriété intellectuelle. Toute
        reproduction, représentation, adaptation ou diffusion, totale ou partielle, sans
        autorisation écrite préalable est interdite et constitutive d&apos;une contrefaçon
        sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>Limitations de responsabilité</h2>
      <p>
        OUINE DISTRIBUTION ne saurait être tenue responsable des dommages directs ou indirects
        résultant de l&apos;accès au site, de l&apos;utilisation des informations qui y figurent ou
        d&apos;une impossibilité d&apos;accès. Les espaces interactifs (formulaires) sont modérés :
        tout contenu illicite pourra être supprimé et son auteur poursuivi conformément à la loi.
      </p>

      <h2>Gestion des données personnelles</h2>
      <p>
        Les traitements de données personnelles sont mis en œuvre conformément au RGPD (UE
        2016/679) et à la loi « Informatique et Libertés ». Les finalités, bases légales, durées de
        conservation et destinataires des données sont détaillés dans la{" "}
        <a href="/fr/politique-de-confidentialite">politique de confidentialité</a>. Vous disposez
        d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
        d&apos;opposition et de portabilité de vos données : contactez{" "}
        <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>.
      </p>

      <h2>Liens hypertextes et cookies</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. OUINE DISTRIBUTION n&apos;exerce
        aucun contrôle permanent sur leur contenu et décline toute responsabilité quant aux
        informations qu&apos;ils contiennent. La navigation sur le site peut entraîner le dépôt de
        cookies : consultez la <a href="/fr/cookies">page cookies</a> et la{" "}
        <a href="/fr/politique-de-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Droit applicable et juridiction</h2>
      <p>
        Les présentes mentions sont régies par le droit français. Tout litige relatif à leur
        interprétation ou à leur exécution relèvera des tribunaux compétents du ressort du siège
        social d&apos;OUINE DISTRIBUTION, sauf disposition légale impérative contraire.
      </p>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <h2>Website publisher</h2>
      <p>
        In accordance with Article 6 of French law n°2004-575 of 21 June 2004 on confidence in the
        digital economy, this website is published by:
      </p>
      <h3>Owner</h3>
      <ul>
        <li>OUINE DISTRIBUTION</li>
        <li>SIREN: 933 305 021 — SIRET (head office): 933 305 021 00026</li>
        <li>Legal form: SARL (French limited liability company)</li>
        <li>Share capital: €1,000.00</li>
        <li>EU VAT number: FR84933305021</li>
        <li>Trade register: 933 305 021 R.C.S. Versailles</li>
        <li>Activity: general food trade</li>
      </ul>
      <h3>Head office</h3>
      <p>2 rue Croix Castel, 78600 Maisons-Laffitte, France</p>
      <h3>Contact</h3>
      <p>
        Email: <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>
        <br />
        Publishing director: Mameri Zakaria
      </p>
      <h3>Hosting provider</h3>
      <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com</p>

      <h2>Terms of use</h2>
      <p>
        Accessing and using this website implies full acceptance of these terms. OUINE
        DISTRIBUTION may amend them at any time; users are invited to review them regularly.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise stated, all content published on this site (texts, images, logos,
        graphics, videos, databases, etc.) is the property of OUINE DISTRIBUTION or its partners
        and is protected by the French Intellectual Property Code. Any reproduction,
        representation, adaptation or distribution, in whole or in part, without prior written
        authorisation is prohibited.
      </p>

      <h2>Liability</h2>
      <p>
        OUINE DISTRIBUTION cannot be held liable for direct or indirect damage resulting from
        access to the site, from the use of the information it contains, or from the site being
        unavailable. Interactive areas (forms) are moderated: any unlawful content may be removed
        and its author prosecuted in accordance with the law.
      </p>

      <h2>Personal data</h2>
      <p>
        Personal data is processed in accordance with the GDPR (EU 2016/679) and the French Data
        Protection Act. Purposes, legal bases, retention periods and recipients are detailed in
        the <a href="/en/politique-de-confidentialite">privacy policy</a>. To exercise your rights
        of access, rectification, erasure, restriction, objection and portability, contact{" "}
        <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>.
      </p>

      <h2>Links and cookies</h2>
      <p>
        This site may contain links to third-party websites over which OUINE DISTRIBUTION has no
        control and for which it accepts no liability. Browsing this site may involve cookies: see
        the <a href="/en/cookies">cookies page</a> and the{" "}
        <a href="/en/politique-de-confidentialite">privacy policy</a>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by French law. Any dispute relating to their interpretation or
        performance falls under the jurisdiction of the courts of OUINE DISTRIBUTION&apos;s head
        office, unless mandatory legal provisions state otherwise.
      </p>
    </>
  );
}

export default async function LegalPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <LegalShell eyebrow={dict.footer.legalTitle} title={dict.meta.legalTitle}>
      {(locale as Locale) === "fr" ? <FrenchContent /> : <EnglishContent />}
    </LegalShell>
  );
}
