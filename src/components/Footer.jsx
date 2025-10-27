// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaChevronDown,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // subtle pulse toggle to keep background breathing (visual only)
    const id = setInterval(() => setPulse((p) => !p), 3000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.footer
      id="footer"
      className={`relative w-full text-white pt-8 pb-8 mt-auto text-sm overflow-hidden`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Background layers matching PortfolioLanding style */}
      <div
        className="absolute inset-0 bg-[#0c1a25] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#00f0ff]/6 to-[#0c1a25]/30 pointer-events-none transition-opacity duration-1000 ${
          pulse ? "opacity-100" : "opacity-70"
        }`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-sm font-semibold mb-3 text-gray-200">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#00f0ff] transition">
                  Home
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setOpen((s) => !s)}
                  className="flex items-center justify-between w-full text-blue-900 hover:text-[#00f0ff] transition font-medium py-1"
                  aria-expanded={open}
                >
                  What We Do
                  <FaChevronDown
                    className={`ml-2 transition-transform duration-300 ${
                      open ? "rotate-180 text-[#00f0ff]" : ""
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-300"
                  style={{ maxHeight: open ? "240px" : "0", opacity: open ? 1 : 0 }}
                >
                  <ul className="mt-3 pl-4 flex flex-col gap-2 text-gray-300">
                    <li>
                      <Link to="/ross" className="hover:text-[#00f0ff] transition block">
                        Radial Circle Oil Support Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/rctsl" className="hover:text-[#00f0ff] transition block">
                        Radial Circle Technical Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/rcms" className="hover:text-[#00f0ff] transition block">
                        Radial Circle Marine Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to="/WhoWeAre" className="hover:text-[#00f0ff] transition">
                  Who We Are
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#00f0ff] transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/careers" className="hover:text-[#00f0ff] transition">
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold mb-3 text-gray-200">
              Connect With Us
            </h3>
            <div className="flex gap-4 text-2xl">
              {[FaLinkedin, FaInstagram, FaXTwitter, FaFacebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="social"
                  className="text-gray-300 hover:text-[#00f0ff] transition-transform transform hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h3 className="text-sm font-semibold mb-3 text-gray-200">Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-start">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-md bg-[#07121a] text-white text-xs flex-1 border border-[#0f2a38] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-[#00f0ff] text-[#0c1a25] font-semibold text-xs shadow-lg hover:shadow-[0_8px_30px_rgba(0,240,255,0.18)] transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <p className="text-green-400 text-xs mt-2">✅ Thank you for subscribing!</p>
            )}
          </motion.div>
        </div>

        {/* Map + Corporate Offices */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-[#0f2a38] shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.663848952819!2d3.4341906735877106!3d6.437201524163091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf520f3d6a289%3A0x38a23767caf311b1!2s56%20Balarabe%20Musa%20Cres%2C%20Victoria%20Island%2C%20Lagos%2023401%2C%20Lagos!5e0!3m2!1sen!2sng!4v1758712896120!5m2!1sen!2sng"
              className="w-full h-full min-h-[300px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Radial Circle Location"
            />
          </motion.div>

          {/* Offices */}
          <motion.div
            className="bg-[#07121a] p-6 rounded-2xl border border-[#0f2a38]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-sm font-semibold mb-4 text-gray-200">CORPORATE OFFICES</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-300 leading-relaxed">
              <div>
                <p className="font-medium text-gray-100">CORPORATE OFFICE</p>
                <p>
                  11/2 Miles North Highway,
                  <br />
                  P.O.Box 1922
                  <br />
                  Belize City, Belize
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-100">REGIONAL HEAD OFFICE NIGERIA</p>
                <p>
                  56, Balarabe Musa Crescent, Off Samuel Manuwa Street,
                  <br />
                  Victoria Island, Lagos. Nigeria.
                  <br />
                  P.O.Box 54215 Falomo, Ikoyi, Lagos, Nigeria.
                </p>
                <p>📞+234-805-569-9005</p> <p>📞+234-803-340-3578</p>
              </div>

              <div>
                <p className="font-medium text-gray-100">PORT HARCOURT</p>
                <p>
                  43/45 Elelenwo Street,
                  <br />
                  G.R.A. Phase 1, Port Harcourt, Rivers State, Nigeria.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-100">WARRI</p>
                <p>
                  4B Emuhi Road,
                  <br />
                  Off Airport Road, Warri,
                  <br />
                  Delta State, Nigeria.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-100">ABUJA</p>
                <p>
                  H/NO. 4, C9 Close,
                  <br />
                  Citiec Estate, Abuja.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-100">BONNY ISLAND</p>
                <p>
                  Plot 86A Finima Town, Bonny, Nigeria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 text-center text-gray-400 text-xs border-t border-[#0f2a38]">
          © {new Date().getFullYear()} Radial Circle Group. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
