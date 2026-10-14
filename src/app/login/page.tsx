"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "error" | "success";
  } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setMessage({ text: error.message, type: "error" });
      else router.push("/dashboard");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${location.origin}/auth/callback` },
      });
      if (error) setMessage({ text: error.message, type: "error" });
      else
        setMessage({
          text: "Check your email to confirm your account!",
          type: "success",
        });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 flex-col justify-between p-12">
        <span className="text-white font-bold text-xl tracking-tight">
          PlankBase
        </span>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Your SaaS,
            <br />
            launched faster.
          </h1>
          <p className="text-indigo-200 text-lg leading-relaxed">
            A production-ready Next.js starter with auth, billing, and a
            beautiful dashboard — all pre-built.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            {[
              "Auth & user management",
              "Stripe billing built-in",
              "Beautiful UI components",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-indigo-100"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-indigo-300 text-sm">
          © {new Date().getFullYear()} PlankBase. All rights reserved.
        </p>
      </div>

      {/* Right form panel */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #eef2ff 0%, #f8faff 50%, #f0f4ff 100%)",
        }}
      >
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <span className="text-indigo-600 font-bold text-xl">PlankBase</span>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === "signin" ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              {mode === "signin"
                ? "Sign in to your account to continue."
                : "Get started with your free demo."}
            </p>
          </div>

          {/* Tab toggle */}
          <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm border border-gray-100">
            <button
              type="button"
              onClick={() => {
                setMode("signin");
                setMessage(null);
              }}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                mode === "signin"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("signup");
                setMessage(null);
              }}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                mode === "signup"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 bg-white border-gray-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 bg-white border-gray-200"
                  required
                />
              </div>
            </div>

            {/* Extra gap before the button */}
            <div className="pt-8">
              {message && (
                <div
                  className={`text-sm px-4 py-3 rounded-lg border mb-4 ${
                    message.type === "error"
                      ? "bg-red-50 text-red-600 border-red-100"
                      : "bg-green-50 text-green-700 border-green-100"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
              >
                {loading
                  ? mode === "signin"
                    ? "Signing in..."
                    : "Creating account..."
                  : mode === "signin"
                  ? "Sign In →"
                  : "Create Account →"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
