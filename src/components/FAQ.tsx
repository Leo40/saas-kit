"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: "why-pay",
      question:
        "Why should I pay for this when there are free open-source starters?",
      answer:
        "Free starters are a great way to get started, but they are often complex, unopinionated, and lack support. PlankBase is different. It's a professional, production-ready system designed to solve the most painful parts of the Next.js App Router—auth, sessions, and security—out of the box. We've spent hundreds of hours on the details so you can launch in minutes, not weeks. You're not just buying code; you're buying speed, confidence, and peace of mind. Most starter kits, even premium ones, just give you a link to a GitHub repo and a complicated README file. Some even require you to schedule a 1-on-1 call just to get set up. PlankBase is different. We believe the onboarding should be the most magical part of the experience. Our automated Onboarding Wizard takes you from purchase to a fully deployed, monetizable application on your own Vercel account in under five minutes. You're not buying code; you're buying a frictionless launch.",
    },
    {
      id: "license",
      question: "What does the license include?",
      answer:
        "The PlankBase license is simple. You can use the starter kit to build as many personal or commercial projects as you want. This includes projects for your own business and for your clients. The only thing you cannot do is resell the template itself.",
    },
    {
      id: "refund-policy",
      question: "What is your refund policy?",
      answer:
        "We offer a 7-day, no-questions-asked refund policy. If you're not completely happy with the quality and the time you've saved, just send us an email, and we'll process a full refund.",
    },
    {
      id: "security",
      question: "Is this secure enough for a production application?",
      answer:
        "Absolutely. Security is our top priority. PlankBase is built on top of the most trusted, battle-tested open-source libraries in the ecosystem, including Next-Auth and Supabase. We simply provide a clean, professional, and best-practice implementation of these tools.",
    },
    {
      id: "preorder-receipt",
      question: "What will I receive after I pre-order?",
      answer:
        "You will immediately receive an email confirming your pre-order and your 50% discount. As soon as PlankBase is launched (we're targeting a release in the next 4-6 weeks), you will be the first to receive an email with a private link to download the full source code from GitHub.",
    },
    {
      id: "skill-level",
      question:
        "What skill level is this for? Do I need to be a senior developer?",
      answer:
        "Not at all. PlankBase is designed for developers who are comfortable with React and Next.js but don't want to waste time on repetitive setup. If you have 1-2 years of professional experience, you will find our code clean, easy to understand, and ready to build upon. Our world-class documentation is designed to get you up and running in minutes, regardless of your seniority.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to know about the product and pricing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-gray-200 py-2 cursor-pointer"
              >
                <AccordionTrigger className="flex w-full items-center justify-between py-4 text-left font-semibold text-gray-900 hover:no-underline group [&>svg]:hidden cursor-pointer">
                  <span>{faq.question}</span>
                  <div className="flex items-center ml-4">
                    <PlusCircle className="h-6 w-6 text-indigo-500 cursor-pointer group-data-[state=open]:hidden" />
                    <MinusCircle className="h-6 w-6 text-indigo-500 cursor-pointer hidden group-data-[state=open]:block" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center space-y-6 bg-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900">
            Still have questions?
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Can’t find the answer you’re looking for? Please send me an email.
            I’m the founder and creator, and I’ll get back to you within 24
            hours.
          </p>

          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold cursor-pointer"
          >
            <a href="mailto:support@plankbase.com">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
