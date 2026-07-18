# NOTES — Site Ouine Distribution

État du projet au 3 juillet 2026.

## Ce qui est en place

- **Stack** : Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, images via `next/image`, déployé sur Vercel.
- **Bilingue FR/EN** : routes préfixées `/fr` et `/en`, redirection `/` → `/fr` (redirects statiques dans `next.config.ts` — pas de middleware : deux bugs Vercel successifs sur les runtimes Edge puis Node l'ont rendu non fiable), switcher FR/EN dans le header. Les anciens chemins WordPress (`/mentions-legales`, `/politique-de-confidentialite`) redirigent en 308 vers `/fr/…`. Dictionnaires dans `lib/i18n/fr.ts` et `lib/i18n/en.ts` — toute modification de texte se fait là.
- **Pages** : home (héros, 5 piliers « Oui à… », marques avec Mufeed → lien mufeed.fr, secteurs cibles, bloc devenir revendeur avec formulaire, contact), `/contact` (canaux + formulaire), mentions légales, politique de confidentialité, cookies. 404 personnalisée.
- **Formulaires** : « Devenir revendeur » (nom, email, téléphone, entreprise, intérêts par marque, message, consentement RGPD) et contact général. Validation client + serveur, pot de miel anti-spam, messages de succès/erreur dans les deux langues.
- **SEO** : metadata par page avec hreflang fr/en, JSON-LD Organization + LocalBusiness, sitemap.xml, robots.txt, image OpenGraph générée depuis le logo, favicon + apple-icon depuis l'avatar du logo.
- **Cookies** : bandeau consentement (accepter/refuser, choix stocké en localStorage), page cookies détaillée. Aucun outil d'analytics n'est installé à ce jour — si on en ajoute un, le conditionner au consentement et mettre à jour la page cookies.
- **Contenus** : textes et coordonnées repris du site actuel ouine-distribution.com (crawlé), y compris la signature « Oui à la nouveauté / qualité / prix accessibles / tranquillité / évolution ». Logos récupérés du site (variante claire + variante fond sombre + avatar). Photos d'illustration : Unsplash (licence libre).

## ⚠️ Action requise — envoi des formulaires

Les formulaires passent par **FormSubmit** (relais gratuit) vers `contact@ouine-distribution.com`.
**Au premier envoi réel, FormSubmit envoie un email d'activation à cette adresse : il faut cliquer le lien de confirmation, sinon rien n'est délivré.** Aucun envoi de test n'a été déclenché (testé uniquement en local via le pot de miel).

Alternative plus robuste (recommandée à terme) : créer un compte [Resend](https://resend.com), poser `RESEND_API_KEY` (et éventuellement `RESEND_FROM` après vérification du domaine) dans les variables d'environnement Vercel — l'API route bascule automatiquement sur Resend, rien d'autre à changer. Variable optionnelle `CONTACT_EMAIL` pour changer le destinataire.

## Points d'attention

- **Adresse** : le footer du site actuel affiche « 29 rue Jean Borderel, 95100 Argenteuil » comme siège, mais leurs mentions légales indiquent « 2 rue Croix Castel, 78600 Maisons-Laffitte » (RCS). J'ai reproduit ce même arrangement (Argenteuil en façade, Maisons-Laffitte dans le légal) — à faire arbitrer par le client.
- **Hébergeur dans les mentions légales** : mis à jour vers Vercel (l'ancien site mentionnait o2switch).
- **Lien Mufeed** : pointé sur https://mufeed.fr/ (le site actuel liait mufed.com par erreur ; mufeed.fr est l'URL officielle fournie dans /infos).
- **Domaine** : le site est en production sur https://ouine-distribution.vercel.app (projet Vercel `ouine-distribution`, connecté au repo GitHub — chaque push sur `main` redéploie). Pour basculer ouine-distribution.com, ajouter le domaine dans le projet Vercel puis mettre à jour les DNS. `NEXT_PUBLIC_SITE_URL` est déjà par défaut sur https://ouine-distribution.com (canonicals/sitemap corrects dès la bascule).
- **Vercel** : le projet avait été créé sans preset framework (`framework: null`), ce qui cassait le routage (404 partout sauf /public) — corrigé par `vercel.json` (`"framework": "nextjs"`). Ne pas le supprimer.
- **Photos** : les visuels Unsplash peuvent être remplacés par de vraies photos produits/entrepôt quand le client en fournit (`public/images/`, mêmes noms de fichiers).

## Structure rapide

- `app/[locale]/…` — pages (layout, home, contact, légal, cookies)
- `app/api/contact/route.ts` — endpoint des formulaires
- `components/` — header, footer, sections home, formulaires, bandeau cookies
- `lib/i18n/` — dictionnaires FR/EN ; `lib/site.ts` — coordonnées / URL du site
- `scripts/prepare-assets.mjs` — régénère logos/photos/favicon/OG depuis /infos (dossier local non versionné)

## Vérifié

- `npm run build` sans erreur ni warning.
- Mobile 375 px : menu plein écran, formulaire, switcher langue — fluides.
- Redirection `/` → locale, hreflang, sitemap, robots, JSON-LD, 404.
- API formulaire : 400 sur données invalides, honeypot silencieux, messages d'erreur affichés côté client.
