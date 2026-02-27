import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa6";
import { FaHandshake, FaSmileBeam } from "react-icons/fa";

import { Link } from "react-router-dom";
import Partners from "./Partners"; 
import { 
  FaFlag, 
  FaBolt, 
  FaChartLine, 
  FaLeaf 
} from "react-icons/fa";


import arrow from '../assets/arrow.png';
import iso45001 from "../assets/iso45001-2018.jpeg";
import iso9001 from "../assets/iso9001-2015.jpg";

import SPEexhibition2 from "../assets/SPEexhibition2.jpg";
import SPEexhibition3 from "../assets/SPEexhibition3.jpg";
import SPEexhibition4 from "../assets/SPEexhibition4.jpg";

import rctslLogo from "../assets/rctsl.png";
import rossLogo from "../assets/ross.png";
import rcmsLogo from "../assets/rcms.png";
import rcelLogo from "../assets/rcengineering.jpg";

import bgRctsl from "../assets/bg-rctsl.png";
import bgRoss from "../assets/bg-ross.jpg";
import bgRcms from "../assets/bg-rcms.jpeg";
import bgRcel from "../assets/engineering-bg.jpg";
import Taiwo2 from "../assets/taiwo2.png";
import radial30 from "../assets/radial@30.png";
import MediaShowcase from "./MediaShowcase";
import Ticker from "./Ticker";

const slides = [
  {
    title: "Radial Circle Technical Services Ltd",
    desc: "Offering expert technical services and capacity building solutions.",
    bg: bgRctsl,
    logo: rctslLogo,
    strokeColor: "#0e8ccaff",
    link: "/rctsl",
    buttonText: "Learn More",
  },
  {
    title: "Radial Oil Support Services Ltd",
    desc: "Providing world-class oil & gas support services with excellence.",
    bg: bgRoss,
    logo: rossLogo,
    strokeColor: "#dc6e13ff",
    link: "/ross",
    buttonText: "Learn More",
  },
  {
    title: "Radial Circle Marine Services Ltd",
    desc: "Delivering safe, reliable, and innovative marine solutions globally.",
    bg: bgRcms,
    logo: rcmsLogo,
    strokeColor: "#26813cff",
    link: "/rcms",
    buttonText: " Learn More",
  },

  {
    title: "Radial Circle Engineering Services Ltd",
    desc: "GHANA/MOZAMBIQUE/SENEGAL/UGANDA.",
    bg: bgRcel,
    logo: rcelLogo,
     strokeColor: "#0e8ccaff",
    link: "/rctsl",
    buttonText: "Learn More",
  },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: "easeIn" },
  }),
};

const AnimatedLogoWrapper = ({ src, alt, strokeColor, activeSlide, isPlaying }) => {
  const r = 47; 
  const CIRC = 2 * Math.PI * r;

  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-4 sm:mb-6 md:mb-8 mx-auto">
  <div className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg">
    <img
      src={src}
      alt={alt}
      className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
      draggable={false}
    />
  </div>
      <motion.svg
        className="pointer-events-none absolute inset-0 w-full h-full z-20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <motion.circle
          key={activeSlide}
          cx="50"
          cy="50"
          r={r}
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          initial={{ strokeDashoffset: CIRC }}
          animate={
            isPlaying
              ? { strokeDashoffset: [CIRC, 0], opacity: [0, 1] }
              : { strokeDashoffset: CIRC, opacity: 0.4 }
          }
          transition={
            isPlaying
              ? { duration: 15, ease: "linear" } // synced to slide duration
              : { duration: 0 }
          }
        />
      </motion.svg>
    </div>
  );
};

const getContrastColor = (hex) => {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "black" : "white";
};

const CountUp = ({ end, duration = 2, activeSlide }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    setCount(0);
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration, activeSlide]);

  return <span>{count}+</span>;
};

const galleryData = [
  { image: SPEexhibition2, description: "SPE EXHIBITION 2025" },
  { image: SPEexhibition3, description: "SPE EXHIBITION 2025" },
  { image: SPEexhibition4, description: "SPE EXHIBITION 2025" },
];

const Hero = () => {
  const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [k1, setK1] = useState(0);
  const [k2, setK2] = useState(0);
  const [k3, setK3] = useState(0);
  const [k4, setK4] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [openPdf, setOpenPdf] = useState(null); // ✅ FIXED: moved inside Hero

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 15000); // 15s slide
    return () => clearInterval(interval);
  }, [activeSlide, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setActiveSlide(([prev]) => {
      const newIndex = (prev + newDirection + slides.length) % slides.length;
      return [newIndex, newDirection];
    });
  };

  const prevGallery = () => {
    setGalleryIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const nextGallery = () => {
    setGalleryIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const buttonBg = slides[activeSlide].strokeColor;
  const buttonText = getContrastColor(buttonBg);

  return (
    <>
  {/* Hero Section */}
<section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen text-white overflow-hidden">

  <AnimatePresence custom={direction} mode="wait">
    <motion.div
      key={activeSlide}
      className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slides[activeSlide].bg})` }}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {/* Lighter Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-2 sm:px-6 md:px-12 lg:px-20"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        {/* Slightly dark slide box */}
        <div className="rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl bg-black/35">

          {/* Bigger Logo on Mobile */}
          <AnimatedLogoWrapper
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto"
            src={slides[activeSlide].logo}
            alt={`${slides[activeSlide].title} logo`}
            strokeColor={slides[activeSlide].strokeColor}
            activeSlide={activeSlide}
            isPlaying={isPlaying}
          />

          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-lg leading-snug sm:leading-tight">
            {slides[activeSlide].title}
          </h3>

          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto drop-shadow-md">
            {slides[activeSlide].desc}
          </p>

          <Link
            to={slides[activeSlide].link}
            className="mt-4 sm:mt-6 inline-block font-semibold px-3 py-1 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg shadow-lg text-xs sm:text-sm md:text-base"
            style={{ backgroundColor: buttonBg, color: buttonText }}
          >
            {slides[activeSlide].buttonText}
          </Link>

        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>

  {/* Hero Arrows (no background)
  <button
    onClick={() => paginate(-1)}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 transition p-0"
  >
    <img src={arrow} alt="Left arrow" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
  </button>

  <button
    onClick={() => paginate(1)}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 transition p-0"
  >
    <img src={arrow} alt="Right arrow" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-180" />
  </button> */}

  Hero Dots + Pause/Play
  <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center items-center gap-3 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() =>
          setActiveSlide([index, index > activeSlide ? 1 : -1])
        }
        className={`w-3 h-3 rounded-full ${
          activeSlide === index ? "bg-white" : "bg-white/40 hover:bg-black/60"
        }`}
      />
    ))}

    {/* <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="ml-4 bg-white/80 hover:bg-white rounded-full p-2 transition"
    >
      {isPlaying ? (
        <FaPause size={14} color="black" />
      ) : (
        <FaPlay size={14} color="black" />
      )}
    </button> */}
  </div>

</section>


{/* ---------------- Sustainability Section ---------------- */}
<section
  id="sustainability"
  className="relative py-20 bg-gray-50 text-gray-900 overflow-hidden"
>
  {/* Subtle animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#e0f7ff]/10 via-gray-50 to-[#e0f7ff]/10"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-6"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#004080]">
        Radial Circle Group
      </h2>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        Radial Circle Group consists of companies established between 1995 and
        today, delivering world-class solutions in{" "}
        <span className="font-semibold text-[#004080]">
          Telecommunications, Marine Electronics, Navigational Aids,
          Security Systems, and Industrial Automation.
        </span>{" "}
        For years, we have remained committed to driving innovation,
        excellence, and sustainable growth across Africa’s industrial and
        infrastructure sectors.
      </p>

      <motion.a
        href="/WhoWeAre"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #004080" }}
        className="inline-block mt-4 px-6 py-3 bg-[#004080] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-[#0059b3]"
      >
        Learn More
      </motion.a>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <motion.img
          src={radial30}
          alt="Radial Circle Group"
          className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-2xl"></div>
      </div>
    </motion.div>
  </div>
</section>





{/* ---------------- Hero Banner (Auto Background Slider) ---------------- */}
<section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-black">
  {/* Animated Backgrounds */}
  <div className="absolute inset-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${[
            "/images/subhero-bg.jpg",
            "/images/subhero-bg2.jpg",
            "/images/subhero-bg3.png",
            "/images/subhero-bg4.jpeg",
            "/images/subhero-bg5.jpeg",
          ][activeSlide % 5]})`,
        }}
      />
    </AnimatePresence>

    {/* Dark overlay for cinematic contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
  </div>

  {/* Text Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  leading-tight tracking-tight"
    >
      Engineering,{" "}
      <span className="text-white">Procurement,</span> Installation,
      <br className="hidden sm:block" /> and Commissioning (EPIC)
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
    >
      At <span className="text-[#00f0ff] font-semibold">Radial Circle Group</span>, we are involved in the 
      business of providing Technical, Marine, Oil Support, and Engineering Services in Nigeria and Africa.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      className="flex flex-wrap justify-center gap-5 mt-8"
    >
      <motion.a
        href="#mission"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px #00f0ff",
          textShadow: "0px 0px 10px #00f0ff",
        }}
        className="px-6 py-3 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] rounded-xl font-semibold transition-all duration-300"
      >
        Our Strength
      </motion.a>

      <motion.a
        href="#purpose"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px white",
          textShadow: "0px 0px 8px #fff",
        }}
        className="px-6 py-3 bg-white text-[#0c1a25] rounded-xl font-semibold transition-all duration-300"
      >
        Our Mission
      </motion.a>
    </motion.div>
  </div>

  {/* Subtle Glow Gradient at Bottom */}
  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#00f0ff]/10 to-transparent blur-2xl opacity-70" />
</section>

{/* ---------------- Mission Section ---------------- */}
<section
  id="mission"
  className="relative py-12 bg-gray-50 text-gray-900 overflow-hidden" // reduced from py-20 to py-12
>
  <div className="absolute inset-0 bg-gradient-to-br from-[#e0f7ff]/10 via-gray-50 to-[#e0f7ff]/10 animate-gradientMove"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#004080]">
        Our <span className="text-[#0073e6]">Strength</span>
      </h2>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        We have marketing and technical support relationships with our partners besides, we have the availability of competent, 
        seasoned and manufacturer trained staff in our areas of operations at your service.
      </p>

      <motion.a
        href="#purpose"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #004080" }}
        className="inline-block mt-4 px-6 py-3 bg-[#004080] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-[#0059b3]"
      >
        View Our Mission

      </motion.a>
    </motion.div>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <motion.img
          src="/images/mission.png"
          alt="Mission"
          className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-2xl"></div>
      </div>
    </motion.div>
  </div>
</section>

{/* ---------------- Purpose Section ---------------- */}
<section
  id="purpose"
  className="relative py-12 bg-gray-50 text-gray-900 overflow-hidden -mt-12" // added negative margin to pull it closer
>
  <div className="absolute inset-0 bg-gradient-to-br from-[#e0f7ff]/10 via-gray-50 to-[#e0f7ff]/10 animate-gradientMove"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="order-2 lg:order-1"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <motion.img
          src="/images/purpose1.jpg"
          alt="Purpose"
          className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-2xl"></div>
      </div>
    </motion.div>

    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-6 order-1 lg:order-2"
    >
     <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#004080]">
        Our <span className="text-[#0073e6]">Mission</span>
      </h2>


      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        Our mission is to be one of the leading technical system integrators
      in Africa with solid backing from our technical partners locally and
      internationally who offers our organization technical support to
      meet our clients’ needs.
      </p>

      <motion.a
        href="#values"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #004080" }}
        className="inline-block mt-4 px-6 py-3 bg-[#004080] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-[#0059b3]"
      >
        Explore Our Values
      </motion.a>
    </motion.div>
  </div>
</section>


{/* ---------------- Values Section ---------------- */}
<section
  id="values"
  className="py-20 bg-[#0c1a25] text-white overflow-hidden"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14">
      <span className="text-[#00f0ff]">Our</span> Core Values
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Integrity",
          desc: "Upholding honesty and transparency in all dealings.",
          icon: (
            <FaFlag className="text-[#00f0ff] text-4xl mx-auto mb-4 drop-shadow-glow" />
          ),
        },
        {
          title: "Innovation",
          desc: "Encouraging creativity and new ideas to drive progress.",
          icon: (
            <FaBolt className="text-[#00f0ff] text-4xl mx-auto mb-4 drop-shadow-glow" />
          ),
        },
        {
          title: "Excellence",
          desc: "Committed to high standards in service delivery.",
          icon: (
            <FaChartLine className="text-[#00f0ff] text-4xl mx-auto mb-4 drop-shadow-glow" />
          ),
        },
        {
          title: "Accountability",
          desc: "Taking responsibility for actions and outcomes.",
          icon: (
            <FaLeaf className="text-[#00f0ff] text-4xl mx-auto mb-4 drop-shadow-glow" />
          ),
        },
        {
  title: "Respect",
  desc: "Treating everyone with dignity and valuing their contributions.",
  icon: (
    <FaHandshake className="text-[#00f0ff] text-4xl mx-auto mb-4 drop-shadow-glow" />
  ),
},
{
  title: "Customer Satisfaction",
  desc: "Prioritizing customer needs and satisfaction.",
  icon: (
    <FaSmileBeam className="text-[#00f0ff] text-4xl mx-auto mb-4 drop-shadow-glow" />
  ),
},

      ].map((val, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-[#102a3c]/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 transition-all duration-500 text-center"
        >
          {val.icon}
          <h3 className="text-xl font-bold text-[#00f0ff] mb-3">
            {val.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {val.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

 {/* Media Showcase Section */}
      <section id="media" className="py-6 my-2 bg-gray-50">
        <MediaShowcase />
      </section>
    </>
  );
};

export default Hero;
