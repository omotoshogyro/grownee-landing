"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Eye, Target, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: Wallet,
    title: "Track Everything",
    description: "Your income & expenses",
    image: "/first-slide.png",
  },
  {
    icon: Eye,
    title: "Visibility",
    description: "Get a monthly wrap",
    image: "/second-slide.png",
  },
  {
    icon: Target,
    title: "Build Budget",
    description: "Flexible category",
    image: "/third-slide.png",
  },
  {
    icon: Sparkles,
    title: "Recommendation",
    description: "Personalized insight",
    image: "/fourth-slide.png",
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-[210px] bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] uppercase tracking-[0.2em] text-gray-500 mb-8 font-medium">
            BUDGETING
          </p>
          <h2 className="text-[28px] sm:text-4xl lg:text-[42px] font-medium text-foreground mb-4 max-w-4xl mx-auto leading-tight">
            We made tracking your spending and monitor your income the simplest
            things to do.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Effortlessly track all your expenses and income with our user-friendly
            logging system, ensuring you never miss a detail.
          </p>
        </motion.div>

        <div 
          className="rounded-[32px] p-6 md:p-12"
          style={{
            backgroundColor: '#F7FAF3',
            boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 28px 0 rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* FEATURE SELECTION */}
            <div className="w-full overflow-hidden lg:overflow-visible order-1">
              
              {/* MOBILE: Horizontal Scroll Nav */}
              {/* Added 'overflow-x-auto' and 'touch-pan-x' for better mobile response */}
              <div className="flex lg:hidden overflow-x-auto touch-pan-x gap-3 pb-6 no-scrollbar snap-x">
                <div className="flex flex-nowrap gap-3 min-w-max">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFeature(index)}
                      className={`flex-shrink-0 px-5 py-3 rounded-full flex items-center gap-3 transition-all border snap-start ${
                        selectedFeature === index 
                        ? "bg-white border-transparent shadow-sm" 
                        : "bg-transparent border-[#E8EEE0]"
                      }`}
                    >
                      <feature.icon className={`w-4 h-4 ${selectedFeature === index ? 'text-black' : 'text-gray-400'}`} />
                      <span className="text-sm font-semibold whitespace-nowrap text-foreground">
                        {feature.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* DESKTOP: Vertical List */}
              <div className="hidden lg:flex flex-col space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isSelected = selectedFeature === index;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedFeature(index)}
                      className="w-full flex items-center space-x-4 rounded-full px-6 py-4 transition-all text-left"
                      style={
                        isSelected
                          ? {
                              backgroundColor: '#FFFFFF',
                              boxShadow: '0 4px 9px 0 rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                            }
                          : {
                              backgroundColor: 'transparent',
                              border: '1px solid #E8EEE0',
                            }
                      }
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-gray-500'}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* DYNAMIC IMAGE DISPLAY */}
            <div className="order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-[24px] lg:rounded-3xl overflow-hidden shadow-sm border border-black/5"
                >
                  <Image
                    src={features[selectedFeature].image}
                    alt={features[selectedFeature].title}
                    width={600}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}