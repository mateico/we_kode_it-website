import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { need, email } = await request.json();

  if (!need || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { env } = getCloudflareContext();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "We Kode It <onboarding@resend.dev>",
      to: "mateo.rial@wekodeit.com",
      reply_to: email,
      subject: "New project inquiry",
      text: `From: ${email}\n\n${need}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: await res.text() }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
