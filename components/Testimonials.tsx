"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    quote:
      "I never realised how much I was spending on subscriptions and takeout until Grownee showed me. Saved over $800 in two months just by seeing the numbers clearly.",
    name: "Alex Morrison",
    role: "London · Software Engineer",
    initial: "A",
    avatarBg: "#2a7a52",
  },
  {
    stars: 5,
    quote:
      "The custom categories feature alone made it worth it. Every other app felt too rigid. Grownee fits my actual spending habits perfectly.",
    name: "Sarah Kim",
    role: "New York · Business Owner",
    initial: "S",
    avatarBg: "#c9a84c",
  },
  {
    stars: 5,
    quote:
      "Bank sync is seamless. All my accounts connected in under a minute. Now I don't have to log every transaction manually — it just works.",
    name: "James Okafor",
    role: "Toronto · Healthcare",
    initial: "J",
    avatarBg: "#3498db",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-[5%]" style={{ background: "#f8f6f1" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="inline-block text-[0.72rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-[18px]"
          style={{ background: "#e8f5ee", color: "#15B369" }}
        >
          Real users
        </span>
        <h2
          className="font-display text-charcoal tracking-tight"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          People taking control
          <br />
          of their money
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-3xl p-7 border transition-all hover:-translate-y-1"
            style={{
              borderColor: "rgba(21,179,105,0.14)",
              boxShadow: "none",
            }}
            whileHover={{ boxShadow: "0 8px 32px rgba(21,179,105,0.08)" }}
          >
            <div className="text-[0.85rem] tracking-[2px] mb-3.5" style={{ color: "#c9a84c" }}>
              {"★".repeat(t.stars)}
            </div>
            <p className="text-[0.92rem] leading-[1.7] text-mid mb-5 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: t.avatarBg }}
              >
                {t.initial}
              </div>
              <div>
                <div className="text-[0.88rem] font-semibold text-charcoal">
                  {t.name}
                </div>
                <div className="text-[0.75rem] text-muted">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
