// src/components/MediaShowcase.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Image imports
import pictureslide2 from "../assets/pictureslide2.jpg";
import pictureslide3 from "../assets/pictureslide3.jpeg";
import pictureslide4 from "../assets/pictureslide4.jpeg";
import pictureslide5 from "../assets/pictureslide5.jpeg";
import pictureslide6 from "../assets/pictureslide6.jpeg";
import pictureslide7 from "../assets/pictureslide7.jpeg";
import pictureslide8 from "../assets/pictureslide8.jpeg";

const DEFAULT_SLIDES = [
  { img: pictureslide2 },
  { img: pictureslide3 },
  { img: pictureslide4 },
  { img: pictureslide5 },
  { img: pictureslide6 },
  { img: pictureslide7 },
  { img: pictureslide8 },
];

const SLIDE_INTERVAL = 30000; // 30 seconds

export default function MediaShowcase({ slides = DEFAULT_SLIDES }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => setCurrent((s) => (s + 1) % slides.length);
  const prevSlide = () => setCurrent((s) => (s - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
  };

  return (
    <section
      id="media"
      className="relative py-20 bg-[#0c1a25] text-white overflow-hidden"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-[#0c1a25] to-[#00f0ff]/5 animate-gradientMove pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)] animate-pulse-slow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            <span className="text-white">We provide quality solutions and services</span>
            <br />
            <span className="text-[#00f0ff]">
              to diverse sectors throughout Africa.
            </span>
          </h2>
          <span className="block mt-4 w-28 h-1 bg-[#00f0ff] rounded-full mx-auto" />
        </motion.div>

        {/* Image Showcase */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Image container */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.15)] border border-[#00f0ff]/10 hover:border-[#00f0ff]/30 transition-all duration-500">
            <motion.img
              key={current}
              src={slides[current].img}
              alt={`Slide ${current + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[540px] object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a25]/70 via-transparent to-transparent pointer-events-none" />

            {/* Left Arrow */}
            <button
              onClick={() => {
                prevSlide();
                resume();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0c1a25]/70 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 text-[#00f0ff] backdrop-blur-md hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                nextSlide();
                resume();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0c1a25]/70 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 text-[#00f0ff] backdrop-blur-md hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
