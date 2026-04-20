"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    period: "Forever free",
    featured: false,
    features: [
      "Manual budgeting.",
      "2 months history.",
      "2 budget report downloads per month.",
    ],
    cta: "Get Started Free",
    btnClass: "outline" as const,
  },
  {
    name: "Grownee Premium",
    monthly: "$4.99",
    yearly: "$49.90",
    badge: "Most Popular",
    featured: true,
    features: [
      "Automatic budgeting.",
      "Connect up to 3 bank accounts.",
      "1 year budget history.",
      "Unlimited budget report downloads.",
    ],
    cta: "Upgrade to Premium",
    btnClass: "green" as const,
  },
  {
    name: "Premium Plus",
    monthly: "$9.99",
    yearly: "$99.90",
    featured: false,
    features: [
      "Automatic budgeting.",
      "Connect up to 5 bank accounts.",
      "5 years budget history.",
      "Unlimited budget report downloads.",
    ],
    cta: "Upgrade to Plus",
    btnClass: "green" as const,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-[5%] bg-[#fdfcf9]">
      <div className="text-center mb-10">
        <span
          className="inline-block text-[0.72rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-[18px]"
          style={{ background: "#e8f5ee", color: "#15B369" }}
        >
          Pricing
        </span>
        <h2
          className="font-display text-[#1a1a1a] tracking-tight mx-auto mb-2.5"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Choose a plan that fits your finance lifestyle
        </h2>
        <p className="text-[1rem] leading-[1.7] text-[#4a4a4a] mx-auto max-w-[520px]">
          Start with our free plan or unlock premium features to supercharge
          your finances.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-14">
        <span className="text-[0.88rem] font-medium text-[#4a4a4a]">
          Billing period:
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setYearly(false)}
            className="px-4 py-1.5 rounded-full text-[0.85rem] font-medium transition-all"
            style={
              !yearly
                ? {
                    border: "1.5px solid #15B369",
                    color: "#15B369",
                    background: "transparent",
                    fontWeight: 600,
                  }
                : {
                    border: "1.5px solid transparent",
                    color: "#8a8a8a",
                    background: "transparent",
                  }
            }
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className="px-4 py-1.5 rounded-full text-[0.85rem] font-medium transition-all flex items-center gap-1.5"
            style={
              yearly
                ? {
                    border: "1.5px solid #15B369",
                    color: "#15B369",
                    background: "transparent",
                    fontWeight: 600,
                  }
                : {
                    border: "1.5px solid transparent",
                    color: "#8a8a8a",
                    background: "transparent",
                  }
            }
          >
            Yearly
            <span
              className="text-[0.72rem] font-bold"
              style={{ color: yearly ? "#15B369" : "#c9a84c" }}
            >
              (Save 17%)
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-white rounded-[20px] p-8 border flex flex-col"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
          >
            {plan.badge && (
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-[13px] text-[0.68rem] font-bold tracking-[0.06em] uppercase px-4 py-1 rounded-full text-white whitespace-nowrap"
                style={{ background: "#15B369" }}
              >
                {plan.badge}
              </div>
            )}

            {/* Plan name */}
            <div className="text-[0.85rem] font-medium text-[#4a4a4a] mb-3">
              {plan.name}
            </div>

            {/* Price */}
            <div
              className="font-display font-bold leading-none mb-1 text-[#1a1a1a]"
              style={{ fontSize: "2.4rem" }}
            >
              {yearly && plan.yearly ? plan.yearly : plan.monthly}
            </div>
            <div className="text-[0.8rem] text-[#8a8a8a] mb-6">
              {plan.period ?? (yearly ? "per year" : "per month")}
            </div>

            {/* Features */}
            <ul className="mb-8 flex-1 space-y-0">
              {plan.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 py-2 text-[0.86rem] text-[#4a4a4a] border-b"
                  style={{ borderColor: "rgba(0,0,0,0.07)" }}
                >
                  <span
                    className="w-[18px] h-[18px] min-w-[18px] rounded-full flex items-center justify-center text-[10px] font-bold mt-[1px]"
                    style={{ background: "#e8f5ee", color: "#15B369" }}
                  >
                    ✓
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className="w-full py-3.5 rounded-full text-[0.9rem] font-semibold transition-all cursor-pointer"
              style={
                plan.btnClass === "green"
                  ? { background: "#15B369", color: "#fff", border: "none" }
                  : {
                      background: "transparent",
                      color: "#1a1a1a",
                      border: "1.5px solid rgba(0,0,0,0.15)",
                    }
              }
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
