import React from "react";
import Footer from "./Footer";

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Training</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Training programs to develop skilled professionals in oil, marine, and technical sectors.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Training;
