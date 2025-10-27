import React, { useState } from "react";
import { motion } from "framer-motion";
import rosslogo from "../assets/ross.png";

import firesuppressionImg from "../assets/ross-firesuppression.jpg";
import integratedImg from "../assets/ross-integrated.jpg";
import serviceCalibrationImg from "../assets/service-calibration.png";
import serviceFieldImg from "../assets/service-field.png";
import serviceVesselImg from "../assets/service-vessel.jpg";

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
             <header className="relative text-white py-14">
               {/* Background image */}
               <div className="absolute inset-0 bg-[url('../src/assets/oilsupportbg.jpg')] bg-cover bg-center"></div>
       
               {/* Overlay fade */}
               <div className="absolute inset-0 bg-black/50"></div>
       
               {/* Content */}
               <div className="relative max-w-6xl mx-auto px-6 md:px-8">
                 <motion.div
                   initial="visible"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={fadeInUp}
                   className="flex flex-col lg:flex-row items-center gap-8"
                 >
                   <div className="flex-1">
         <h2 className="text-xl sm:text-xl md:text-xl lg:text-5xl font-bold leading-tight">
           Radial Oil Support Services  (ROSS)
         </h2>
       
        <div className="mt-6">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition hover:scale-[1.02] hover:shadow-xl duration-300 max-w-2xl mx-auto lg:mx-0">
    <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-3">
      Mission
    </h3>
    <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed">
      To be one of the leading oil support services providers in Africa, with
      solid backing from our technical partners locally and internationally,
      delivering excellence through innovation and reliability.
    </p>
  </div>
</div>

       
                     <div className="mt-6 flex flex-wrap gap-3">
                       <a
                         href="callto:+2348033403578"
                         className="inline-block bg-white text-blue-800 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                         download
                       >
                         📞 +234-805-569-9005 📞 +234-813-637-1873
                       </a>
       
                       <a
                         href="mailto:ross@radialcircle.com"
                         className="inline-block bg-green-50 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-[#356bb0] transition"
                       >
                         ross@radialcircle.com
                       </a>
                     </div>
                   </div>
                 </motion.div>
               </div>
             </header>

   {/* Company Overview */}
<section className="py-16 px-6 lg:px-20">
  {/* Title */}
  <h2
    className="text-2xl font-bold mb-6"
    style={{ color: theme.accent }}
  >
    Company Overview
  </h2>

  {/* Card */}
  <div
    className="bg-white shadow rounded-xl p-6 border-l-4"
    style={{ borderColor: theme.accent }}
  >
    <p className="text-gray-700 text-justify leading-relaxed">
      Radial Oil Support Services Limited (ROSS) provides a full range of
      safety systems solutions in areas where hazardous substances such as
      combustible liquids and gases are handled. We are dedicated to
      satisfying customer needs, delivering services that improve plant
      efficiency and optimize business processes through innovative
      technologies. Our mission is to apply cutting-edge solutions in
      solving technical challenges across diverse industries.
    </p>
  </div>
</section>





      {/* Products Section */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: theme.accent }}
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Detection Items",
              items: [
                "Smoke/Heat Detectors",
                "Manual Call-Points",
                "Flame Detectors",
                "Point-Gas Detectors",
                "Open Gas Detectors",
                "Toxic-Gas Detectors",
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
                "Water-Mist Systems",
                "Nozzles & Foam Skids",
                "High-Expansion Foam",
                "Argonite/Fm200 Systems",
                "CO₂ Total Flooding Systems",
              ],
            },
            {
              title: "Instrumentation & Tools",
              items: [
                "Transceivers, Data SCADA",
                "Receptacles & Switches",
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
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg"
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: theme.accent }}
              >
                {col.title}
              </h3>
              <ul className="grid gap-3">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-white px-3 py-2 rounded-lg shadow-sm border text-gray-700 text-sm hover:shadow-md hover:-translate-y-1 transform transition"
                    style={{ borderColor: theme.accent }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expanded Services Section */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: theme.accent }}
        >
          Expanded Services
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid gap-3"
        >
          {[
            "Detection Systems: Integrated control & safety panels, detectors and manual call-points for both safe and hazardous areas.",
            "Suppression Systems: Deluge & sprinkler systems, dual agent & dry chemical units, water-mist systems, foam skids, and Argonite/CO₂ systems.",
            "Instrumentation Services: SCADA implementation, process automation, DCS configuration, PLC/HMI commissioning, and start-up services.",
          ].map((text, i) => (
            <motion.li
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white px-4 py-3 rounded-lg shadow-sm border text-gray-700 text-sm hover:shadow-md hover:-translate-y-1 transform transition"
              style={{ borderColor: theme.accent }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-10 text-center"
          style={{ color: theme.accent }}
        >
          Our Scope of Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Integrated Fire & Gas Detection Systems",
              desc: "Interactive fire and gas detection systems for land, sea, and petrochemical industries. Developed to meet EN 54, IEC 61508 SIL2, and SOLAS maritime standards.",
              img: [integratedImg]
            },
            {
              title: "Fire Suppression Systems",
              desc: "Water Mist, CO2 Extinguishing, Sprinkler Systems, and Fire Pumps delivered in partnership with global brands.",
              img: [firesuppressionImg]
            },
            {
              title: "Instrument Calibration & Repair",
              desc: "Customized calibration procedures for Temperature, Pressure, Flow, Level Indicators, and Gas Detectors.",
              img: [serviceCalibrationImg]
            },
            {
              title: "Vessel Automation Systems",
              desc: "Automation and control systems for marine and offshore installations.",
              img: [serviceFieldImg]
            },
            {
              title: "Field Solutions & Technical Services",
              desc: "On-site troubleshooting, retrofitting, installation, and support tailored to client-specific needs.",
              img: [serviceVesselImg]
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition border-t-4"
              style={{ borderColor: theme.accent }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: theme.accent }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

        {/* VALVES / ACTUATORS */}
      <section className="py-10 bg-[#b45f37]">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Valves, Compressors & Actuators
          </h3>
      
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* ✅ Left Column - Items List */}
            <div className="grid gap-4 sm:grid-cols-2">
              {valvesActuators.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-blue-50 p-4 rounded-xl shadow"
                >
                  <p className="text-sm text-gray-700">{v}</p>
                </motion.div>
              ))}
            </div>
      
            {/* ✅ Right Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.D0ng3nsmzWi6AxTBgies8QHaDP?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Valves & Actuators"
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-16 px-6 lg:px-20"
        style={{ backgroundColor: theme.bg }}
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-10 text-center"
          style={{ color: theme.accent }}
        >
          Few Project Experiences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Offshore IFG Installation",
              desc: "Installed and commissioned integrated fire & gas panels for offshore platforms, ensuring global compliance.",
            },
            {
              title: "Onshore Calibration Program",
              desc: "Delivered routine calibration and preventive maintenance for multiple facilities.",
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-l-4"
              style={{ borderColor: theme.accent }}
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          ))}
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
