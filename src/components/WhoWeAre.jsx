// src/pages/About.jsx
import React from "react";
import MediaShowcase from "./MediaShowcase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- add this
import { FaFlag, FaBolt, FaChartLine, FaLeaf } from "react-icons/fa";


// assets
import heroBg from "../assets/hero-bg.jpg"; // 👉 replace with your hero image
import vision from "../assets/pictureslide2.jpg";
import mission from "../assets/mission.svg"; // (unused but kept for future)
import pledge from "../assets/pictureslide5.jpeg";


export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
    {/* HERO */}
<header
  className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a28]/90 via-[#0a1a28]/70 to-[#0a1a28]/90" />

  {/* Full-width Content */}
  <div className="relative z-10 px-6 sm:px-12 text-center w-full">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#00f0ff] drop-shadow-2xl tracking-tight mb-6">
      Who We Are
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 text-center px-4 sm:px-12">
      Radial Circle Group consists of companies established between 1995 to date, and is involved in the provision of Telecommunications Solutions, Marine Electronics and Navigational Aids, Security Solutions, Instrumentation and Automation, Electrical Power Systems, and Project Engineering Design, Installation and Commissioning (EPIC) in Nigeria and across the Gulf of Guinea.
      <br /><br />
      Since inception, our company has emphasized building a sound technological base. Significant resources have been invested in training staff and forming strategic partnerships with high-tech companies worldwide leading to agency, distributorship, and technical support services.
    </p>

    {/* Buttons directly under the paragraph */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 px-4 sm:px-12">
      <a
        href="#vision"
        className="px-6 py-3 bg-[#00f0ff] text-[#0c1a25] font-semibold rounded-xl hover:bg-[#00d8ff] transition-colors duration-300 shadow-md"
      >
        Our Vision
      </a>
      <a
        href="#pledge"
        className="px-6 py-3 border border-[#00f0ff] text-[#00f0ff] rounded-xl hover:bg-[#00f0ff]/20 transition-all duration-300 shadow-md"
      >
        Our Pledge
      </a>
    </div>
  </div>
</header>




      <main>
        {/* ---------------- Vision Section ---------------- */}
<section
  id="vision"
  className="relative py-20 bg-[#0c1a25] text-white overflow-hidden"
>
  {/* Subtle animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-[#0c1a25] to-[#00f0ff]/5 animate-gradientMove"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Our <span className="text-[#00f0ff]">Vision</span>
      </h2>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
        Our vision is to provide services and solutions that are 
        demand driven in Africa with solid backing from our technical partners.
      </p>

      <motion.a
        href="#pledge"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #00f0ff" }}
        className="inline-block mt-4 px-6 py-3 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-semibold rounded-xl transition-all duration-300 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]"
      >
        View Our Pledge
      </motion.a>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <motion.img
          src={vision}
          alt="Vision"
          className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-2xl"></div>
      </div>
    </motion.div>
  </div>
</section>

{/* ---------------- Pledge Section ---------------- */}
<section
  id="pledge"
  className="relative py-20 bg-[#0c1a25] text-white overflow-hidden"
>
  {/* Subtle animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-[#0c1a25] to-[#00f0ff]/5 animate-gradientMove"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
    {/* Image Section (Swapped Position) */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <motion.img
          src={pledge}
          alt="Pledge"
          className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-2xl"></div>
      </div>
    </motion.div>

    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Our <span className="text-[#00f0ff]">Pledge</span>
      </h2>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
        We pledge to uphold excellence, integrity, and safety in every
        project we deliver, ensuring that innovation and customer
        satisfaction remain at the heart of our operations.
      </p>

      <motion.a
        href="#vision"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #00f0ff" }}
        className="inline-block mt-4 px-6 py-3 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-semibold rounded-xl transition-all duration-300 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]"
      >
        Back to Vision
      </motion.a>
    </motion.div>
  </div>
</section>

{/* ---------------- Impact Section ---------------- */}
<section
  id="impact"
  className="py-12 bg-[#0c1a25] text-white overflow-hidden"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
      OUR <span className="text-[#00f0ff]">IMPACT</span> IN NUMBERS
    </h2>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { end: 100, label: "Commitment to Client Satisfaction" },
        { end: 100, label: "Certified Professionals" },
        { end: 100, label: "Strategic Alliances with OEMs" },
        { end: 100, label: "Industry Leadership" },
      ].map((stat, i) => {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const percentage = Math.min(stat.end, 100);

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="bg-[#102a3c]/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 transition-all duration-500 flex flex-col items-center justify-center"
          >
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="mb-4"
            >
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#1e3a5f"
                strokeWidth="10"
                fill="none"
              />
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#00f0ff"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                animate={{
                  strokeDashoffset: circumference - (percentage / 100) * circumference,
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="fill-[#00f0ff] text-2xl font-extrabold"
              >
                {stat.end}%
              </text>
            </motion.svg>

            <p className="text-center text-gray-300 text-sm sm:text-base mt-2">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>

    {/* Commitment Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-6 mt-16"
    >
      {[
        { label: "ISO 9001:2015 Certificate", link: "/cert/iso9001" },
        { label: "ISO 45001:2018 Certificate", link: "/cert/iso45001" },
        { label: "Quality Policy Statement", link: "/cert/quality" },
        { label: "Our OH & S Policy", link: "/cert/ohs" },
      ].map((btn, i) => (
        <Link
          key={i}
          to={btn.link}
          className="relative px-6 py-3 rounded-xl bg-[#00f0ff] font-semibold text-[#00f0ff] border border-[#00f0ff]/50 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300 shadow-md"
        >
          {btn.label}
        </Link>
      ))}
    </motion.div>
  </motion.div>
</section>


        {/* MEDIA SHOWCASE */}
        <section id="media" className="py-6 my-2 bg-gray-50">
          <MediaShowcase />
        </section>
      </main>
    </div>
  );
}
