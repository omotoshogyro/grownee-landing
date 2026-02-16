"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Grownee?",
    answer:
      "Grownee is a budgeting and personal finance app that helps you track your income and expenses, understand your spending, and build better money habits over time.",
  },
  {
    question: "Is Grownee free to use?",
    answer:
      "Yes. The current version of Grownee is completely free to use.",
  },
  {
    question: "Who is Grownee for?",
    answer:
      "Grownee is for students, young professionals, freelancers, and anyone who wants a simple and practical way to manage their money without complicated tools.",
  },
  {
    question: "Do I need financial knowledge to use Grownee?",
    answer:
      "No. Grownee is designed to be easy to use, even if you are new to budgeting or personal finance.",
  },
  {
    question: "How do I track my expenses?",
    answer:
      "You can manually log your income and expenses inside the app. Grownee helps you categorize and understand your spending clearly.",
  },
  {
    question: "Can Grownee connect to my bank account?",
    answer:
      "Not yet. Bank connections are not available in the current version. We are working on adding it in our next version.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. We take data privacy and security seriously. Your information is protected and will never be shared without your permission.",
  },
  {
    question: "Can I use Grownee on multiple devices?",
    answer:
      "Yes. You can access your account across supported devices once you log in.",
  },
  {
    question: "Will Grownee add more features later?",
    answer:
      "Yes. Grownee will continue to improve over time. New features will be added based on user feedback and real financial needs.",
  },
  {
    question: "How can I contact Grownee?",
    answer:
      "You can reach us through the contact page on our website or send an email to our support team for help and feedback (support@grownee.com).",
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
