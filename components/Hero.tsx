"use client";

import { motion } from "framer-motion";

const avatars = [
  { initial: "A", bg: "#2a7a52" },
  { initial: "T", bg: "#c9a84c" },
  { initial: "K", bg: "#4a7a8a" },
  { initial: "F", bg: "#8a4a6a" },
  { initial: "B", bg: "#4a6a8a" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Original background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url(/background-pattern.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "0 -200px",
          height: "calc(100% - 80px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase"
          style={{
            background: "#e8f5ee",
            borderColor: "rgba(21,179,105,0.25)",
            color: "#15B369",
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full"
            style={{ background: "#15B369", animation: "heroPulse 2s infinite" }}
          />
          Now in Beta — Limited Spots
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mb-6 text-[#1a1a1a]"
          style={{
            fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Finally, a budget app built for{" "}
          <em className="italic" style={{ color: "#15B369" }}>
            your money realities
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[1.05rem] leading-[1.7] text-[#4a4a4a] max-w-[520px] mx-auto mb-10"
        >
          Track expenses, sync your bank accounts, and budget for every
          category that matters — subscriptions, rent, savings goals, and
          more — all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 items-center justify-center mb-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-[0.95rem] transition-all hover:-translate-y-0.5"
            style={{
              background: "#15B369",
              boxShadow: "0 4px 24px rgba(21,179,105,0.3)",
            }}
          >
            Start Free Today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-5 py-4 rounded-full font-medium text-[0.92rem] border-[1.5px] transition-all hover:border-[#15B369] hover:text-[#15B369]"
            style={{ borderColor: "rgba(26,26,26,0.15)", color: "#1a1a1a" }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M6 5.5L10 7.5L6 9.5V5.5Z" fill="currentColor" />
            </svg>
            See how it works
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex">
            {avatars.map((av, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full border-[2.5px] border-white flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: av.bg,
                  marginRight: i < avatars.length - 1 ? "-10px" : 0,
                }}
              >
                {av.initial}
              </span>
            ))}
          </div>
          <div className="text-[0.82rem] text-[#8a8a8a] leading-[1.4] pl-3 text-left">
            <strong className="text-[#1a1a1a] block">3,200+ people</strong>
            already tracking their money smarter
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}
