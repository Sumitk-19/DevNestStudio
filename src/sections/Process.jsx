"use client";

import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={26} />,
    title: "Discovery",
    description:
      "Understanding your business goals, audience, and project requirements."
  },
  {
    icon: <FaPencilRuler size={26} />,
    title: "Design",
    description:
      "Creating modern UI designs and planning the structure of your product."
  },
  {
    icon: <FaCode size={26} />,
    title: "Development",
    description:
      "Building the website or application using modern technologies."
  },
  {
    icon: <FaRocket size={26} />,
    title: "Launch",
    description:
      "Deploying the project and ensuring everything runs smoothly."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-6">
            How I Work
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            A simple process to transform ideas into powerful digital products.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl text-center hover:scale-105 transition duration-300"
            >

              <div className="text-purple-400 flex justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}