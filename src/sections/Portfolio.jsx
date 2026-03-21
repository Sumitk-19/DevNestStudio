"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "BookNest",
    description:
      "A MERN stack eCommerce platform where users can browse and purchase books online.",
    image: "/mockup1.png",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://book-store-six-ruby.vercel.app/",
  },
  {
    title: "Realtime Chat App",
    description: "Real-time messaging application built with WebRTC.",
    image: "/mockup2.png",
    tech: ["WebRTC", "React", "Node.js", "JWT"],
    link: "https://friend-fusion-3f85.onrender.com/",
  },
  {
    title: "Image & Pdf Files Managerment App",
    description: "Compress and manage image and PDF files.",
    image: "/mockup3.png",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://tiny-files-pro.vercel.app/",
  },
  {
    title: "For Gym Business",
    description:
      "A modern gym website with pricing and trainer information.",
    image: "/mockup4.png",
    tech: ["Next.js", "Tailwind"],
    link: "https://iron-pulse-gym-mu.vercel.app/",
  },
  {
    title: "For Insurance Agency",
    description: "A modern Insurance provider's website.",
    image: "/mockup5.png",
    tech: ["React", "UI Design"],
    link: "https://vishwakarma-insurance.vercel.app/",
  },
  {
    title: "For Healthcare Clinic",
    description: "A modern healthcare provider's website.",
    image: "/mockup6.png",
    tech: ["Next.js", "Tailwind"],
    link: "https://medi-care-eight-phi.vercel.app/",
  },
  {
    title: "For Optical Store",
    description: "A modern optical store website.",
    image: "/mockup7.png",
    tech: ["Next.js", "Framer Motion"],
    link: "https://optical-shop-beta.vercel.app/",
  },
];

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="work"
      className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden min-h-screen"
    >
      {/* glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[200px] rounded-full top-0 right-0"></div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Selected Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects showcasing modern development and design work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.03] transition duration-300 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  width={500}
                  height={300}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="text-purple-400 text-sm hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        {!showAll && (
          <div className="flex justify-center mt-16">

            <motion.button
              onClick={() => setShowAll(true)}
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0px rgba(139,92,246,0.4)",
                  "0 0 20px rgba(139,92,246,0.8)",
                  "0 0 0px rgba(139,92,246,0.4)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
            >
              More Projects
            </motion.button>

          </div>
        )}

      </div>
    </section>
  );
}