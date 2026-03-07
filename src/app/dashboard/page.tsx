"use client";
import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const stats = [
  {
    label: "Total Users",
    value: "0",
    sub: "No users yet",
    color: "text-indigo-600 bg-indigo-50",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "MRR",
    value: "$0",
    sub: "No revenue yet",
    color: "text-emerald-600 bg-emerald-50",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "API Health",
    value: "100%",
    sub: "All systems operational",
    color: "text-blue-600 bg-blue-50",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Status",
    value: "Live",
    sub: "v1.0.0 deployed",
    color: "text-violet-600 bg-violet-50",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
];

const checklist = [
  {
    label: "Auth providers configured",
    done: true,
    description: "Email/password and OAuth ready",
  },
  {
    label: "Environment variables set",
    done: true,
    description: "Supabase keys configured",
  },
  {
    label: "Stripe account connected",
    done: false,
    description: "Add your Stripe secret key to go live",
  },
  {
    label: "Custom domain added",
    done: false,
    description: "Point your DNS to deploy",
  },
  {
    label: "Email templates customized",
    done: false,
    description: "Brand your transactional emails",
  },
];

export default function DashboardPage() {
  const done = checklist.filter((i) => i.done).length;
  const pct = Math.round((done / checklist.length) * 100);
  const [mounted, setMounted] = useState(false);

  // Real user state
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [signedUpAt, setSignedUpAt] = useState<string | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email ?? null);
        if (user.created_at) {
          const date = new Date(user.created_at);
          setSignedUpAt(
            date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
        }
      }
      setUserLoading(false);
    }
    loadUser();
  }, []);

  // Activity feed built from real signup date + dummy milestones
  const activity = [
    {
      event: "Account created",
      time: signedUpAt ?? "—",
      real: true,
    },
    {
      event: "Auth flow configured",
      time: "On project setup",
      real: false,
    },
    {
      event: "Database connected",
      time: "On project setup",
      real: false,
    },
    {
      event: "Dashboard provisioned",
      time: "On project setup",
      real: false,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeSlideUp 0.4s ease forwards;
        }
        .stat-card { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .stat-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .stack-badge { transition: background 0.15s, color 0.15s, border-color 0.15s; }
        .stack-badge:hover { background: #eef2ff; color: #4338ca; border-color: #c7d2fe; }
      `}</style>

      <div className="space-y-8 max-w-6xl mx-auto pt-2">
        {/* Header */}
        <div
          className="fade-up flex items-start justify-between"
          style={{ animationDelay: "0ms" }}
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Project Overview
            </h1>
            {/* Real user email shown here */}
            {!userLoading && userEmail ? (
              <p className="text-gray-400 text-sm mt-1">
                Signed in as{" "}
                <span className="text-indigo-600 font-medium">{userEmail}</span>
              </p>
            ) : (
              <p className="text-gray-400 text-sm mt-1">
                Monitor your SaaS health and track your launch progress.
              </p>
            )}
          </div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#4f46e5",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              transition: "background 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4338ca")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4f46e5")}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.97)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Deploy Update
          </button>
        </div>

        {/* Real user info card */}
        {!userLoading && userEmail && (
          <div
            className="fade-up bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex items-center gap-4"
            style={{ animationDelay: "60ms" }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#4f46e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {userEmail[0].toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{userEmail}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Member since {signedUpAt ?? "—"}
              </p>
            </div>
            <div className="ml-auto">
              <span
                style={{
                  background: "#4f46e5",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 99,
                }}
              >
                Active
              </span>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`fade-up stat-card bg-white rounded-xl border border-gray-100 p-5`}
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {s.label}
                </span>
                <span className={`p-2 rounded-lg ${s.color}`}>{s.icon}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Checklist */}
          <div
            className="fade-up lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6"
            style={{ animationDelay: "380ms" }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-900">Launch Checklist</h2>
              <span className="text-sm font-bold text-indigo-600">{pct}%</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              {done} of {checklist.length} tasks complete
            </p>

            <div
              className="w-full bg-gray-100 rounded-full mb-6"
              style={{ height: 6 }}
            >
              <div
                className="bg-indigo-600 rounded-full"
                style={{
                  height: 6,
                  width: mounted ? `${pct}%` : "0%",
                  transition: "width 1s ease-out",
                }}
              />
            </div>

            <ul className="space-y-4">
              {checklist.map((item, i) => (
                <li
                  key={item.label}
                  className="fade-up flex items-start gap-3"
                  style={{ animationDelay: `${440 + i * 60}ms` }}
                >
                  <div
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                    style={{
                      background: item.done ? "#4f46e5" : "transparent",
                      borderColor: item.done ? "#4f46e5" : "#e5e7eb",
                      transition: "background 0.3s, border-color 0.3s",
                    }}
                  >
                    {item.done && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        item.done
                          ? "text-gray-400 line-through decoration-gray-300"
                          : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Activity — mix of real + dummy */}
            <div
              className="fade-up bg-white rounded-xl border border-gray-100 p-6 flex-1"
              style={{ animationDelay: "420ms" }}
            >
              <h2 className="font-semibold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {activity.map((item, i) => (
                  <div
                    key={i}
                    className="fade-up flex items-start gap-3"
                    style={{ animationDelay: `${480 + i * 60}ms` }}
                  >
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: item.real ? "#4f46e5" : "#d1d5db" }}
                    />
                    <div>
                      <p className="text-sm text-gray-700">{item.event}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div
              className="fade-up bg-white rounded-xl border border-gray-100 p-6"
              style={{ animationDelay: "460ms" }}
            >
              <h2 className="font-semibold text-gray-900 mb-3">Your Stack</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14",
                  "Supabase",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Stripe",
                ].map((tech, i) => (
                  <span
                    key={tech}
                    className="fade-up stack-badge px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100 cursor-default"
                    style={{ animationDelay: `${520 + i * 40}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
