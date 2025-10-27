import React from "react";
import { Link } from "react-router-dom";

function RequestForQuoteConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
          ✅ Request Submitted Successfully
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your request. Our team will review your requirements and
          get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
export default RequestForQuoteConfirmation;