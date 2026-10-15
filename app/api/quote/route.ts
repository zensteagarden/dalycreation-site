import { NextRequest, NextResponse } from "next/server";
import { site } from "../../../lib/site";

type QuoteBody = {
  name?: string;
  email?: string;
  phone?: string;
  kind?: string;
  details?: string;
  budget?: string;
};

function buildMailto(data: Required<Pick<QuoteBody, "name" | "email" | "kind" | "details">> & QuoteBody) {
  const subject = encodeURIComponent(
    `Custom quote: ${data.kind} — ${data.name}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Kind: ${data.kind}`,
      `Budget: ${data.budget || "(not provided)"}`,
      "",
      "Details:",
      data.details,
    ].join("\n")
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

/**
 * Quote intake:
 * 1) If RESEND_API_KEY + QUOTE_TO_EMAIL are set, email info@dalycreation.com via Resend.
 * 2) Always return a mailto fallback so the customer can still send.
 * 3) Log a redacted summary server-side for debugging (no secrets).
 */
export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as QuoteBody;
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const kind = String(data.kind || "").trim();
    const details = String(data.details || "").trim();
    const budget = String(data.budget || "").trim();

    if (!name || !email || !kind || !details) {
      return NextResponse.json(
        { message: "Please fill in name, email, type, and details." },
        { status: 400 }
      );
    }

    const mailto = buildMailto({
      name,
      email,
      phone,
      kind,
      details,
      budget,
    });

    let emailed = false;
    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.QUOTE_TO_EMAIL || site.email;

    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from:
              process.env.QUOTE_FROM_EMAIL ||
              "Daly Creation Quotes <onboarding@resend.dev>",
            to: [to],
            reply_to: email,
            subject: `Custom quote: ${kind} — ${name}`,
            text: [
              `Name: ${name}`,
              `Email: ${email}`,
              `Phone: ${phone || "(not provided)"}`,
              `Kind: ${kind}`,
              `Budget: ${budget || "(not provided)"}`,
              "",
              "Details:",
              details,
            ].join("\n"),
          }),
        });
        emailed = res.ok;
        if (!res.ok) {
          console.error("Resend error", await res.text());
        }
      } catch (e) {
        console.error("Resend failed", e);
      }
    }

    console.log(
      JSON.stringify({
        type: "quote_request",
        kind,
        hasEmail: Boolean(email),
        emailed,
        to,
      })
    );

    if (emailed) {
      return NextResponse.json({
        message: `Thanks — your request was emailed to ${to}. We will reply with a proof path and a price.`,
        emailed: true,
      });
    }

    // Working fallback: open customer's mail client addressed to info@
    return NextResponse.json({
      message: `Opening your email app to send this to ${site.email}. If nothing opens, copy the details and email us directly. To enable server email later, set RESEND_API_KEY (and optional QUOTE_FROM_EMAIL) in Vercel.`,
      emailed: false,
      mailto,
    });
  } catch {
    return NextResponse.json(
      {
        message: `Could not process the form. Please email ${site.email} directly.`,
      },
      { status: 500 }
    );
  }
}
