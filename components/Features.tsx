"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
{
    icon: "/automatic_bank.svg",
    title: "Log Income & Expenses",
    description:
      "Add every transaction in seconds. Categorise your spending your way — from rent and food to anything that matters in your life.",
  },
  {
    icon: "/smart_budgeting.svg",
    title: "Set Monthly Budgets",
    description:
      "Assign a budget to each category and watch your spending against it in real-time. Know exactly how much you have left before the month ends.",
  },
  {
    icon: "/susbscription_tracker.svg",
    title: "Smart Budget Alerts",
    description:
      "Get notified when you're approaching your limits. Stay ahead of overspending before it happens — not after.",
  },
  {
    icon: "/financial_report.svg",
    title: "Spending Insights",
    description:
      "Clear visual breakdowns of where your money goes each month. Patterns you never noticed become impossible to ignore.",
  },
  {
    icon: "/financial_goals.svg",
    title: "Budget History",
    description:
      "Access your past months of budgets and see how your spending evolves over time. Build better habits month by month.",
  },
  {
    icon: "/tax_estimates.svg",
    title: "Any Currency, Anywhere",
    description:
      "Whether you earn in dollars, pounds, naira, euros, or anything else — Grownee works for you, wherever you are in the world.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-[5%] bg-[#fdfcf9]">
      <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
        <div>
          <span
            className="inline-block text-[0.72rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-[18px]"
            style={{ background: "#e8f5ee", color: "#15B369" }}
          >
            Everything you need
          </span>
          <h2
            className="font-display text-[#1a1a1a] tracking-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Tools built around{" "}
            <em className="italic" style={{ color: "#15B369" }}>
              how you actually spend
            </em>
          </h2>
          <p className="text-[1rem] leading-[1.7] text-[#4a4a4a] max-w-[520px] mt-4">
            From automatic budgeting to goal tracking, Grownee gives you the
            tools to take control of your financial future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white border rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: "rgba(6,50,29,0.14)" }}
            whileHover={{ boxShadow: "0 12px 48px rgba(6,50,29,0.1)" }}
          >
            {/* Top accent line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="w-12 h-12 mb-5">
              <Image
                src={feat.icon}
                alt={feat.title}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-[1.05rem] font-semibold text-[#1a1a1a] mb-2.5">
              {feat.title}
            </h3>
            <p className="text-[0.88rem] leading-[1.65] text-[#4a4a4a]">
              {feat.description}
            </p>
            {feat.tag && (
              <span
                className="inline-block mt-4 text-[0.68rem] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
                style={{ background: "#f5e9c8", color: "#c9a84c" }}
              >
                {feat.tag}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
