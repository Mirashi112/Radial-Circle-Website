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
import rctslPartner9 from "../assets/rctsl-partner-9.jpg";
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
  // small framer-motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  };

  // ---- DATA ----
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
        "Radar, Gyrocompass — procurement, installation, commissioning & maintenance",
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


  

  // ---- RENDER ----
  return (
    <div className="font-sans text-gray-900">
      {/* HERO */}
      <header className="relative text-white py-14">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('../src/assets/bg-rctsl.png')] bg-cover bg-center"></div>

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
                Radial Circle Technical Services Limited (RCTSL)
              </h2>

              <div className="mt-6 space-y-6">
  {/* Mission Statement */}
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition hover:scale-[1.02] hover:shadow-xl duration-300">
    <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-3">
      Mission Statement
    </h3>
    <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed">
      Our mission is to be one of the leading technical system integrators in
      Africa with solid backing from our technical partners locally and
      internationally, who provide our organization with technical support to
      meet our clients’ needs.
    </p>
  </div>

  {/* Vision Statement */}
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition hover:scale-[1.02] hover:shadow-xl duration-300">
    <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-3">
      Vision Statement
    </h3>
    <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed">
      Our vision is to provide services and solutions that are demand-driven in
      Africa with strong technical partnerships and a commitment to excellence.
    </p>
  </div>
</div>



              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="callto:+2348033403578"
                  className="inline-block bg-white text-blue-800 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                  download
                >
                  📞+234-805-569-9005 📞+234-803-340-3578
                </a>

                <a
                  href="mailto:@radialcircle.com"
                  className="inline-block bg-green-50 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-[#356bb0] transition"
                >
                  enquiry@radialcircle.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* COMPANY OVERVIEW */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="visible"
            whileInView="visible"
            className="text-2xl md:text-3xl font-semibold text-blue-900"
          >
            Company Overview
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="visible"
            whileInView="visible"
            className="mt-4 text-justify text-gray-700"
          >
            Radial Circle is a systems integrator established in 1995, with
            sister companies in Angola, Mozambique, Senegal and Uganda. We
            partner with major OEMs globally and represent them across West
            Africa. We provide world-class hybrid & integrated engineering
            solutions across onshore & offshore environments including
            Processing Plants, Offshore platforms, FPSOs, Drilling Rigs and
            Marine Vessels. Our client base includes IOCs, independents, NOCs,
            marginal field owners, EPCs, major engineering contractors, marine
            companies and oil service companies.
          </motion.p>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="bg-blue-50 rounded-2xl p-6 shadow-inner"
        >
          <h3 className="text-lg font-semibold text-blue-800">
            Company Introduction
          </h3>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            <li>Established in 1995</li>
            <li>Engineering, Procurement, Installation and Commissioning (EPIC)</li>
            <li>Post Installation Support and Maintenance</li>
            <li>
              Provider of world-class hybrid & integrated engineering solutions
              & services
            </li>
            <li>
              Onshore & Offshore inclusive of Processing Plants, Offshore
              platforms, FPSOs, Drilling Rigs and Marine Vessels
            </li>
            <li>
              Clients include IOCs, Independents, NOCs, Marginal field owners,
              EPCs, Major Engineering contractors, Marine companies and Oil
              service companies
            </li>
            <li>Sister companies in Angola, Mozambique, Senegal and Uganda</li>
            <li>Technical partnership with major OEMs globally</li>
          </ul>
        </motion.div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-2xl font-semibold text-blue-800">
            Core Competencies
          </h3>
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
<section className="py-12 bg-blue-50">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
      Our Range of Services
    </h2>

  <div className="mt-6 grid gap-8 md:grid-cols-2">
  {services.map((s, idx) => (
    <motion.div
      key={idx}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
    >
      {/* 🖼️ Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={s.img}
          alt={s.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="font-semibold text-blue-700 text-lg mb-3">{s.title}</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {s.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</div>

  </div>
</section>


      {/* SURVEILLANCE SYSTEMS */}
<section className="py-10 bg-blue-50">
  <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-center">
    {/* Text Section */}
    <div>
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-xl font-semibold text-blue-800"
      >
        Surveillance System (Radar & Camera)
      </motion.h3>
      <motion.ul
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="mt-4 list-disc list-inside text-gray-700 space-y-2"
      >
        <li>Detect more threats quickly and accurately with low operator workload.</li>
        <li>High resolution radar with 360° coverage and low false alarm rate.</li>
        <li>Radar tracking of 100 targets with slew-to-cue of camera sensors.</li>
        <li>Share data to multiple operators, multi-window capability, graded response workflow.</li>
      </motion.ul>
    </div>

    {/* Video Placeholder (Auto-played Video) */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  className="w-full h-64 rounded-xl overflow-hidden shadow-md"
>
  <img
    className="w-full h-full object-cover rounded-xl"
    src= {radar} // 👉 replace with your video path
  />
</motion.div>
  </div>
</section>

 

            {/* PARTNERS SECTION */}
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
            rctslPartner21, rctslPartner22, rctslPartner23, rctslPartner24, rctslPartner25,
            rctslPartner26, 
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

      {/* CLIENTS SECTION */}
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
