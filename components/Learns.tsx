"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    id: 101,
    title: "Understanding credit scores and their impact",
    category: "Workshop",
    date: "January 15, 2026",
    author: "Taylor",
  },
  {
    id: 102,
    title: "Strategies for saving for retirement",
    category: "Webinar",
    date: "February 10, 2026",
    author: "Morgan",
  },
  {
    id: 103,
    title: "Navigating tax regulations and benefits",
    category: "Online Course",
    date: "March 12, 2026",
    author: "Sam",
  },
  {
    id: 104,
    title: "Investing in real estate fundamentals",
    category: "Seminar",
    date: "April 20, 2026",
    author: "Jamie",
  },
  {
    id: 108,
    title: "Discussing sustainable financial practices",
    category: "Podcast",
    date: "May 25, 2026",
    author: "Riley",
  },
  {
    id: 106,
    title: "Innovative approaches to financial planning",
    category: "Event",
    date: "June 30, 2026",
    author: "Chris",
  },
];

const categories = ["All", "Product Update", "Webinar", "Video", "Event"];

export default function Learns() {
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
            LEARN
          </p>
          <div className="h-[1px] bg-gray-200 flex-1"></div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 mb-12 pb-2 md:pb-0 no-scrollbar">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all whitespace-nowrap ${
                category === "All"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col md:flex-row gap-6"
            >
              {/* Actual Image from Lorem Picsum */}
              <div 
                className="relative flex-shrink-0 rounded-2xl overflow-hidden w-full md:w-[249px] aspect-video md:h-[140px] bg-gray-100"
              >
                <Image
                  src={`https://picsum.photos/id/${article.id}/600/400`}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-green-600">
                    {article.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium">{article.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}