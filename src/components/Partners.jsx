import React from "react";
import { motion } from "framer-motion";

// Replace with your actual logo images
import partner1 from "../assets/partner1.png.jpg";
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
import partner13 from "../assets/partner13.png";
import partner14 from "../assets/partner14.png";
import partner15 from "../assets/partner15.png";  
import partner16 from "../assets/partner16.png";
import partner17 from "../assets/rosspartner-1.png";
import partner18 from "../assets/rosspartner-2.png";
import partner19 from "../assets/rosspartner-3.png";
import partner20 from "../assets/rosspartner-4.png";
import partner21 from "../assets/rosspartner-5.jpg";
import partner22 from "../assets/rosspartner-6.jpg";
import partner23 from "../assets/rosspartner-7.png";


const partners = [
  { logo: partner1, name: "Partner 1" },
  { logo: partner2, name: "Partner 2" },
  { logo: partner3, name: "Partner 3" },
  { logo: partner4, name: "Partner 4" },
  { logo: partner5, name: "Partner 5" },
  { logo: partner6, name: "Partner 6" },
  { logo: partner7, name: "Partner 7" },
  { logo: partner8, name: "Partner 8" },
  { logo: partner9, name: "Partner 9" },
  { logo: partner10, name: "Partner 10" },
  { logo: partner11, name: "Partner 11" },
  { logo: partner12, name: "Partner 12" },
  { logo: partner13, name: "Partner 13" },
  { logo: partner14, name: "Partner 14" },
  { logo: partner15, name: "Partner 15" },
  { logo: partner16, name: "Partner 16" },
  { logo: partner17, name: "Partner 17" },
  { logo: partner18, name: "Partner 18" },
  { logo: partner19, name: "Partner 19" },
  { logo: partner20, name: "Partner 20" },  
  { logo: partner21, name: "Partner 21" },
  { logo: partner22, name: "Partner 22" },
  { logo: partner23, name: "Partner 23" },
];

const Partners = () => {
  // Duplicate list for smooth infinite loop
  const logos = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="pt-0 pb-12 sm:pb-16 md:pb-24 bg-[#2d3142n]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-xl sm:text-3xl md:text-2xl font-bold text-gray-800 text-center mb-3 sm:mb-6"
        >
          Our Partners & Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-center mb-6 sm:mb-10"
        >
          We are proud to collaborate with global leaders across oil,
          marine, and technical industries.
        </motion.p>

        {/* Auto-Sliding Logos for md but hidden on lg */}
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
            {logos.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg 
                           flex justify-center items-center 
                           shadow-md hover:shadow-lg 
                           transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid Layout for mobile default (4 columns) */}
        <div className="grid grid-cols-4 gap-4 md:hidden">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex justify-center items-center shadow-sm
                         hover:shadow-lg hover:scale-105 transition-all duration-300 p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-auto max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Grid Layout for sm screens (4 columns) */}
        <div className="hidden sm:grid sm:grid-cols-4 sm:gap-4 md:hidden">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex justify-center items-center shadow-sm
                         hover:shadow-lg hover:scale-105 transition-all duration-300 p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-auto max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Static 6-column grid for lg screens */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-4 lg:mt-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex justify-center items-center shadow-sm
                         hover:shadow-lg hover:scale-105 transition-all duration-300 p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-auto max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
