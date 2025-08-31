import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Launch Your SaaS?
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Join the waitlist to get a 50% discount on launch day.
          </p>
        </div>

        <form
          action="/api/waitlist"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            inputMode="email"
            autoCorrect="off"
            className="flex-1 px-4 py-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold"
          >
            Get Early Access
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
