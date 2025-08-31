"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-20 md:py-5 bg-white border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-lg opacity-20"
              style={{
                background:
                  "linear-gradient(135deg, #0A0D12 12%, #FFFFFF 100%)",
              }}
            />
            <Image
              src="/images/logos/nextbase-logo.svg"
              alt="NextBase Logo"
              width={20}
              height={20}
              className="w-5 h-5 relative z-10"
            />
          </div>
          <span className="text-xl font-semibold text-gray-900">NextBase</span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-5 w-8.875">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 text-base leading-6 font-semibold transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 text-base leading-6 font-semibold transition-colors duration-200"
          >
            Pricing
          </a>
        </div>
      </div>

      {/* Pre-Order Button */}
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open ? true : false}
        variant="outline"
        className="rounded-full text-sm font-medium border border-indigo-200 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
      >
        Get Early Access
      </Button>
    </nav>
  );
};

export default Navbar;
