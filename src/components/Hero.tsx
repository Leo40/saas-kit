import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const techLogos = [
    {
      name: "Next.js",
      src: "/images/logos/nextjs.svg",
      alt: "Next.js Logo",
    },
    {
      name: "Tailwind CSS",
      src: "/images/logos/tailwindcss.svg",
      alt: "Tailwind CSS Logo",
    },
    {
      name: "Shadcn/ui",
      src: "/images/logos/shadcnui.svg",
      alt: "Shadcn/ui Logo",
    },
    {
      name: "Supabase",
      src: "/images/logos/supabase.svg",
      alt: "Supabase Logo",
    },
    { name: "Stripe", src: "/images/logos/stripe.svg", alt: "Stripe Logo" },
    {
      name: "NextAuth",
      src: "/images/logos/nextauth.jpg",
      alt: "NextAuth Logo",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Stop Wrestling with Next.js Auth
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A professional, production-ready starter kit for Next.js, Next-Auth,
            Supabase, and Stripe. Get from clone to a deployed, monetizable app
            in under an hour, not weeks.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold cursor-pointer"
          >
            Pre-Order Now - $49
          </Button>

          <Button
            variant="link"
            size="lg"
            aria-label="Join early access waitlist"
            className="px-4 py-2 text-base font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden ">
            <Image
              src="/images/centered-hero-mockup.webp"
              alt="NextBase Dashboard and Mobile App Mockup"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="space-y-8 pt-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700">
            Built with the Modern, Production-Ready Stack Developers Trust
          </h2>

          {/* Tech Stack Logos */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
