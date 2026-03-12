"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Website Development",
    description:
      "Modern responsive websites built with React, Next.js and optimized for performance."
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Web App Development",
    description:
      "Custom full-stack web applications using modern technologies like MERN stack."
  },
  {
    icon: <FaPalette size={28} />,
    title: "Branding & Design",
    description:
      "Professional logo design, UI design and visual assets for businesses."
  },
  {
    icon: <FaRocket size={28} />,
    title: "Performance & SEO",
    description:
      "Improve website speed, SEO optimization and technical improvements."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Services I Offer
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          Helping businesses build modern digital products that attract
          customers and grow revenue.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass hover:scale-105 transition duration-300"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}