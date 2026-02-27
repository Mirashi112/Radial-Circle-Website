import React from "react";
import { motion } from "framer-motion";

// --- Add these imports at the very top with your other imports ---
import rctslPartner1 from "../assets/rctsl-partner-1.png";
import rctslPartner2 from "../assets/rctsl-partner-2.png";
import rctslPartner3 from "../assets/rctsl-partner-3.jpg";
// import rctslPartner4 from "../assets/rctsl-partner-4.png";
import rctslPartner5 from "../assets/rctsl-partner-5.png";
import rctslPartner6 from "../assets/rctsl-partner-6.png";
// import rctslPartner7 from "../assets/rctsl-partner-7.png";
import rctslPartner8 from "../assets/rctsl-partner-8.png";
import rctslPartner9 from "../assets/rctsl-partner-9.png";
import rctslPartner10 from "../assets/rctsl-partner-10.png";
// import rctslPartner11 from "../assets/rctsl-partner-11.png";
import rctslPartner12 from "../assets/rctsl-partner-12.png";
import rctslPartner13 from "../assets/rctsl-partner-13.png";
import rctslPartner14 from "../assets/rctsl-partner-14.png";
import rctslPartner15 from "../assets/rctsl-partner-15.png";
import rctslPartner16 from "../assets/rctsl-partner-16.png";
import rctslPartner18 from "../assets/rctsl-partner-18.png";
import rctslPartner19 from "../assets/rctsl-partner-19.png";
import rctslPartner20 from "../assets/rctsl-partner-20.png";
import rctslPartner21 from "../assets/rctsl-partner-21.png";
import rctslPartner22 from "../assets/rctsl-partner-22.png";
import rctslPartner23 from "../assets/rctsl-partner-23.png";
import rctslPartner24 from "../assets/rctsl-partner-24.png";
import rctslPartner25 from "../assets/rctsl-partner-25.png";
import rctslPartner26 from "../assets/rctsl-partner-26.png";

import rctslClient1 from "../assets/rctsl-client-1.png";
import rctslClient2 from "../assets/rctsl-client-2.png";
import rctslClient3 from "../assets/rctsl-client-3.png";
import rctslClient4 from "../assets/rctsl-client-4.png";
import rctslClient6 from "../assets/rctsl-client-6.png";
import rctslClient7 from "../assets/rctsl-client-7.png";
import rctslClient8 from "../assets/rctsl-client-8.png";
import rctslClient9 from "../assets/rctsl-client-9.png";
import rctslClient10 from "../assets/rctsl-client-10.png";
import rctslClient11 from "../assets/rctsl-client-11.png";
import rctslClient12 from "../assets/rctsl-client-12.png";
import rctslClient13 from "../assets/rctsl-client-13.png";
import rctslClient14 from "../assets/rctsl-client-14.png";
import rctslClient15 from "../assets/rctsl-client-15.png";
import rctslClient16 from "../assets/rctsl-client-16.png";
import rctslClient17 from "../assets/partner13.png";
import rctslClient18 from "../assets/rctsl-client-18.png";
import rctslClient19 from "../assets/rctsl-client-19.png";
import rctslClient20 from "../assets/rctsl-client-20.png";
import rctslClient21 from "../assets/rctsl-client-21.png";
import rctslClient27 from "../assets/partner14.png";

import serviceMarine from "../assets/services/navigation.jpg";
import serviceTelecoms from "../assets/services/telecoms.png";
import serviceMetocean from "../assets/services/metocean.jpg";
import serviceElectrical from "../assets/services/electrical.png";
import serviceNavigation from "../assets/services/marine.jpg";
import serviceSecurity from "../assets/services/security.jpg";
import radar from "../assets/services/radarand.jpg";

const RCTSL = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  };

  const coreCompetencies = [
    "Engineering Design",
    "Procurement",
    "Installation",
    "Commissioning",
    "Project Management ",
    "Post Installation Support & Maintenance",
    "Training",
  ];

  const services = [
    {
      title: "Integrated Marine Monitoring Systems",
      img: serviceMarine,
      bullets: [
        "Berthing Aid System (BAS)",
        "Single Buoy Mooring (SBM)",
        "Squall Warning System (SWS)",
        "Riser Monitoring System (RMS)",
        "Mooring Monitoring System",
      ],
    },
    {
      title: "Telecoms and Networking Systems",
      img: serviceTelecoms,
      bullets: [
        "Main Telecom Contractor (MTC)",
        "Fixed and Stabilized VSAT Services",
        "MF/HF/UHF/VHF, Tetra and Microwave Radio Solutions",
        "Inmarsat systems",
        "Offshore Entertainment systems (TVRO)",
        "Offshore & Onshore Communication Services",
        "LAN/WAN Networking systems",
        " Cabling Infrastructure (Including Fibre Optic Cables)",
        "Public Address and General Alarm Systems",
        "Umbilical cables (fiber optic & power)",
      ],
    },
    {
      title: "Metocean & Weather Forecasting Services",
      img: serviceMetocean,
      bullets: [
        "Metocean Services",
        "Weather Forecasting and Analysis",
        "Weather monitoring systems & Helideck monitoring systems",
        "Environmental monitoring systems",
        "Metocean buoys and current profilers (ADCP)",
        "Automatic Weather Observation System (AWOS)",
      ],
    },
    {
      title: "Electrical Systems",
      img: serviceElectrical,
      bullets: [
        "Electrical Distribution Systems, SCADA, Switchgears, Substation Transformers, LV and MV cables",
        "Solar Power systems",
        "Electrical control panels",
        "UPS and Inverters",
      ],
    },
    {
      title: "Navigation Systems",
      img: serviceNavigation,
      bullets: [
        "Marine Electronics Systems & Aids to Navigation",
        "GMDSS Annual Radio Survey & VDR APT Service",
        "Marine and Aviation communication systems",
        "AIS, VDR, SSAS, EPIRB, SART, GPS, DGPS",
        "Radar, Gyrocompass, procurement, installation, commissioning & maintenance",
        "Vessel Tracking Systems",
      ],
    },
    {
      title: "Security Systems",
      img: serviceSecurity,
      bullets: [
        "CCTV systems",
        "Radar Video Suivellance systems ",
        "Vessel Tracking and Control Systems",
        "Intrusion Detection & Pipeline surveillance systems",
        "Fire & Gas Detection System",
      ],
    },
  ];

  return (
    <div className="font-sans text-gray-900">
     {/* HERO */}
<header className="relative text-white py-20 font-sans">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('../src/assets/bg-rctsl.png')] bg-cover bg-center"></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

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
          Radial Circle Technical Services Limited
          <span className="block text-blue-300">(RCTSL)</span>
        </h2>

        <p className="text-gray-200 max-w-xl text-sm md:text-base leading-relaxed">
          Delivering demand-driven technical solutions across Africa through
          innovation, strong partnerships, and excellence.
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
            href="mailto:@radialcircle.com"
            className="inline-flex items-center gap-2 bg-blue-700/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            ✉ enquiry@radialcircle.com
          </a>
        </div>
      </div>

      {/* RIGHT GLASS CARDS */}
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl transition hover:bg-white/15 hover:scale-[1.02] duration-300">
          <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4 tracking-wide">
            Mission Statement
          </h3>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Our mission is to be one of the leading technical system integrators
in Africa with solid backing from our technical partners locally and
internationally who offers our organization technical support to
meet our clients’ needs.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl transition hover:bg-white/15 hover:scale-[1.02] duration-300">
          <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4 tracking-wide">
            Vision Statement
          </h3>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Our vision is to provide services and solutions that are demand
driven in Africa with solid backing from our technical partners.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</header>

{/* Company Overview */}
<section className="relative py-20 px-6 md:px-16 lg:px-32 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-900">
      Company Overview
    </h2>
    <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-blue-700"></div>

    <div className="mt-10 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition duration-300">
      <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
        Radial Circle is a systems integrator established in 1995, with
        sister companies in Ghana, Mozambique, Senegal and Uganda. We
        partner with major OEMs globally and represent them across West
        Africa. 
        <br />
        <br />
        We provide world-class hybrid & integrated engineering
        solutions across onshore & offshore environments including
        Processing Plants, Offshore platforms, FPSOs, Drilling Rigs and
        Marine Vessels. Our client base includes IOCs, independents, NOCs,
        marginal field owners, EPCs, major engineering contractors, marine
        companies and oil service companies.
      </p>
    </div>
  </div>
</section>

{/* COMPANY INTRO */}
<section className="py-16 max-w-7xl mx-auto px-6 md:px-8">
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
  >
    <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      Company Introduction
    </h3>

    <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg leading-relaxed list-none">
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Established in 1995
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Engineering, Procurement, Installation and Commissioning (EPIC)
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Post Installation Support and Maintenance
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Provider of world-class hybrid & integrated engineering solutions & services
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Onshore & Offshore inclusive of Processing Plants, Offshore platforms, FPSOs, Drilling Rigs and Marine Vessels
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Clients include IOCs, Independents, NOCs, Marginal field owners, EPCs, Major Engineering contractors, Marine companies and Oil service companies
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Sister companies in Angola, Mozambique, Senegal and Uganda
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-800 before:rounded-full">
        Technical partnership with major OEMs globally
      </li>
    </ul>
  </motion.div>
</section>


      {/* CORE COMPETENCIES */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-2xl font-semibold text-blue-800">Core Competencies</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coreCompetencies.map((c, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="bg-blue-50 p-4 rounded-xl shadow border border-gray-100 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-blue-700">{c}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
<section className="py-16 px-6 lg:px-20 bg-blue-50 font-sans">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-2xl md:text-3xl font-semibold text-blue-900 mb-10 tracking-tight"
    >
      Our Range of Services
    </motion.h2>

    <div className="grid gap-10 md:grid-cols-2">
      {services.map((s, idx) => (
        <motion.div
          key={idx}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-60 overflow-hidden">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                {s.title}
              </h3>

              <ul className="grid gap-3 text-sm text-gray-700 font-medium">
                {s.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* SURVEILLANCE SYSTEMS */}
<section className="py-16 px-6 lg:px-20 bg-blue-50 font-sans">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div>
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-blue-800 tracking-tight"
      >
        Surveillance System (Radar & Camera)
      </motion.h3>

      <motion.ul
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid gap-3 text-sm md:text-base text-gray-700 font-medium"
      >
        {[
          "Detect more threats quickly and accurately with low operator workload.",
          "High-resolution radar with 360° coverage and low false alarm rate.",
          "Radar tracking of up to 100 targets with slew-to-cue camera sensors.",
          "Multi-operator data sharing, multi-window display, and graded response workflow.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0"></span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </motion.ul>
    </div>

    {/* Image */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-64 rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        src={radar}
        alt="Surveillance Radar and Camera System"
      />
    </motion.div>

  </div>
</section>

      {/* PARTNERS */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-10 text-center text-blue-800"
        >
          Our Partners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            rctslPartner1, rctslPartner2, rctslPartner3, rctslPartner5,
            rctslPartner6, rctslPartner8, rctslPartner9, rctslPartner10,
            rctslPartner12, rctslPartner13, rctslPartner14, rctslPartner15,
            rctslPartner16, rctslPartner18, rctslPartner19, rctslPartner20,
            rctslPartner21, rctslPartner22, rctslPartner23, rctslPartner24,
            rctslPartner25, rctslPartner26,
          ].map((logo, idx) => (
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

      {/* CLIENTS */}
      <section className="py-16 px-6 lg:px-20 bg-blue-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-10 text-center text-blue-800"
        >
          Our Clients
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            rctslClient1, rctslClient2, rctslClient3, rctslClient4, 
            rctslClient6, rctslClient7, rctslClient8, rctslClient9, rctslClient10,
            rctslClient11, rctslClient12, rctslClient13, rctslClient14, rctslClient15,
            rctslClient16, rctslClient17, rctslClient18, rctslClient19, rctslClient20,
            rctslClient21, rctslClient27,
          ].map((logo, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-white rounded-xl shadow hover:shadow-lg transition flex items-center justify-center p-6 cursor-pointer"
            >
              <img
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RCTSL;
