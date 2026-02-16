"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const tabs = ["Create a Budget", "Add Spending", "Add Income"];

const tabImages = [
  "/budget-summary.png",
  "/budget-summary.png",
  "/budget-summary.png",
];

const steps = [
  {
    number: "01",
    title: "Input Budget Amount.",
    description:
      "The budgeting system is goal oriented. You'll need to input your budget amount for the month firstly.",
  },
  {
    number: "02",
    title: "Select Expense Categories",
    description:
      "After inputting your budget amount, you'll then select or create expenses categories for the month.",
  },
  {
    number: "03",
    title: "Allocate Amount to Categories",
    description:
      "After you've selected or created your expense category for the month, you'll then allocate amount to each expense.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white w-full flex justify-center">
      <div className="w-full max-w-[1440px]">
        {/* Header and Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[13px] uppercase tracking-[0.2em] text-gray-500 mb-4 font-medium">
              HOW IT WORKS
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                  index === activeTab
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content Wrapper with 120px Padding */}
        <div className="w-full px-4 lg:px-[120px]">
          {/* Grid with 40px Gap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[40px] items-stretch">
            
            {/* LEFT SIDE - Steps */}
            <div className="bg-gray-100 rounded-[32px] lg:rounded-[80px] p-8 lg:p-16 flex flex-col justify-center">
              <div className="space-y-0 max-w-lg mx-auto lg:mx-0">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex gap-6 lg:gap-8 py-8 ${
                      index !== steps.length - 1 ? "border-b border-gray-300" : ""
                    }`}
                  >
                    <div>
                      <span className="text-[60px] lg:text-[80px] font-display leading-none text-gray-300">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-3 lg:pt-4">
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#AFE47C] rounded-[32px] lg:rounded-[80px] overflow-hidden min-h-[500px] lg:min-h-auto flex items-end justify-center pb-8 lg:pb-16"
            >
              <div className="relative z-10 w-full max-w-sm lg:max-w-md px-8">
                <Image
                  src={tabImages[activeTab]}
                  alt={tabs[activeTab]}
                  width={400}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl" 
                  priority
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}