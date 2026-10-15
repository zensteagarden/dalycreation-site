export const site = {
  name: "Daly Creation",
  tagline: "Custom laser-cut wood, made in Minnesota",
  email: "hello@dalycreation.com",
  location: "Minnesota",
  url: "https://dalycreation.com",
  /**
   * Stripe Checkout wiring.
   * Set STRIPE_SECRET_KEY (test mode preferred until ready) and optionally
   * Buy buttons use Stripe Payment Links (buyUrl in lib/products.ts).
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
