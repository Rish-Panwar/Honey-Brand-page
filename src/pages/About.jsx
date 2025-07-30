import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 py-10 px-4 sm:px-6 lg:px-20 text-white">
      
      {/* === Top Section with Background Image === */}
      <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-xs scale-110"
          style={{ backgroundImage: "url('/assets/linden-honey.jpg')" }}
        ></div>


        {/* Top section content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-md">About Golden Drop</h1>
          <p className="mt-4 text-lg text-white max-w-2xl">
            Discover the purity of nature with our ethically-sourced, 100% organic honey.
          </p>
        </div>
      </div>

      {/* === Rest of the About Content === */}
      <div className="max-w-5xl mx-auto text-amber-900 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-amber-600">Our Mission</h2>
          <p className="text-base mt-2">
            At <span className="font-bold text-amber-700">Golden Drop</span>, our mission is to promote a healthier lifestyle by offering ethically sourced, chemical-free, and nutrient-rich products from local farms. We are committed to purity, sustainability, and the well-being of our customers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-600">Why Choose Golden Drop?</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Raw, unprocessed honey directly from ethical beekeepers</li>
            <li>Organic food products handcrafted with love and care</li>
            <li>Eco-friendly packaging and sustainable sourcing</li>
            <li>Fast, secure delivery with a personal touch</li>
            <li>Friendly support dedicated to your health and satisfaction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-600">Our Vision</h2>
          <p className="text-base mt-2">
            We envision a world where nature and wellness go hand in hand. Golden Drop is not just a brand — it’s a movement toward conscious consumption, local empowerment, and reconnecting with nature’s richness.
          </p>
        </section>

        <section className="text-center">
          <h3 className="text-xl font-semibold text-amber-500 mb-2">Become Part of Our Natural Journey</h3>
          <p className="mb-4">
            Whether you're a wellness enthusiast, a conscious shopper, or just someone who loves pure food — Golden Drop brings nature’s golden touch to your life.
          </p>
          <Link to={'/products'}>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-xl hover:bg-amber-700 transition duration-300">
              Explore Products
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
