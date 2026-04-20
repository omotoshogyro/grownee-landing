"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden mx-[5%] mb-24 rounded-[32px] px-[60px] py-20 flex flex-col md:flex-row items-center justify-between gap-10"
      style={{ background: "#06321D" }}
    >
      {/* Gold radial decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-40%",
          right: "-5%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Left */}
      <div className="relative z-10">
        <h2
          className="font-display text-white leading-[1.2] mb-3.5"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
        >
          Ready to take control of your{" "}
          <em className="italic" style={{ color: "#c9a84c" }}>
            finances?
          </em>
        </h2>
        <p className="text-[1rem]" style={{ color: "rgba(255,255,255,0.75)" }}>
          Join 3,200+ people who&apos;ve already started their journey to
          financial clarity.
        </p>
      </div>

      {/* Right */}
      <div className="relative z-10 flex gap-3.5 flex-shrink-0 flex-wrap">
        <a
          href="#"
          className="px-7 py-4 rounded-full text-[0.92rem] font-bold transition-all hover:bg-[#c9a84c] hover:text-white"
          style={{ background: "#fff", color: "#06321D" }}
        >
          Start Free Today
        </a>
        <a
          href="#"
          className="px-7 py-4 rounded-full text-[0.92rem] font-medium transition-all border-[1.5px] text-white hover:bg-white/20"
          style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)" }}
        >
          Join WhatsApp Community
        </a>
      </div>
    </motion.div>
  );
}
