import React from "react";
import { motion } from "framer-motion";
import RCMlogo from "../assets/rcms.png"; // 👉 add marine logo in assets
import Partners from "./Partners"; 

// ✅ Import your 6 partner logos here
import rossPartner1 from "../assets/rosspartner-1.png";
import rossPartner2 from "../assets/rosspartner-2.png";
import rossPartner3 from "../assets/rosspartner-3.png";
import rossPartner4 from "../assets/rosspartner-4.png";
import rossPartner5 from "../assets/rosspartner-5.jpg";
import rossPartner6 from "../assets/rosspartner-6.jpg";
import rossPartner7 from "../assets/rosspartner-7.png";


import absclass from "../assets/absclass.png"; // 👉 add classification logo in assets
import dnvclass from "../assets/dnv.png"; // 👉 add classification logo in assets
import lrclass from "../assets/lr.png"; // 👉 add classification logo in assets
import rina from "../assets/ria.png"; // 👉 add classification logo in assets 
import ccs from "../assets/ccs.png"; // 👉 add classification logo in assets
import nimasa from "../assets/nimasa.png"; // 👉 add classification logo in assets


// Product Images FOR SPERRY MARINE

import autopilot from "../assets/autopillot.jpg"; // 👉 add product images in assets
import gyrocompass from "../assets/gyrocompass.jpg"; // 👉 add product images in assets
import radar from "../assets/radar.jpg"; // 👉 add product images in assets
// import ecdis from "../assets/ecdis.jpg"; 👉 add product images in assets
import speedlog from "../assets/speedlog.jpg"; // 👉 add product images in assets
import vdr from "../assets/vdr.jpg"; // 👉 add product images in assets

// Product image for Furuno
import furunovr from "../assets/VR - 3000, 5000, 7000 VDR.jpg"; // 👉 add product images in assets
import FurunoECDIS from "../assets/ECDISFURUNO.jpg"; // 👉 add product images in assets
import FurunoRadar from "../assets/FURUNORADAR.jpg"; // 👉 add product images in assets
import furunoinmarsat from "../assets/FURUNOINMARSAT-C.jpg"; // 👉 add product images in assets
import furunoais from "../assets/FURUNOAIS.jpg"; // 👉 add product images in assets
import furunoecosounder from "../assets/ECOSOUNDER.jpg"; // 👉 add product images in assets
import fm8900s from "../assets/fm-8900s.jpg"; // 👉 add product images in assets
import furunoRadar from "../assets/FURUNORADAR.jpg"; // 👉 add product images in assets
import furunomfhf from "../assets/furunohfmf.jpg"; // 👉 add product images in assets

// Product image for Jotron
import jotronais from "../assets/jotron-ais.jpg"; // 👉 add product images in assets
import jotronepirb from "../assets/jotron-epirb.jpg"; // 👉 add product images in assets
import jotronaissart from "../assets/jotronais-sart.jpg"; // 👉 add product images in assets

// Product image for Yokogawa
import yokogawagyrocompass from "../assets/yokogawagyrocompass.jpg";
import yokogawaautopilot from "../assets/yokogawaautopilot.jpg";
import yokogawaspeedlog from "../assets/yokogawaspeedlog.jpg";
import yokogawachart from "../assets/yokogawachart.jpg";

import rcmslogo from "../assets/rcms.png"; // 👉 add marine logo in asset s

// Product image for Sailor
import sailorvhf from "../assets/sailorvhf.jpg";
import sailorvsat from "../assets/sailorvsat.jpg";
import sailormfhf from "../assets/sailormf-hf.jpg";
import sailorinmarsat from "../assets/sailorinmarsatc.jpg";
import sailorais from "../assets/sailorais.jpg";

// import partner1 from "../assets/partner1.png.jpg";
import partner2 from "../assets/partner2.png.jpg";
import partner3 from "../assets/partner3.png.jpg";
import partner4 from "../assets/partner4.png.jpg";
import partner5 from "../assets/partner5.png.jpg";
import partner6 from "../assets/partner6.png.jpg";
import partner7 from "../assets/partner7.png.jpg";
import partner8 from "../assets/partner8.png";
import partner9 from "../assets/partner9.png";
import partner10 from "../assets/partner10.png";
import partner11 from "../assets/partner11.png";
import partner12 from "../assets/partner12.png";

// ----------------------
// ADDED: animation variants + theme (fixes the "fadeInUp is not defined" error)
// ----------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const theme = {
  accent: "#14532d", // green accent (used in your partners section)
};

// ✅ Array of imported logos
const rcmsPartners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
];

const RCMS = () => {
  // Marine Products grouped by brand
  const marineProducts = [
    {
      brand: "Sperry Marine",
      logo: [partner1],
      items: [
        { title: "Auto Pilot", desc: "Reliable and precise autopilot systems.", img: autopilot },
        { title: "Gyrocompass", desc: "Accurate navigation gyros for marine vessels.", img: gyrocompass },
        { title: "Radar", desc: "Advanced radar solutions for marine operations.", img: radar },
        // { title: "ECDIS", desc: "Electronic chart display and information system.", img: ecdis },
        { title: "Speed Log", desc: "Precision speed logging systems.", img: speedlog },
        { title: "VDR", desc: "Voyage data recorders for compliance & safety.", img: vdr },
      ],
    },
    {
      brand: "Furuno",
      logo: [partner2],
      items: [
        { title: "VR - 3000, 5000, 7000 VDR", desc: "Clear and dependable VHF communication.", img: furunovr },
        { title: "ECDIS", desc: "Reliable satellite communication at sea.", img: FurunoECDIS },
        { title: "MF/HF Radio", desc: "Medium and high frequency marine radios.", img: furunomfhf },
        { title: "Inmarsat C", desc: "Trusted Inmarsat C maritime systems.", img: furunoinmarsat },
        { title: "AIS", desc: "Automatic Identification Systems.", img: furunoais },
        { title: "ECO Sounder", desc: "Trusted Inmarsat C maritime systems.", img: furunoecosounder },
        { title: "FM - 8900s", desc: "Automatic Identification Systems.", img: fm8900s },
        { title: "RADAR", desc: "Automatic Identification Systems.", img: furunoRadar },

      ],
    },
    {
      brand: "Jotron",
      logo: [partner3],
      items: [
        { title: "AIS-SART", desc: "Search and rescue transponders.", img: jotronais },
        { title: "EPIRB", desc: "Emergency position-indicating radio beacons.", img: jotronepirb },
        { title: "AIS", desc: "Ship identification and tracking systems.", img: jotronaissart },
      ],
    },
    {
      brand: "Yokogawa",
      logo: [partner7],
      items: [
        { title: "Gyrocompass", desc: "Marine navigation gyros for precision sailing.", img: yokogawagyrocompass },
        { title: "Auto Pilot", desc: "Smart autopilot for optimal routing.", img: yokogawaautopilot },
        { title: "Speed Log", desc: "Reliable speed measurement systems.", img: yokogawaspeedlog },
        { title: "Chart", desc: "Marine charting and plotting tools.", img: yokogawachart },
      ],
    },
    {
      brand: "Sailor",
      logo: [partner9],
      items: [
       { title: "VHF Radio/2Way Radio", desc: "Short-range communication system for ship-to-ship and ship-to-shore.", img: sailorvhf },
{ title: "VSAT", desc: "Satellite communication system providing broadband connectivity at sea.", img: sailorvsat },
{ title: "MF/HF Radio", desc: "Long-range communication system for ships, using medium and high frequencies.", img: sailormfhf },
{ title: "Inmarsat C", desc: "Satellite-based messaging and distress communication service.", img: sailorinmarsat },
{ title: "AIS", desc: "Automatic Identification System for vessel tracking and collision avoidance.", img: sailorais },
      ],
    },
  ];

// Import your classification images
const classifications = [
  { title: "ABS", img: absclass, desc: "American Bureau of Shipping - Ensuring safety and performance." },
  { title: "DNV", img: dnvclass, desc: "Det Norske Veritas - Risk management and quality assurance." },
  { title: "Lloyd's Register", img: lrclass, desc: "Lloyd's Register - Marine and offshore classification." },
  { title: "RINA", img: rina, desc: "RINA - Innovation and sustainability in shipping." },
{ title: "China Classification Society", img: ccs, desc: "China Classification Society - Promoting safe and clean shipping." },
{ title: "NIMASA", img: nimasa, desc: "Nigerian Maritime Administration and Safety Agency - Maritime safety and regulation." },
];


  // Services list
  const services = [
    "Gyrocompass",
    "Radars, ARPA and Auto Pilot",
    "Electronic chart and data information system (ECDIS) and Echo sounders",
    "Voyage Data Recorder (VDR) and Automatic Identification System (AIS)",
    "Integrated Bridge Solutions (IBS) and Ship Security Alarm System (SSAS)",
    "Vessel tracking system and long range thermal camera",
    "Global Maritime Distress and Safety System (GMDSS), VHF/HF/MF Radios",
    "Marine electric panels and automation systems",
    "Emergency Position Indicating Radio Beacon (EPIRB)",
    "Satellite communications (Inmarsat C, Fleet broadband, VSAT, Iridium)",
    "Shore based GMDSS maintenance service",
    "Stabilized VSAT and Inmarsat Solutions",
    "Long Range Information and Tracking (LRIT)",
    "Automation and control systems / ship electrics",
    "Training of ships personnel",
    "Radar Video Surveillance solution",
  ];

  return (
   <div className="font-sans text-gray-900">
      {/* HERO */}
<header className="relative text-white py-20 font-sans">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('../src/assets/ships.jpg')] bg-cover bg-center"></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-10">
    <motion.div
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Radial Circle Marine Services Limited
          <span className="block text-green-600">(RCMS)</span>
        </h2>

        <p className="text-gray-200 max-w-xl text-sm md:text-base leading-relaxed">
          Providing world-class marine support services with safety, efficiency,
          and international compliance at the core.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          {/* <a
            href="callto:+2348033403578"
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            download
          >
            📞 +234-803-340-3578 📞+234-802-323-8477
          </a> */}

          <a
            href="mailto:rcms@radialcircle.com"
            className="inline-flex items-center gap-2 bg-green-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            ✉ rcms@radialcircle.com
          </a>
        </div>
      </div>

      {/* RIGHT GLASS CARD */}
      <div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl transition hover:bg-white/15 hover:scale-[1.02] duration-300 max-w-xl ml-auto">
          <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4 tracking-wide">
            Mission
          </h3>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            To be a leading provider of marine services in Africa, delivering
            innovative and reliable solutions that meet international standards
            while exceeding client expectations.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</header>

{/* Company Overview */}
<section className="relative py-20 px-6 md:px-16 lg:px-32 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-green-900">
      Company Overview
    </h2>
    <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-green-700"></div>

    <div className="mt-10 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition duration-300">
      <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
        Radial Circle Marine Services Limited is a subsidiary of the Radial Circle
        Group incorporated in 2007, specializing in the provision of navigation,
        communication, and integration solutions onboard various vessels across
        West Africa and the Gulf of Guinea.
        <br />
        <br />
        Since its inception, the company has emphasized developing a sound
        technological base. Significant resources have been invested in staff
        training and in building technical partnerships with high-technology
        companies worldwide, leading to agency, distributorship, and technical
        support services.
      </p>
    </div>
  </div>
</section>



     {/* Services */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
  className="py-20 px-6 md:px-16 lg:px-32 bg-gray-50 font-sans"
>
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-green-900">
        Our Services
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-green-700"></div>

      <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        The range of services and products we offer includes, but is not limited
        to, solutions delivered in line with international marine and industry
        standards.
      </p>
    </div>

    {/* Services List Container */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.04, duration: 0.45 }}
            className="flex items-start gap-4"
          >
            {/* Bullet Icon */}
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
              ✓
            </span>

            {/* Service Text */}
            <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed">
              {service}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.section>


     {/* Marine Products */}
<section className="py-20 px-6 md:px-16 lg:px-32 bg-gray-50 font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-green-900">
        Marine Products
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-green-700"></div>
    </motion.div>

    {marineProducts.map((brand, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mb-20"
      >
        {/* Brand Header */}
        <div className="flex items-center justify-center mb-10">
          <img
            src={brand.logo}
            alt={brand.brand}
            className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brand.items.map((product, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: pIdx * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-sm md:text-base font-semibold text-green-700 hover:text-green-900 transition">
                  {product.title}
                </h3>
                <p className="mt-3 text-gray-600 text-xs md:text-sm leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


{/* Classifications */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
  className="py-16 px-6 md:px-16 lg:px-32 bg-white"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-900">
      Classifications
    </h2>
    {/* ✅ 2 per row on mobile/sm/md, 6 per row on lg */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">
      {classifications.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-green-200 transition"
        >
          <img src={item.img} alt={item.title} className="w-full h-32 object-contain bg-gray-50" />
          <div className="p-4 flex-1 flex flex-col text-center">
            <h3 className="text-base font-medium text-green-700 hover:text-green-900 transition">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

        {/* Partners Section */}
             <section className="py-16 px-6 lg:px-20 bg-white">
               <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="text-2xl font-bold mb-10 text-center"
                 style={{ color: theme.accent }}
               >
                 Our Partners
               </motion.h2>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                 {rcmsPartners.map((logo, idx) => (
                   <motion.div
                     key={idx}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={scaleIn}
                     className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center p-6 cursor-pointer"
                   >
                     <img
                       src={logo}
                       alt={`Partner ${idx + 1}`}
                       className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                     />
                   </motion.div>
                 ))}
               </div>
             </section>
    </div>
    
  );
};

export default RCMS;
