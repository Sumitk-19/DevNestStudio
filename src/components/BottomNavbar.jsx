"use client";

import { useEffect, useState } from "react";
import { FaHome, FaServicestack, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function BottomNavbar() {

  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "services", icon: FaServicestack, label: "Services" },
    { id: "work", icon: FaBriefcase, label: "Work" },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
  ];

  // 🔥 Scroll detection
  useEffect(() => {

  const handleScroll = () => {
    const sections = navItems.map(item => ({
      id: item.id,
      offset: document.getElementById(item.id)?.offsetTop || 0
    }));

    const scrollPos = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPos >= sections[i].offset) {
        setActive(sections[i].id);
        break;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

  // Click scroll
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden
      w-[92%] max-w-md
      bg-gradient-to-r from-purple-900/90 via-black/90 to-blue-900/90
      backdrop-blur-xl border border-white/10
      rounded-2xl shadow-xl
      shadow-[0_0_30px_rgba(139,92,246,0.2)]">

      <div className="flex justify-around items-center py-3">

        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={i}
              onClick={() => handleScroll(item.id)}
              className="flex flex-col items-center text-xs relative transition"
            >
              <Icon
                size={20}
                className={`transition ${
                  isActive ? "text-purple-400" : "text-gray-400"
                }`}
              />

              <span className={`${isActive ? "text-white" : "text-gray-400"}`}>
                {item.label}
              </span>

              {/* Active Indicator */}
              {isActive && (
                <span className="absolute -bottom-2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
}