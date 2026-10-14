import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="features">
        <FadeIn delay={0}>
          <Features />
        </FadeIn>
      </div>
      <div id="pricing">
        <FadeIn delay={0}>
          <Pricing />
        </FadeIn>
      </div>
      <div id="faq">
        <FadeIn delay={0}>
          <FAQ />
        </FadeIn>
      </div>
      <div id="waitlist">
        <FadeIn delay={0}>
          <CTA />
        </FadeIn>
      </div>
      <FadeIn delay={0}>
        <Footer />
      </FadeIn>
    </main>
  );
}
