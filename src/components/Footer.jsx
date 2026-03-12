"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-10 px-6 overflow-hidden">

      {/* background glow */}

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[200px] rounded-full -bottom-20 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* main footer grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* brand */}

          <div>

            <h3 className="text-xl font-bold mb-4">
              DevNest Studio
            </h3>

            <p className="text-gray-400 text-sm">
              Building modern digital products that help businesses grow
              and succeed online.
            </p>

          </div>

          {/* navigation */}

          <div>

            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Services
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Projects
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* services */}

          <div>

            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li>Website Development</li>
              <li>Web App Development</li>
              <li>Logo Design</li>
              <li>Thumbnail Design</li>

            </ul>

          </div>

          {/* social */}

          <div>

            <h4 className="font-semibold mb-4">
              Connect
            </h4>

            <div className="flex gap-4 text-xl">

              <a className="text-gray-400 hover:text-white transition">
                <FaGithub />
              </a>

              <a className="text-gray-400 hover:text-white transition">
                <FaLinkedin />
              </a>

              <a className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>

              <a className="text-gray-400 hover:text-white transition">
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* divider */}

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} DevNest Studio. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with Next.js & Tailwind
          </p>

        </div>

      </div>

    </footer>
  );
}