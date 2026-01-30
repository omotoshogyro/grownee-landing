"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#06321D] text-white pt-20 pb-12 overflow-hidden">
      {/* Background Pattern Overlay - Kept as your original image pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/background-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* lg:flex-row for desktop, flex-col-reverse for mobile stacking */}
        <div className="flex flex-col-reverse lg:flex-row justify-between min-h-[500px]">
          {/* LEFT SIDE - Logo, Location, Socials (Moves to BOTTOM on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between mt-16 lg:mt-0"
          >
            {/* Location & Socials */}
            <div className="space-y-6">
              <p className="text-gray-300 text-[15px] font-medium">
                Lagos Nigeria
              </p>

              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/twitter.svg"
                    alt="X"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* Large Brand Logo at the very bottom */}
            <div className="mt-12 lg:mt-0">
              <Image
                src="/grownee-logo.svg"
                alt="grownee"
                width={420}
                height={100}
                className="w-full max-w-[320px] lg:max-w-[420px] object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Links (Stays at TOP on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-5 text-left items-start"
          >
            <a
              href="#budget"
              className="text-gray-200 hover:text-[#AFE47C] transition-colors text-[16px]"
            >
              Budget
            </a>

            <div className="flex items-center gap-2">
              <span className="text-gray-200 text-[16px]">Save</span>
              <span className="px-2 py-0.5 bg-[#8FCFA3] text-[#05180F] text-[10px] rounded-full font-bold uppercase tracking-wider">
                Soon
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-200 text-[16px]">Invest</span>
              <span className="px-2 py-0.5 bg-[#8FCFA3] text-[#05180F] text-[10px] rounded-full font-bold uppercase tracking-wider">
                Soon
              </span>
            </div>

            <a
              href="#learn"
              className="text-gray-200 hover:text-[#AFE47C] transition-colors text-[16px]"
            >
              Learn
            </a>

            <a
              href="#faq"
              className="text-gray-200 hover:text-[#AFE47C] transition-colors text-[16px]"
            >
              FAQ
            </a>

            <div className="flex items-center gap-2">
              <a href="/about" className="text-gray-200 text-[16px]">
                About us
              </a>
              <span className="px-2 py-0.5 bg-[#8FA99C] text-[#05180F] text-[10px] rounded-full font-bold uppercase tracking-wider">
                Not hiring
              </span>
            </div>

            <div className="pt-4 flex flex-col space-y-5">
              <a
                href="/terms"
                className="text-gray-200 hover:text-[#AFE47C] transition-colors text-[16px]"
              >
                Terms of service
              </a>

              <a
                href="#privacy"
                className="text-gray-200 hover:text-[#AFE47C] transition-colors text-[16px]"
              >
                Privacy Policy
              </a>

              <a
                href="mailto:support@grownee.com"
                className="text-gray-200 hover:text-[#AFE47C] transition-colors text-[16px]"
              >
                support@grownee.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
