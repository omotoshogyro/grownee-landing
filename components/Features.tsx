"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "/automatic_bank.svg",
    title: "Automatic Bank Sync",
    description:
      "Connect up to 5 bank accounts and let Grownee automatically track every transaction. No manual entry needed.",
  },
  {
    icon: "/smart_budgeting.svg",
    title: "Smart Budgeting",
    description:
      "Set budget by category and watch your spending in real-time. Get alerts when you're approaching your limits.",
  },
  {
    icon: "/financial_goals.svg",
    title: "Financial Goals",
    description:
      "Set and track your savings goals, whether it's an emergency fund, vacation, or car, we'll help you get there.",
  },
  {
    icon: "/susbscription_tracker.svg",
    title: "Subscription Tracker",
    description:
      "Never miss a subscription payment again. Track all your recurring expenses in one place and get alerts before renewals.",
  },
  {
    icon: "/financial_report.svg",
    title: "Historical Reports",
    description:
      "Access up to 2 years of budget history. Download unlimited reports anytime you need them.",
  },
  {
    icon: "/tax_estimates.svg",
    title: "Tax Estimates",
    description:
      "Get smart tax estimates based on your income and spending patterns so you're never caught off guard during filing season.",
    tag: "Coming Soon",
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
