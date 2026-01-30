"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Grownee?",
    answer:
      "Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It's designed to simplify money growth, all in one app.",
  },
  {
    question: "Why should I join the waitlist?",
    answer:
      "By joining the waitlist, you'll get early access to Grownee, exclusive beta features, and special launch pricing. You'll also be among the first to experience our innovative approach to personal finance management.",
  },
  {
    question: "Is Grownee safe to use?",
    answer:
      "Absolutely! Grownee uses bank-level encryption and security measures to protect your financial data. We never store your banking credentials, and all data transmission is encrypted end-to-end.",
  },
  {
    question: "When will Grownee launch?",
    answer:
      "We're currently in beta testing phase and plan to launch publicly in Q2 2026. Beta testers from the waitlist will get early access before the official launch.",
  },
  {
    question: "Who can join Grownee?",
    answer:
      "Grownee is available to anyone who wants to take control of their financial future. Whether you're just starting out or already managing complex finances, Grownee adapts to your needs.",
  },
  {
    question: "How will I know when Grownee is ready?",
    answer:
      "We'll notify all waitlist members via email as soon as Grownee is ready for beta testing and again for the official launch. Make sure to check your email regularly for updates!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[34px] sm:text-4xl lg:text-[42px] font-medium text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-0 py-6 flex items-start justify-between text-left hover:opacity-70 transition-opacity"
              >
                <span className="text-[17px] font-medium text-foreground pr-8 leading-relaxed">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="text-gray-600 text-[15px] leading-relaxed pr-8">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
