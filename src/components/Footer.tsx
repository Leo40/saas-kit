import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Section */}
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

        {/* Copyright Text */}
        <div className="text-gray-500 text-sm text-center sm:text-left order-last sm:order-none">
          © 2025 NextBase. All rights reserved.
        </div>

        {/* Links and Social Section */}
        <div className="flex items-center space-x-6">
          {/* Text Links */}
          <a
            href="mailto:support@nextbase.com"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
          >
            Privacy Policy
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-3 ml-2">
            <a
              href="https://twitter.com/nextbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/nextbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="View our GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/nextbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
