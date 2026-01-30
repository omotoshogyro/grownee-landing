"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnAnalyze() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with horizontal lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-[1px] bg-gray-200 flex-1"></div>
          <p className="text-[13px] uppercase tracking-[0.2em] text-gray-500 font-medium whitespace-nowrap">
            OTHER FEATURES
          </p>
          <div className="h-[1px] bg-gray-200 flex-1"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Savings Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            {/* Dark Green Box with SVG */}
            <div 
              className="h-[386px] flex items-center justify-center p-12 border-r border-gray-800 lg:border-r-0"
              style={{ backgroundColor: '#0A1D14' }}
            >
              <div className="relative w-64 h-64">
                <Image 
                  src="/stacked-coin.svg" 
                  alt="Stacked Savings Coins" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Section Below */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-foreground">Savings</h3>
                <span className="px-3 py-1 bg-[#FDF2E9] text-[#AF6632] text-[10px] tracking-wider rounded-md font-bold">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
                Effortlessly track all your expenses and income with our user-
                friendly logging system, ensuring you never miss a detail.
              </p>
            </div>
          </motion.div>

          {/* Investment Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            {/* Dark Gray/Black Box with SVG */}
            <div 
              className="h-[386px] flex items-center justify-center p-12"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="relative w-64 h-64">
                <Image 
                  src="/stacked-coin.svg" 
                  alt="Stacked Investment Coins" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Section Below */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-foreground">Investment</h3>
                <span className="px-3 py-1 bg-[#FDF2E9] text-[#AF6632] text-[10px]  tracking-wider rounded-md font-bold">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
                Effortlessly track all your expenses and income with our user-
                friendly logging system, ensuring you never miss a detail.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}