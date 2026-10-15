import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "../../../lib/products";
import { site } from "../../../lib/site";

/**
 * Stripe Checkout wiring spot.
 *
 * Required env (test mode until ready):
 *   STRIPE_SECRET_KEY=sk_test_...
 *
 * Optional per product:
 *   set stripePriceId on the product in lib/products.ts
 *   OR leave unset and this route creates a one-off price_data line item
 *   from the placeholder priceCents (still needs family price confirmation).
 *
 * Do NOT create live Stripe products from this app without approval.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = String(body.slug || "");
    const product = getProduct(slug);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found." },
        { status: 404 }
      );
    }

    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret || !secret.startsWith("sk_")) {
      return NextResponse.json({
        message:
          "Stripe is not configured yet. Email " +
          site.email +
          " to order \"" +
          product.name +
          "\", or use the Custom order form. " +
          "To enable checkout: add STRIPE_SECRET_KEY (prefer sk_test_...) in Vercel env, then redeploy.",
      });
    }

    const stripe = new Stripe(secret, {
      apiVersion: "2025-02-24.acacia",
    });

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      site.url;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      product.stripePriceId
        ? [{ price: product.stripePriceId, quantity: 1 }]
        : [
            {
              quantity: 1,
              price_data: {
                currency: "usd",
                unit_amount: product.priceCents,
                product_data: {
                  name: product.name + " (placeholder price)",
                  description:
                    product.shortDescription +
                    " — price is a placeholder pending shop confirmation.",
                },
              },
            },
          ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/shop/${product.slug}?checkout=success`,
      cancel_url: `${origin}/shop/${product.slug}?checkout=cancel`,
      customer_email: undefined,
      metadata: {
        product_slug: product.slug,
        price_placeholder: "true",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { message: "Stripe did not return a checkout URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Checkout failed unexpectedly.";
    return NextResponse.json(
      {
        message:
          "Could not start Stripe Checkout (" +
          message +
          "). Email " +
          site.email +
          " to order instead.",
      },
      { status: 500 }
    );
  }
}
