import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    // Pas de middleware (bugs runtime Edge/Node sur Vercel) : redirections statiques.
    // Les anciens chemins WordPress sans préfixe de locale pointent vers /fr.
    return [
      { source: "/", destination: "/fr", permanent: false },
      { source: "/contact", destination: "/fr/contact", permanent: false },
      { source: "/cookies", destination: "/fr/cookies", permanent: false },
      { source: "/mentions-legales", destination: "/fr/mentions-legales", permanent: true },
      {
        source: "/politique-de-confidentialite",
        destination: "/fr/politique-de-confidentialite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
