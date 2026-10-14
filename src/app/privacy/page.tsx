import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PlankBase",
  description:
    "How PlankBase collects, uses, and protects information on this Next.js starter kit case study site.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-10">Last updated: October 14, 2026</p>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Overview
            </h2>
            <p>
              PlankBase is a Next.js starter kit case study. This policy
              explains how this site handles information you choose to share,
              such as waitlist signups and account emails.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Information we collect
            </h2>
            <p>
              If you join the waitlist or create an account, we collect the
              email address (and password, for accounts) you submit. We do not
              sell personal data.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How we use it
            </h2>
            <p>
              Waitlist emails are used to notify you about launch access and
              related product updates. Account credentials are used only to
              authenticate you into the demo dashboard.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:support@plankbase.com"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                support@plankbase.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
