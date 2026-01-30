"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background Pattern - ends at bottom of images */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/background-pattern.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: '0 -200px',
          height: 'calc(100% - 80px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[18px] leading-[26px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold"
          >
            SAVE, INVEST AND BUDGET WISELY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] leading-[48px] font-medium text-foreground mb-8"
          >
            Track your spending, monitor your income, investments, net worth and
            optimize your financial future.
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-8 py-3.5 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-[15px]"
            style={{ backgroundColor: '#15B369' }}
          >
            Join Beta
          </motion.button>
        </div>

        {/* Stacked Images - Coins on top of Phone */}
        <div className="relative max-w-4xl mx-auto h-[600px] flex items-end justify-center">
          {/* iPhone - Bottom Layer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-0 w-full max-w-sm"
          >
            <Image
              src="/iphone-summary.png"
              alt="Budget Summary App"
              width={400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Hero Coins - Top Layer (Wider, in front) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[931px]">
            <Image
              src="/hero-coin.svg"
              alt=""
              width={931}
              height={383}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}