import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    name,
    email,
    platform,
    phone,
    country,
    timezone,
    day,
    timeFrom,
    timeTo,
  } = (await request.json()) as {
    name: string;
    email: string;
    platform: string;
    phone?: string;
    country?: string;
    timezone: string;
    day: string;
    timeFrom: string;
    timeTo: string;
  };

  if (
    !name ||
    !email ||
    !platform ||
    !timezone ||
    !day ||
    !timeFrom ||
    !timeTo
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { env } = getCloudflareContext();

  const RESEND_API_KEY = (env as { RESEND_API_KEY: string }).RESEND_API_KEY;

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Preferred platform: ${platform}`,
    phone ? `Phone: ${phone}` : null,
    country ? `Country: ${country}` : null,
    `Timezone: ${timezone}`,
    `Preferred day: ${day}`,
    `Preferred time range: ${timeFrom} - ${timeTo}`,
  ].filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "We Kode It <onboarding@resend.dev>",
      to: "mateo.rial@wekodeit.com",
      reply_to: email,
      subject: "New call booking request",
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: await res.text() }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
