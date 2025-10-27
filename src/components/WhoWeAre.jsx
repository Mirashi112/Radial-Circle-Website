// src/pages/About.jsx
import React from "react";
import MediaShowcase from "./MediaShowcase";

// assets
import heroBg from "../assets/hero-bg.jpg"; // 👉 replace with your hero image
import vision from "../assets/vision.svg";
import mission from "../assets/mission.svg"; // (unused but kept for future)
import pledge from "../assets/pledge.svg";
import iso45001 from "../assets/iso45001-2018.jpeg";
import iso9001 from "../assets/iso9001-2015.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
    {/* HERO */}
<header
  className="relative bg-cover bg-center text-white min-h-[80vh] flex items-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a28]/90 via-[#0a1a28]/75 to-[#0a1a28]/90" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-24 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl text-[#00f0ff] tracking-tight">
      Who We Are
    </h1>

    <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify backdrop-blur-[1px] bg-[#0c1a25]/20 p-4 sm:p-6 rounded-2xl border border-[#00f0ff]/10 shadow-lg">
      Radial Circle Group consists of companies established between 1995 to date, and is involved in the provision of Telecommunications Solutions, Marine Electronics and Navigational Aids, Security Solutions, Instrumentation and Automation, Electrical Power Systems, and Project Engineering Design, Installation and Commissioning (EPIC) in Nigeria and across the Gulf of Guinea.
      <br />
      <br />
      Since inception, our company has emphasized building a sound technological base. Significant resources have been invested in training staff and forming strategic partnerships with high-tech companies worldwide leading to agency, distributorship, and technical support services.
    </p>
  </div>
</header>


      <main>
        {/* VISION & PLEDGE */}
        <section className="w-full bg-[#C2D0E1] px-4 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 justify-center">
            {/* Vision */}
            <div className="text-center bg-gray-100 p-8 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 hover:text-white transition duration-300">
              <img src={vision} alt="Vision" className="mx-auto w-14 h-14 mb-4" />
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="text-slate-600 hover:text-gray-200 text-justify text-sm sm:text-base">
                To be a leading force in delivering innovative, reliable, and
                sustainable technical solutions that empower industries and
                communities across Africa.
              </p>
            </div>

            {/* Pledge */}
            <div className="text-center bg-gray-100 p-8 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-red-700 hover:to-red-900 hover:text-white transition duration-300">
              <img src={pledge} alt="Pledge" className="mx-auto w-14 h-14 mb-4" />
              <h3 className="font-bold text-xl mb-2">Our Pledge</h3>
              <p className="text-slate-600 hover:text-gray-200 text-sm sm:text-base text-justify">
                We pledge to uphold excellence, integrity, and safety in every
                project we deliver, ensuring that innovation and customer
                satisfaction remain at the heart of our operations.
              </p>
            </div>
          </div>
        </section>

        {/* MEDIA SHOWCASE */}
        <section id="media" className="py-6 my-2 bg-gray-50">
          <MediaShowcase />
        </section>
      </main>
    </div>
  );
}
