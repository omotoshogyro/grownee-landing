"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Grownee?",
    answer:
      "Grownee is a simple personal budgeting app. You log your income and expenses, set monthly budgets by category, and Grownee shows you clearly where your money goes — so you can make better financial decisions.",
  },
  {
    question: "Does it connect to my bank account?",
    answer:
      "No — and that's intentional. Grownee is fully manual. You log your own transactions, which means your banking credentials never leave your hands. Simple, private, and secure by design.",
  },
  {
    question: "What currencies does Grownee support?",
    answer:
      "All of them. Grownee works in any currency — dollars, pounds, euros, naira, or anything else. Just enter your amounts in whatever currency you use and Grownee handles the rest.",
  },
  {
    question: "How does the 7-day free trial work?",
    answer:
      "Sign up and get full Pro access for 7 days — no credit card required. At the end of your trial, subscribe to keep your Pro features.",
  },
  // {
  //   question: "How do I track my expenses?",
  //   answer:
  //     "You can manually log your income and expenses inside the app. Grownee helps you categorize and understand your spending clearly.",
  // },
  // {
  //   question: "Can Grownee connect to my bank account?",
  //   answer:
  //     "Not yet. Bank connections are not available in the current version. We are working on adding it in our next version.",
  // },
  // {
  //   question: "Is my data safe?",
  //   answer:
  //     "Yes. We take data privacy and security seriously. Your information is protected and will never be shared without your permission.",
  // },
  // {
  //   question: "Can I use Grownee on multiple devices?",
  //   answer:
  //     "Yes. You can access your account across supported devices once you log in.",
  // },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, always. No contracts, no cancellation fees. If you cancel, you keep Pro access until the end of your billing period, then move to the free plan automatically.",
  },
  {
    question: "Is Grownee available on mobile?",
    answer:
      "Yes — Grownee is available on both iOS and Android. Download the app and pick up exactly where you left off.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
