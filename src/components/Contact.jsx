import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: data.success, error: "" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: "", error: data.error });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: "",
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact <span className="text-[#00f0ff]">Us</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00f0ff] h-32 resize-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={status.loading}
            className="bg-[#00f0ff] text-gray-900 font-semibold py-3 rounded-md hover:bg-[#00d4e0] transition disabled:opacity-50"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>

          {status.success && (
            <p className="text-green-400 text-center font-medium">
              ✅ {status.success}
            </p>
          )}
          {status.error && (
            <p className="text-red-400 text-center font-medium">
              ❌ {status.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
