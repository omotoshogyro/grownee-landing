"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up free in seconds. No credit card required. Just your email and a password and you're in.",
  },
  {
    number: "02",
    title: "Connect Your Banks",
    description:
      "Securely link your bank accounts in seconds. Grownee pulls your transactions automatically — safely and instantly.",
  },
  {
    number: "03",
    title: "Set Your Budget",
    description:
      "Input your monthly budget, assign amounts to categories like rent, food, transport, and bills. Then watch Grownee track it all for you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 px-[5%] overflow-hidden"
      style={{ background: "#06321D" }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-50%",
          left: "-10%",
          width: "60%",
          height: "200%",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="inline-block text-[0.72rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-[18px]"
          style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
        >
          How it works
        </span>
        <h2
          className="font-display text-white mb-[18px] tracking-tight"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Up and running in under
          <br />3 minutes
        </h2>
        <p className="text-[1rem] leading-[1.7] max-w-[520px]" style={{ color: "rgba(255,255,255,0.7)" }}>
          No complicated setup. No confusing menus. Just a clean path to
          understanding your finances.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative p-9 rounded-3xl border transition-all hover:bg-white/10"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <div
              className="font-display font-bold leading-none mb-4"
              style={{
                fontSize: "4rem",
                color: "rgba(255,255,255,0.08)",
                letterSpacing: "-0.04em",
              }}
            >
              {step.number}
            </div>
            <h3 className="text-[1.1rem] font-semibold text-white mb-2.5">
              {step.title}
            </h3>
            <p className="text-[0.88rem] leading-[1.65]" style={{ color: "rgba(255,255,255,0.65)" }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
