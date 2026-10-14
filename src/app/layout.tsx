import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PlankBase - Next.js Starter Kit Case Study",
  description:
    "A production-ready Next.js starter kit with Next-Auth, Supabase, and Stripe. Go from clone to a deployed, monetizable app in under an hour.",
  openGraph: {
    title: "PlankBase - Next.js Starter Kit Case Study",
    description:
      "A production-ready Next.js starter kit with Next-Auth, Supabase, and Stripe. Launch faster with auth, billing, and a polished dashboard included.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlankBase - Next.js Starter Kit Case Study",
    description:
      "A production-ready Next.js starter kit with Next-Auth, Supabase, and Stripe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
