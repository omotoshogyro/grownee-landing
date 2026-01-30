"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white pb-0"
          style={{
            backgroundImage: 'url(/background-pattern.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: '0 -200px',
          }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[13px] uppercase tracking-[0.2em] text-gray-500 mb-4 font-medium">
                SAVE, INVEST AND BUDGET WISELY
              </p>
              <h1 className="text-4xl sm:text-5xl font-medium text-foreground mb-8">
                About Grownee
              </h1>
            </div>

            {/* Coins Image at bottom */}
            <div className="relative h-48 flex items-end justify-center">
              <Image
                src="/hero-coin.svg"
                alt=""
                width={931}
                height={383}
                className="w-full max-w-4xl h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Grownee Section - Dark Background */}
        <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-white mb-12"
            >
              About Grownee
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#AFE47C] rounded-3xl overflow-hidden mb-12 flex items-end justify-center"
              style={{ height: '327px' }}
            >
              <div className="max-w-sm px-8">
                <Image
                  src="/about-phone.png"
                  alt="Grownee App"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-300"
            >
              <p className="text-[15px] leading-relaxed">
                Grownee is a free budgeting app designed to help everyday people take control of their
                finances without the stress.
              </p>
              <p className="text-[15px] leading-relaxed">
                We believe that money management should not be confusing, overwhelming, or reserved for
                financial experts. Yet for many people, budgeting feels complicated, restrictive, or difficult to
                maintain. Grownee was created to change that.
              </p>
              <p className="text-[15px] leading-relaxed">
                Our goal is straightforward: to help you understand where your money goes and build better
                financial habits, one day at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Grownee Does Section - Dark Background */}
        <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-white mb-12"
            >
              What Grownee Does
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#AFE47C] rounded-3xl overflow-hidden mb-12"
              style={{ height: '327px' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end h-full px-8">
                <div className="flex justify-center items-end h-full">
                  <Image
                    src="/what-grownee-1.png"
                    alt="Budget Summary"
                    width={200}
                    height={400}
                    className="w-full max-w-[200px] h-auto"
                  />
                </div>
                <div className="flex justify-center items-end h-full">
                  <Image
                    src="/what-grownee-2.png"
                    alt="Income Overview"
                    width={200}
                    height={400}
                    className="w-full max-w-[200px] h-auto"
                  />
                </div>
                <div className="flex justify-center items-end h-full">
                  <Image
                    src="/what-grownee-3.png"
                    alt="Expenses Breakdown"
                    width={200}
                    height={400}
                    className="w-full max-w-[200px] h-auto"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-300"
            >
              <p className="text-[15px] leading-relaxed">
                Millions of people earn income but still struggle with managing it effectively. Not because
                they lack discipline, but because they lack the right tools.
              </p>
              <p className="text-[15px] leading-relaxed">
                Most budgeting apps are either too complex, too rigid, or disconnected from how people
                actually live and spend. Grownee takes a different approach. We focus on clarity, simplicity,
                and habits—making it far less exhausting because something you can stick with, not something
                you quit after a few weeks.
              </p>
              <p className="text-[15px] leading-relaxed">
                Grownee is built for real people with real expenses, not spreadsheets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Vision Section - Dark Background */}
        <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-white mb-12"
            >
              Our Vision
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 text-gray-300"
            >
              <p className="text-[15px] leading-relaxed">
                Grownee helps you:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-[15px] leading-relaxed">
                    Create simple, realistic budgets
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-[15px] leading-relaxed">
                    Track your income and expenses with ease
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-[15px] leading-relaxed">
                    Build daily money habits through streaks and consistency
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-[15px] leading-relaxed">
                    Stay accountable without feeling restricted or guilty
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed">
                We are starting with budgeting because it is the foundation of every strong financial life.
                When you understand your spending, every other financial decision becomes easier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}