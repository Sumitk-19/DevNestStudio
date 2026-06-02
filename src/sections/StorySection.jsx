"use client";

import { motion } from "framer-motion";
import { FaBolt, FaMobileAlt, FaSearch, FaHeadset } from "react-icons/fa";

export default function StorySection() {
  return (
    <section
      id="story"
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full -top-40 -left-40"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Websites That{" "}
            <span className="gradient-text">
              Convert Visitors
            </span>{" "}
            Into Clients
          </h2>

          <p className="text-gray-400 max-w-lg mb-8 text-lg">
            We create modern, high-converting websites that help businesses
            build trust, generate leads, and attract more customers online.
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              Mobile Responsive
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              SEO Friendly
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              Fast Loading
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              Lead Generation Focused
            </span>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5"
        >

          <div className="glass p-6 rounded-2xl">
            <FaBolt className="text-purple-400 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-400">
              Most websites delivered within 3–7 days.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <FaMobileAlt className="text-purple-400 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">
              Mobile Optimized
            </h3>
            <p className="text-sm text-gray-400">
              Perfect experience on phones, tablets, and desktops.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <FaSearch className="text-purple-400 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">
              SEO Ready
            </h3>
            <p className="text-sm text-gray-400">
              Structured to rank better on Google search.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <FaHeadset className="text-purple-400 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">
              Ongoing Support
            </h3>
            <p className="text-sm text-gray-400">
              Help and guidance even after launch.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}