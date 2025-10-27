import React from "react";
import { motion } from "framer-motion";
import careerImg from "../assets/career.jpg"; // <-- ensure this image exists

const Careers = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 py-16">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={careerImg}
            alt="Careers at Radial Circle Group"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Careers at Radial Circle Group
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            At Radial Circle Group, we believe in building a workforce that is
            innovative, skilled, and driven by excellence. We invest in our
            people, offering career growth, mentorship, and opportunities to
            thrive in a dynamic and inclusive environment.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Join us and become part of a team that is shaping the future of the
            energy and technology sectors.
          </p>
        </motion.div>
      </div>

      {/* Job Listings Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Stay Updated for Career Openings…
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore available roles and find your place in our growing team.
          </p>
        </div>

        {/* Example Job Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            {
              title: "No Current Openings",
              location: "Lagos, Nigeria",
              desc: "Responsible for managing technical operations and delivering high-quality engineering solutions.",
            },
            {
              title: "No Current Openings",
              location: "Port Harcourt, Nigeria",
              desc: "Drive growth by identifying new opportunities and building client relationships.",
            },
            {
              title: "No Current Openings",
              location: "Abuja, Nigeria",
              desc: "Ensure workplace safety, compliance, and best practices across projects.",
            },
          ].map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-6 text-left"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h4>
              <p className="text-sm text-red-600 mb-3">{job.location}</p>
              <p className="text-gray-600 mb-4">{job.desc}</p>
              <button className="px-4 py-2 bg-red-600 text-black rounded-full hover:bg-red-700 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Submit CV Info */}
      <div className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Submit Your CV
          </h3>
          <p className="text-gray-700 text-base sm:text-lg">
            Can’t find a role that matches your skills? We’d still love to hear
            from you. <br />
            📧 Please send your CV to{" "}
            <a
              href="mailto:enquiries@radialcircle.com"
              className="text-red-600 font-semibold hover:underline"
            >
              enquiry@radialcircle.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
