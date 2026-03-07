import React from "react";
import Image from "next/image";
import { Shield, Component, BookText, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Auth, Solved",
      description:
        "A complete, secure auth system out of the box. Includes sign-in, sign-up, password reset, and social login flows pre-configured with Next-Auth.",
    },
    {
      icon: Component,
      title: "App Router Best Practices",
      description:
        'Stop fighting with "use client." Our starter is crafted with a clean, modern architecture that follows the latest Next.js 14 best practices.',
    },
    {
      icon: BookText,
      title: "Docs That Actually Help",
      description:
        "More than just code. Our detailed guides explain the 'why' behind our choices, getting you from clone to a deployed, authenticated app in minutes.",
    },
  ];

  return (
    <section className="px-6 py-4 md:px-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Features
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            A Complete Toolkit to Launch Your SaaS
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PlankBase provides a secure, scalable, and beautifully designed
            foundation with pre-built solutions for the most common development
            hurdles.
          </p>
        </div>

        {/* Central Mockup Image */}
        <div className="relative w-full max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/centered-hero-mockup.webp"
              alt="PlankBase Dashboard and Mobile App Features Mockup"
              width={1200}
              height={700}
              className="w-full h-auto"
              // priority
              loading="lazy"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div key={index} className="text-center space-y-4">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Link */}
                <Button
                  variant="link"
                  size="lg"
                  aria-label="Join early access waitlist"
                  className="px-4 py-2 text-base font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="w-6 h-6 py-auto" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
