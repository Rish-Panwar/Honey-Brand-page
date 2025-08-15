import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-4 py-12">
        {/* Left Side */}
        <div className="flex-1">          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s Get In Touch.
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Or just reach out manually to{" "}
            <a
              href="mailto:hello@slothui.com"
              className="text-amber-500 underline"
            >
              hello@goldendrop.com
            </a>
            .
          </p>
        </div>
        {/* Right Side (Form) */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-4 backdrop-blur"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name…"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address…"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765-12345"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your main text here…"
              maxLength={300}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none resize-none"
              required
            />
            <div className="text-right text-xs text-gray-500">
              {form.message.length}/300
            </div>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="accent-orange-500 mr-2"
              required
            />
            <span className="text-gray-700 text-sm">
              I hereby agree to our{" "}
              <a href="#" className="text-amber-500 underline">
                Privacy Policy
              </a>{" "}
              terms.
            </span>
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold text-lg shadow hover:from-yellow-400 hover:to-yellow-500 transition"
          >
            Submit Form &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;