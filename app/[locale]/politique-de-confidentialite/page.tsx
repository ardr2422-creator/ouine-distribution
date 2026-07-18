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
    title: dict.meta.privacyTitle,
    robots: { index: false },
    alternates: {
      canonical: `${siteUrl}/${locale}/politique-de-confidentialite`,
      languages: {
        fr: `${siteUrl}/fr/politique-de-confidentialite`,
        en: `${siteUrl}/en/politique-de-confidentialite`,
        "x-default": `${siteUrl}/fr/politique-de-confidentialite`,
      },
    },
  };
}

function FrenchContent() {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        Cette politique explique quelles données nous collectons, pourquoi nous les collectons et
        comment nous les protégeons. OUINE DISTRIBUTION (ci-après « nous ») s&apos;engage à
        respecter la confidentialité des données personnelles et à se conformer au Règlement
        Général sur la Protection des Données (RGPD).
      </p>

      <h2>Responsable de traitement</h2>
      <ul>
        <li>OUINE DISTRIBUTION — SARL — SIREN 933 305 021 — SIRET 933 305 021 00026</li>
        <li>Activité : commerce d&apos;alimentation générale</li>
        <li>Siège : 2 rue Croix Castel, 78600 Maisons-Laffitte</li>
        <li>
          Contact / référent RGPD : Mameri Zakaria —{" "}
          <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>
        </li>
        <li>Hébergeur : Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
      </ul>

      <h2>Données collectées</h2>
      <p>Nous pouvons collecter, selon les cas :</p>
      <ul>
        <li>Identifiants et contacts : nom, adresse e-mail, téléphone, entreprise ;</li>
        <li>Contenus que vous fournissez : messages envoyés via les formulaires ;</li>
        <li>Données techniques : adresse IP, logs, informations de navigateur et d&apos;appareil ;</li>
        <li>Préférences et consentements liés aux cookies.</li>
      </ul>

      <h2>Finalités des traitements</h2>
      <ul>
        <li>Traiter et répondre à vos messages et demandes de contact ou de partenariat ;</li>
        <li>Gérer la relation commerciale avec nos revendeurs ;</li>
        <li>Assurer le fonctionnement technique du site et sa sécurité ;</li>
        <li>Mesurer l&apos;audience du site, avec votre consentement ;</li>
        <li>Répondre aux obligations légales et aux demandes d&apos;exercice de droits.</li>
      </ul>

      <h2>Bases juridiques</h2>
      <ul>
        <li>Le consentement (formulaires, cookies non essentiels) ;</li>
        <li>L&apos;exécution d&apos;un contrat ou de mesures précontractuelles ;</li>
        <li>L&apos;intérêt légitime (sécurité, prévention de la fraude, amélioration du service) ;</li>
        <li>Le respect d&apos;une obligation légale ou réglementaire.</li>
      </ul>

      <h2>Durées de conservation</h2>
      <ul>
        <li>
          Données de contact issues d&apos;un formulaire ou d&apos;un échange commercial : 3 ans à
          compter du dernier contact (recommandation CNIL) ;
        </li>
        <li>Dossiers clients, factures et documents comptables : 10 ans (obligations légales) ;</li>
        <li>Données de connexion et logs : durée limitée aux besoins de sécurité ;</li>
        <li>Lorsque la loi impose une conservation plus longue, nous nous y conformons.</li>
      </ul>

      <h2>Destinataires des données</h2>
      <p>Selon les finalités, vos données peuvent être communiquées :</p>
      <ul>
        <li>aux services internes d&apos;OUINE DISTRIBUTION (commercial, comptabilité, support) ;</li>
        <li>
          à nos prestataires techniques intervenant pour notre compte (hébergement, acheminement
          des e-mails de formulaire), dans le cadre de contrats conformes au RGPD ;
        </li>
        <li>aux autorités publiques ou judiciaires si la loi l&apos;exige.</li>
      </ul>
      <p>
        Si des transferts de données hors de l&apos;Union européenne sont nécessaires (notamment
        vers notre hébergeur), nous nous appuyons sur des garanties appropriées telles que les
        clauses contractuelles types de la Commission européenne.
      </p>

      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles adaptées : chiffrement
        des connexions (HTTPS), contrôle des accès, mises à jour logicielles et limitation des
        droits d&apos;accès aux personnes ayant une nécessité opérationnelle.
      </p>

      <h2>Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>droit d&apos;accès et de copie de vos données ;</li>
        <li>droit de rectification des données inexactes ;</li>
        <li>droit à l&apos;effacement, sous réserve des obligations légales de conservation ;</li>
        <li>droit à la limitation du traitement ;</li>
        <li>droit à la portabilité ;</li>
        <li>droit d&apos;opposition, notamment à la prospection ;</li>
        <li>droit de retirer votre consentement à tout moment.</li>
      </ul>
      <p>
        Pour exercer vos droits :{" "}
        <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>. Nous
        pouvons demander une preuve d&apos;identité et répondons dans un délai d&apos;un mois,
        prolongeable de deux mois en cas de complexité.
      </p>

      <h2>Réclamations</h2>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation
        à la CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>
        .
      </p>

      <h2>Évolution de la politique</h2>
      <p>
        Cette politique peut être mise à jour. La version publiée sur cette page fait foi ; nous
        vous conseillons de la consulter régulièrement.
      </p>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        This policy explains what data we collect, why we collect it and how we protect it. OUINE
        DISTRIBUTION (&quot;we&quot;) is committed to respecting the confidentiality of personal
        data and to complying with the General Data Protection Regulation (GDPR).
      </p>

      <h2>Data controller</h2>
      <ul>
        <li>OUINE DISTRIBUTION — SARL — SIREN 933 305 021 — SIRET 933 305 021 00026</li>
        <li>Activity: general food trade</li>
        <li>Head office: 2 rue Croix Castel, 78600 Maisons-Laffitte, France</li>
        <li>
          Contact / GDPR referent: Mameri Zakaria —{" "}
          <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>
        </li>
        <li>Hosting provider: Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
      </ul>

      <h2>Data we collect</h2>
      <ul>
        <li>Identity and contact details: name, email address, phone number, company;</li>
        <li>Content you provide: messages sent through our forms;</li>
        <li>Technical data: IP address, logs, browser and device information;</li>
        <li>Cookie preferences and consents.</li>
      </ul>

      <h2>Purposes</h2>
      <ul>
        <li>Processing and answering your messages and partnership requests;</li>
        <li>Managing the commercial relationship with our resellers;</li>
        <li>Ensuring the technical operation and security of the site;</li>
        <li>Measuring the site&apos;s audience, with your consent;</li>
        <li>Complying with legal obligations and data-subject requests.</li>
      </ul>

      <h2>Legal bases</h2>
      <ul>
        <li>Consent (forms, non-essential cookies);</li>
        <li>Performance of a contract or pre-contractual measures;</li>
        <li>Legitimate interest (security, fraud prevention, service improvement);</li>
        <li>Compliance with a legal obligation.</li>
      </ul>

      <h2>Retention periods</h2>
      <ul>
        <li>
          Contact data from a form or commercial exchange: 3 years from the last contact (CNIL
          recommendation);
        </li>
        <li>Customer files, invoices and accounting documents: 10 years (legal obligations);</li>
        <li>Connection data and logs: limited to security needs;</li>
        <li>Where the law requires longer retention, we comply.</li>
      </ul>

      <h2>Recipients</h2>
      <ul>
        <li>OUINE DISTRIBUTION internal teams (sales, accounting, support);</li>
        <li>
          Technical service providers acting on our behalf (hosting, form email delivery), under
          GDPR-compliant contracts;
        </li>
        <li>Public or judicial authorities where legally required.</li>
      </ul>
      <p>
        Where transfers outside the European Union are necessary (in particular to our hosting
        provider), we rely on appropriate safeguards such as the European Commission&apos;s
        standard contractual clauses.
      </p>

      <h2>Security</h2>
      <p>
        We implement appropriate technical and organisational measures: encrypted connections
        (HTTPS), access control, software updates and restriction of access rights to staff with
        an operational need.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>Right of access and copy;</li>
        <li>Right to rectification;</li>
        <li>Right to erasure, subject to legal retention obligations;</li>
        <li>Right to restriction of processing;</li>
        <li>Right to data portability;</li>
        <li>Right to object, in particular to direct marketing;</li>
        <li>Right to withdraw consent at any time.</li>
      </ul>
      <p>
        To exercise your rights:{" "}
        <a href="mailto:contact@ouine-distribution.com">contact@ouine-distribution.com</a>. We may
        request proof of identity and will reply within one month, extendable by two months for
        complex requests.
      </p>

      <h2>Complaints</h2>
      <p>
        If you believe your rights are not being respected, you may lodge a complaint with the
        French supervisory authority, the CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex
        07 —{" "}
        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        This policy may be updated. The version published on this page prevails; we advise you to
        review it regularly.
      </p>
    </>
  );
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <LegalShell eyebrow={dict.footer.legalTitle} title={dict.meta.privacyTitle}>
      {locale === "fr" ? <FrenchContent /> : <EnglishContent />}
    </LegalShell>
  );
}
