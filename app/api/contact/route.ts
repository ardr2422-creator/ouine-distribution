import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TARGET_EMAIL = process.env.CONTACT_EMAIL ?? "contact@ouine-distribution.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 5000;

type Payload = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  interests?: string[];
  message?: string;
  consent?: boolean;
  website?: string;
};

function clean(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Pot de miel : un bot a rempli le champ caché — on répond OK sans rien envoyer.
  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const type = payload.type === "contact" ? "contact" : "reseller";
  const name = clean(payload.name, 200);
  const email = clean(payload.email, 320);
  const phone = clean(payload.phone, 50);
  const company = clean(payload.company, 200);
  const subject = clean(payload.subject, 300);
  const message = clean(payload.message, MAX_LENGTH);
  const interests = Array.isArray(payload.interests)
    ? payload.interests.map((item) => clean(item, 100)).filter(Boolean).slice(0, 10)
    : [];

  if (!name || !EMAIL_REGEX.test(email) || payload.consent !== true) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const mailSubject =
    type === "reseller"
      ? `[Site Ouine] Demande revendeur — ${company || name}`
      : `[Site Ouine] Contact — ${subject || name}`;

  const lines = [
    `Type : ${type === "reseller" ? "Devenir revendeur" : "Contact"}`,
    `Nom : ${name}`,
    `Email : ${email}`,
    phone && `Téléphone : ${phone}`,
    company && `Entreprise : ${company}`,
    subject && `Objet : ${subject}`,
    interests.length > 0 && `Intérêts : ${interests.join(", ")}`,
    message && `Message :\n${message}`,
  ].filter(Boolean);
  const body = lines.join("\n");

  try {
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "Ouine Distribution <onboarding@resend.dev>",
          to: [TARGET_EMAIL],
          reply_to: email,
          subject: mailSubject,
          text: body,
        }),
      });
      if (!res.ok) throw new Error(`Resend HTTP ${res.status}`);
    } else {
      // Relais FormSubmit : nécessite une activation par email au premier envoi.
      const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: mailSubject,
          _template: "table",
          _captcha: "false",
          Nom: name,
          Email: email,
          ...(phone && { Téléphone: phone }),
          ...(company && { Entreprise: company }),
          ...(subject && { Objet: subject }),
          ...(interests.length > 0 && { Intérêts: interests.join(", ") }),
          ...(message && { Message: message }),
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit HTTP ${res.status}`);
    }
  } catch (error) {
    console.error("[api/contact] envoi échoué :", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
