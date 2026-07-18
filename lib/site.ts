export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://ouine-distribution.com";

export const contact = {
  email: "contact@ouine-distribution.com",
  phone: "+33 6 64 77 42 56",
  phoneHref: "tel:+33664774256",
  whatsapp: "https://wa.me/33664774256",
  linkedin: "https://www.linkedin.com/company/ouine-distribution",
  address: {
    street: "29 rue Jean Borderel",
    postalCode: "95100",
    city: "Argenteuil",
    country: "France",
  },
} as const;
