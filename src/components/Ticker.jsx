import React from "react";
import { motion } from "framer-motion";

const Ticker = () => {
  const items = [
    "🌍 Driving clean energy adoption across Africa",
    "⚡ Investing in renewable energy for future generations",
    "🌱 Committed to sustainability and innovation",
    "🤝 Empowering communities with reliable energy access",
    "🚀 Leading Africa’s transition to a net-zero future",
  ];

  return (
    <section className="bg-gray-800 text-white py-2 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-800 z-10 pointer-events-none"></div>
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-800 z-10 pointer-events-none"></div>

        {/* Marquee container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {items.concat(items).map((text, idx) => (
              <span
                key={idx}
                className="mx-4 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ticker;
