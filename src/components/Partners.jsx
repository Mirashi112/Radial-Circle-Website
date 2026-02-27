import React from "react";
import { motion } from "framer-motion";

// ✅ Make sure these match exactly with src/assets filenames
import partner1 from "../assets/Partner1.png.jpg";
import partner2 from "../assets/Partner2.png.jpg";
import partner3 from "../assets/Partner3.png.jpg";
import partner4 from "../assets/Partner4.png.jpg";
import partner5 from "../assets/Partner5.png.jpg";
import partner6 from "../assets/Partner6.png.jpg";
import partner7 from "../assets/partner7.png.jpg";
import partner8 from "../assets/partner8.png";
import partner9 from "../assets/partner9.png";
import partner10 from "../assets/partner10.png";
import partner11 from "../assets/partner11.png";
import partner12 from "../assets/partner12.png";
import partner13 from "../assets/partner13.png";
import partner14 from "../assets/partner14.png";
import partner15 from "../assets/partner15.png";
import partner16 from "../assets/partner16.png";

// ✅ Ross Partners
import rossPartner1 from "../assets/rosspartner-1.png";
import rossPartner2 from "../assets/rosspartner-2.png";
import rossPartner3 from "../assets/rosspartner-3.png";
import rossPartner4 from "../assets/rosspartner-4.png";
import rossPartner5 from "../assets/rosspartner-5.jpg";
import rossPartner6 from "../assets/rosspartner-6.jpg";
import rossPartner7 from "../assets/rosspartner-7.png";

// Centralized partner array
const partners = [
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
  partner13,
  partner14,
  partner15,
  partner16,
  rossPartner1,
  rossPartner2,
  rossPartner3,
  rossPartner4,
  rossPartner5,
  rossPartner6,
  rossPartner7,
];

const Partners = () => {
  const logos = [...partners, ...partners]; // duplicate for smooth loop

  return (
    <section
      id="partners"
      className="pt-0 pb-12 sm:pb-16 md:pb-24 bg-[#2d3142]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-6"
        >
          Our Partners & Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-center mb-10"
        >
          We are proud to collaborate with global leaders across oil,
          marine, and technical industries.
        </motion.p>

        {/* Auto-Sliding (Tablet Only) */}
        <div className="hidden md:block lg:hidden relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg 
                           flex justify-center items-center 
                           shadow-md hover:shadow-lg 
                           transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  loading="lazy"
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-4 gap-4 md:hidden">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex justify-center items-center 
                         shadow-sm hover:shadow-lg hover:scale-105 
                         transition-all duration-300 p-2"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                loading="lazy"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-4 lg:mt-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex justify-center items-center 
                         shadow-sm hover:shadow-lg hover:scale-105 
                         transition-all duration-300 p-2"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                loading="lazy"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;