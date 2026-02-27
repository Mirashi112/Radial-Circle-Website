import React, { useState } from "react";
import { motion } from "framer-motion";
import rosslogo from "../assets/ross.png";

import firesuppressionImg from "../assets/ross-firesuppression.jpg";
import integratedImg from "../assets/ross-integrated.jpg";
import serviceCalibrationImg from "../assets/service-calibration.png";
import serviceFieldImg from "../assets/service-field.png";
import serviceVesselImg from "../assets/service-vessel.jpg";
import valvesImg from "../assets/valves.JPG";

// ✅ Import your 6 partner logos here
import rossPartner1 from "../assets/rosspartner-1.png";
import rossPartner2 from "../assets/rosspartner-2.png";
import rossPartner3 from "../assets/rosspartner-3.png";
import rossPartner4 from "../assets/rosspartner-4.png";
import rossPartner5 from "../assets/rosspartner-5.jpg";
import rossPartner6 from "../assets/rosspartner-6.jpg";
import rossPartner7 from "../assets/rosspartner-7.png";

// Ross.jsx
// React + Tailwind component styled with ROSS brand colors and animations.

const Ross = () => {
  const [showPdf, setShowPdf] = useState(false); // ✅ state for PDF toggle
const valvesActuators = [
    "Sabre Instrument Valves,  Hand Valves, Forged Valves, Rising Plug Valves, High Pressure Ball Valves, Gauge Valves, Mono flange valves, Valve manifolds",
    "Sabre Double Block & Bleed Valves, Subsea Valves, Instrument class DBB Valves",
    "Actuators & Valves, Actuators, Ball Valves, Butterfly Valves, Safety Valves, Diaphragm Valves",
  ];

  const theme = {
    accent: "#b45f37", // orange-brown from the ROSS logo
    text: "#2e2e2e", // dark grey from the logo text
    bg: "#fff8f5", // light orange background for sections
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // ✅ Array of imported logos
  const rossPartners = [
    rossPartner1,
    rossPartner2,
    rossPartner3,
    rossPartner4,
    rossPartner5,
    rossPartner6,
    rossPartner7,
  ];

  return (
     <div className="font-sans text-gray-900">
            {/* HERO */}
<header className="relative text-white py-20 font-sans">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('../src/assets/oilsupportbg.jpg')] bg-cover bg-center"></div>

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
          Radial Oil Support Services Ltd
          <span className="block text-white">(ROSS)</span>
        </h2>

        <p className="text-gray-200 max-w-xl text-sm md:text-base leading-relaxed">
          Supporting the oil and gas industry with dependable solutions,
          technical expertise, and a commitment to operational excellence.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          {/* <a
            href="callto:+2348033403578"
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            download
          >
            📞 +234-813-637-1873 📞+234-802-323-8477
          </a> */}

          <a
            href="mailto:ross@radialcircle.com"
            className="inline-flex items-center gap-2 bg-white/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            ✉ ross@radialcircle.com
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
            To be one of the leading oil support services providers in Africa,
            with solid backing from our technical partners locally and
            internationally, delivering excellence through innovation and
            reliability.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</header>

 {/* Company Overview */}
<section className="relative py-20 px-6 lg:px-20 bg-gray-50">
  {/* Section Header */}
  <div className="max-w-6xl mx-auto mb-10">
    <h2
      className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3"
      style={{ color: theme.accent }}
    >
      Company Overview
    </h2>
    <div
      className="h-1 w-20 rounded-full"
      style={{ backgroundColor: theme.accent }}
    ></div>
  </div>

  {/* Content Card */}
  <div className="max-w-6xl mx-auto">
    <div
      className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg transition hover:shadow-2xl hover:-translate-y-1 duration-300"
      style={{ borderLeft: `6px solid ${theme.accent}` }}
    >
      <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
        Radial Oil Support Services Limited (ROSS) provides a full range of safety
        systems solutions in all areas where hazardous substances such as
        combustible liquids and gases are handled. Satisfying our customers’
        needs is our priority, and we are dedicated to providing world-class
        industrial products and technical services to our numerous clients across
        Nigeria and Africa.
        <br />
        <br />
        We are committed to service delivery aimed at improving plant efficiency
        and optimizing business processes through technology. We apply innovative
        technologies to solve technical challenges faced by our clients across
        their various industries.
      </p>
    </div>
  </div>
</section>





      {/* Products Section */}
<section className="py-20 px-6 lg:px-20 bg-gray-50 font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-14"
    >
      <h2
        className="text-2xl md:text-3xl font-extrabold tracking-tight"
        style={{ color: theme.accent }}
      >
        Our Products
      </h2>
      <div
        className="mx-auto mt-3 h-1 w-20 rounded-full"
        style={{ backgroundColor: theme.accent }}
      ></div>
    </motion.div>

    {/* Product Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Detection Items",
          items: [
            "Smoke / Heat Detectors",
            "Manual Call Points",
            "Flame Detectors",
            "Point Gas Detectors",
            "Open Path Gas Detectors",
            "Toxic Gas Detectors",
            "Addressable Fire Alarm Systems",
            "Emergency Lights",
          ],
        },
        {
          title: "Suppression Items",
          items: [
            "Deluge Systems",
            "Sprinkler Systems",
            "Dual Agent & Dry Chemical Units",
            "Water Mist Systems",
            "Nozzles & Foam Skids",
            "High Expansion Foam Systems",
            "Argonite / FM200 Systems",
            "CO₂ Total Flooding Systems",
          ],
        },
        {
          title: "Instrumentation & Tools",
          items: [
            "Transceivers & SCADA Data Systems",
            "Receptacles & Industrial Switches",
            "Fixtures & Floodlights",
            "Junction Boxes",
            "Photocells",
            "Fiberglass Battery Boxes",
            "Thermal Detectors",
          ],
        },
      ].map((col, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
        >
          {/* Category Title */}
          <h3
            className="text-lg font-semibold mb-6 tracking-wide"
            style={{ color: theme.accent }}
          >
            {col.title}
          </h3>

          {/* Items List */}
          <ul className="space-y-4">
            {col.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* Bullet Icon */}
                <span
                  className="mt-1 flex h-5 w-5 items-center justify-center rounded-full text-white text-xs"
                  style={{ backgroundColor: theme.accent }}
                >
                  ✓
                </span>

                {/* Text */}
                <span className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Expanded Services Section */}
<section className="py-16 px-6 lg:px-20 bg-gray-50 font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-2xl md:text-3xl font-semibold mb-12 text-center tracking-tight"
      style={{ color: theme.accent }}
    >
      Expanded Services
    </motion.h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Detection Systems */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition"
        style={{ borderColor: theme.accent }}
      >
        <h3
          className="text-lg font-semibold mb-4"
          style={{ color: theme.accent }}
        >
          Detection Systems
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 font-medium">
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Integrated control and safety panels
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Fire and gas detectors
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Manual call points
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Systems for safe and hazardous areas
          </li>
        </ul>
      </motion.div>

      {/* Suppression Systems */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition"
        style={{ borderColor: theme.accent }}
      >
        <h3
          className="text-lg font-semibold mb-4"
          style={{ color: theme.accent }}
        >
          Suppression Systems
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 font-medium">
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Deluge and sprinkler systems
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Dual agent and dry chemical units
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Water mist systems
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Foam skids
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Argonite and CO₂ systems
          </li>
        </ul>
      </motion.div>

      {/* Instrumentation Services */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition"
        style={{ borderColor: theme.accent }}
      >
        <h3
          className="text-lg font-semibold mb-4"
          style={{ color: theme.accent }}
        >
          Instrumentation Services
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 font-medium">
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            SCADA implementation
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Process automation
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            DCS configuration
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            PLC and HMI commissioning
          </li>
          <li className="flex gap-3">
            <span className="text-green-600">•</span>
            Start-up and testing services
          </li>
        </ul>
      </motion.div>

    </div>
  </div>
</section>

      {/* Services Section */}
<section className="py-16 px-6 lg:px-20 bg-white font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-2xl md:text-3xl font-semibold mb-12 text-center tracking-tight"
      style={{ color: theme.accent }}
    >
      Our Scope of Services
    </motion.h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {[
        {
          title: "Integrated Fire & Gas Detection Systems",
          points: [
            "Fire and gas detection for land and offshore facilities",
            "Designed for petrochemical and industrial environments",
            "Compliant with EN 54 and IEC 61508 SIL2 standards",
            "SOLAS-certified systems for maritime applications",
          ],
          img: integratedImg,
        },
        {
          title: "Fire Suppression Systems",
          points: [
            "Water mist fire protection systems",
            "CO₂ extinguishing solutions",
            "Automatic sprinkler systems",
            "Fire pumps supplied via global OEM partners",
          ],
          img: firesuppressionImg,
        },
        {
          title: "Instrument Calibration & Repair",
          points: [
            "Temperature calibration services",
            "Pressure and flow calibration",
            "Level instrumentation calibration",
            "Gas detector testing and repair",
          ],
          img: serviceCalibrationImg,
        },
        {
          title: "Vessel Automation Systems",
          points: [
            "Marine automation and control systems",
            "Offshore vessel monitoring solutions",
            "Integrated shipboard control platforms",
          ],
          img: serviceFieldImg,
        },
        {
          title: "Field Solutions & Technical Services",
          points: [
            "On-site troubleshooting and diagnostics",
            "System retrofitting and upgrades",
            "Equipment installation and commissioning",
            "Client-specific technical support",
          ],
          img: serviceVesselImg,
        },
      ].map((service, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition"
          style={{ borderColor: theme.accent }}
        >
          {/* Image */}
          <img
            src={service.img}
            alt={service.title}
            className="h-40 w-full object-cover"
          />

          {/* Content */}
          <div className="p-6">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: theme.accent }}
            >
              {service.title}
            </h3>

            <ul className="space-y-3 text-sm text-gray-700 font-medium">
              {service.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-600">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* VALVES / ACTUATORS */}
<section className="py-16 px-6 lg:px-20 bg-orange-900 font-sans">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Header */}
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-2xl md:text-3xl font-semibold text-white mb-10 tracking-tight"
    >
      Valves, Compressors & Actuators
    </motion.h3>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
      
      {/* Left Column – Product Listing */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between"
      >
        <div>
          <h4 className="text-lg font-semibold text-orange-800 mb-6">
            Product Range
          </h4>

          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 font-medium">
            {valvesActuators.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-orange-50 px-4 py-3 rounded-lg border border-orange-100 hover:shadow-sm transition"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-orange-600"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Right Column – Image (Same Height) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center"
      >
       <img
  src={valvesImg}
  alt="Valves, Compressors and Actuators"
  className="w-full h-full object-cover"
/>
      </motion.div>

    </div>
  </div>
</section>


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
          {rossPartners.map((logo, idx) => (
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
}

export default Ross;
