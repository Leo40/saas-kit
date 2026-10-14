import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Early Access",
    price: "$49",
    originalPrice: "$99",
    description: "Pre-order now and lock in 50% off the launch price.",
    cta: "Pre-Order Now",
    href: "/#waitlist",
    featured: true,
    features: [
      "Full source code at launch",
      "Auth, billing, and dashboard included",
      "Unlimited personal and client projects",
      "7-day no-questions-asked refund",
    ],
  },
  {
    name: "Launch",
    price: "$99",
    description: "Standard license once PlankBase ships publicly.",
    cta: "Join the Waitlist",
    href: "/#waitlist",
    featured: false,
    features: [
      "Full source code and documentation",
      "Auth, billing, and dashboard included",
      "Unlimited personal and client projects",
      "Email support from the founder",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Simple pricing. Launch faster.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            One license. Unlimited projects. Pre-order now to save 50% and get
            access as soon as we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.featured
                  ? "border-indigo-200 bg-indigo-50/40 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-gray-600">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.originalPrice ? (
                  <span className="text-lg text-gray-400 line-through">
                    {plan.originalPrice}
                  </span>
                ) : null}
                <span className="text-gray-500">one-time</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 w-full font-semibold ${
                  plan.featured
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50"
                }`}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
