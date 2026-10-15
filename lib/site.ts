export const site = {
  name: "Daly Creation",
  tagline: "Custom laser-cut wood, made in Minnesota",
  email: "info@dalycreation.com",
  location: "Minnesota",
  url: "https://dalycreation.com",
  /**
   * Stripe Checkout wiring.
   * Set STRIPE_SECRET_KEY (test mode preferred until ready) and optionally
   * add stripePriceId on each product in lib/products.ts.
   * Buy buttons call /api/checkout which uses these env vars.
   */
  stripe: {
    configured: Boolean(
      process.env.STRIPE_SECRET_KEY &&
        process.env.STRIPE_SECRET_KEY.startsWith("sk_")
    ),
    testModeHint:
      "Use Stripe test keys (sk_test_...) until prices and photos are confirmed.",
  },
};
