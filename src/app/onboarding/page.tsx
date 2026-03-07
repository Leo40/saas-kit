"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #eef2ff 0%, #f8faff 50%, #f0f4ff 100%)",
      }}
    >
      <div className="w-full max-w-lg space-y-6">
        {/* Step labels */}
        <div className="flex justify-between text-sm">
          {STEPS.map((label, i) => (
            <span
              key={label}
              style={{
                color:
                  i === step ? "#4f46e5" : i < step ? "#9ca3af" : "#9ca3af",
                fontWeight: i === step ? 600 : 400,
                transition: "color 0.2s",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full" style={{ height: 4 }}>
          <div
            className="bg-indigo-600 rounded-full"
            style={{
              height: 4,
              width: `${progress}%`,
              transition: "width 0.4s ease",
            }}
          />
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
          {/* Step 1: App Name */}
          {step === 0 && (
            <>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Name your SaaS
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  This will appear in your dashboard and emails.
                </p>
              </div>
              <input
                type="text"
                placeholder="e.g. Acme AI"
                className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
                value={formData.appName}
                onChange={(e) =>
                  setFormData({ ...formData, appName: e.target.value })
                }
              />
              <button
                disabled={!formData.appName}
                onClick={() => setStep(1)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  background: formData.appName ? "#4f46e5" : "#e5e7eb",
                  color: formData.appName ? "#fff" : "#9ca3af",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: formData.appName ? "pointer" : "not-allowed",
                  transition: "background 0.2s",
                }}
              >
                Continue →
              </button>
            </>
          )}

          {/* Step 2: Stack picker */}
          {step === 1 && (
            <>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Pick your stack
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Choose the tech you want pre-configured.
                </p>
              </div>
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
                    style={{
                      padding: "14px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      border:
                        formData.stack === option.value
                          ? "2px solid #4f46e5"
                          : "2px solid #e5e7eb",
                      background:
                        formData.stack === option.value ? "#eef2ff" : "#fff",
                      color:
                        formData.stack === option.value ? "#4338ca" : "#374151",
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                    background: "#fff",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#374151",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 8,
                    border: "none",
                    background: "#4f46e5",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#4338ca")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#4f46e5")
                  }
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {/* Step 3: Confirmation */}
          {step === 2 && (
            <>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  🚀 You are all set!
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Here is a summary of your project configuration.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm border border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-500">App name</span>
                  <span className="font-semibold text-gray-900">
                    {formData.appName}
                  </span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex justify-between">
                  <span className="text-gray-500">Stack</span>
                  <span className="font-semibold text-gray-900">
                    {
                      [
                        { value: "next-tailwind", label: "Next.js + Tailwind" },
                        { value: "next-mui", label: "Next.js + MUI" },
                        { value: "next-chakra", label: "Next.js + Chakra" },
                        { value: "next-shadcn", label: "Next.js + shadcn/ui" },
                      ].find((o) => o.value === formData.stack)?.label
                    }
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                    background: "#fff",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#374151",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 8,
                    border: "none",
                    background: "#4f46e5",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#4338ca")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#4f46e5")
                  }
                >
                  Launch Dashboard →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
