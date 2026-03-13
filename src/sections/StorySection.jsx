"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="py-32 px-6 bg-black relative overflow-hidden">

      {/* subtle gradient glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full -top-40 -left-40"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

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

          <p className="text-gray-400 max-w-lg mb-8">
            I design modern, fast, and scalable websites that help
            businesses build credibility and attract customers online.
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              Fast Performance
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              Modern UI
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-300">
              SEO Optimized
            </span>

          </div>

        </motion.div>

        {/* RIGHT CARD */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl hover:scale-[1.02] transition duration-300"
        >

          <h3 className="text-xl font-semibold mb-6">
            Modern Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 text-sm rounded-full bg-gray-800">
              Next.js
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-gray-800">
              React
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-gray-800">
              Node.js
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-gray-800">
              MongoDB
            </span>

            <span className="px-4 py-2 text-sm rounded-full bg-gray-800">
              TailwindCSS
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}