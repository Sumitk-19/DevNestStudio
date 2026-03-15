"use client";

import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


export default function Footer() {

  const navLinks = [
    {name:"Home", link:"#home"},
    {name:"Services", link:"#services"},
    {name:"Projects", link:"#work"},
    {name:"Contact", link:"#contact"}
  ];

  const serviceLinks = [
    {name:"Website Development", link:"#services"},
    {name:"Web App Development", link:"#services"},
    {name:"Logo Design", link:"#services"},
    {name:"Thumbnail Design", link:"#services"}
  ];

  return (
    <footer className="relative bg-black pt-24 pb-10 px-6 overflow-hidden">

      {/* animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient"></div>

      {/* glow background */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* brand */}
          <div>

            <h3 className="text-xl font-bold mb-4">
              DevNest Studio
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern digital products that help businesses grow
              and attract customers online.
            </p>

          </div>

          {/* navigation */}

          <div>

            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              {navLinks.map((item,i)=>(
                <li key={i} className="relative w-fit group">

                  <a href={item.link}>

                    {item.name}

                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* services */}

          <div>

            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              {serviceLinks.map((item,i)=>(
                <li key={i} className="relative w-fit group">

                  <a href={item.link}>

                    {item.name}

                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* social */}

          <div>

            <h4 className="font-semibold mb-4">
              Connect
            </h4>

            <div className="flex gap-4 text-xl">

              <a
                href="https://www.instagram.com/devnest.studio/"
                target="_blank"
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              {/* <a
                href="https://linkedin.com/in/YOURUSERNAME"
                target="_blank"
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <FaLinkedin />
              </a> */}

              <a
                href="https://x.com/devneststudio_x"
                target="_blank"
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <RiTwitterXLine />
              </a>

              <a
                href="https://wa.me/919599661874"
                target="_blank"
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* bottom bar */}

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