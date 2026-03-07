"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const STEPS = ["Your App", "Your Stack", "You're Ready"];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    appName: "",
    stack: "next-tailwind",
  });
  const router = useRouter();

  const progress = ((step + 1) / STEPS.length) * 100;

  const handleComplete = () => {
    // TODO: save formData to Supabase profiles table here
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Step labels */}
        <div className="flex justify-between text-sm text-gray-400">
          {STEPS.map((label, i) => (
            <span
              key={label}
              className={i === step ? "text-indigo-600 font-semibold" : ""}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <Progress value={progress} className="h-2" />

        {/* Step 1: App Name */}
        {step === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Name your SaaS</CardTitle>
              <CardDescription>
                This will be shown in your dashboard and emails.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                type="text"
                placeholder="e.g. Acme AI"
                className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.appName}
                onChange={(e) =>
                  setFormData({ ...formData, appName: e.target.value })
                }
              />
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                disabled={!formData.appName}
                onClick={() => setStep(1)}
              >
                Continue →
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Stack picker */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Pick your stack</CardTitle>
              <CardDescription>
                Choose the tech you want pre-configured.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "next-tailwind", label: "Next.js + Tailwind" },
                  { value: "next-mui", label: "Next.js + MUI" },
                  { value: "next-chakra", label: "Next.js + Chakra" },
                  { value: "next-shadcn", label: "Next.js + shadcn/ui" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setFormData({ ...formData, stack: option.value })
                    }
                    className={`p-4 border rounded-xl text-sm font-medium transition-all ${
                      formData.stack === option.value
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-gray-200 hover:border-indigo-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(0)}
                >
                  Back
                </Button>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => setStep(2)}
                >
                  Continue →
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Confirmation */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>🚀 You are all set!</CardTitle>
              <CardDescription>
                Here is a summary of your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">App name</span>
                  <span className="font-medium">{formData.appName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Stack</span>
                  <span className="font-medium">{formData.stack}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={handleComplete}
                >
                  Launch Dashboard →
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
