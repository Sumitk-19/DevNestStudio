"use client";

import { useEffect, useRef } from "react";
import CircleParticles from "../components/CircleParticles";

const stats = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Avg Response Time" }
];

export default function Stats() {

  const counters = useRef([]);

  useEffect(() => {

    counters.current.forEach((el, index) => {

      let start = 0;
      const end = stats[index].value;
      const duration = 1200;

      const stepTime = Math.abs(Math.floor(duration / end));

      const counter = setInterval(() => {

        start += 1;
        el.textContent = start;

        if (start === end) {
          clearInterval(counter);
        }

      }, stepTime);

    });

  }, []);

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">

      <CircleParticles />

      {/* subtle gradient glow */}

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[200px] rounded-full left-0 top-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Achievements & Experience
        </h2>

        <p className="text-gray-400 mb-20 max-w-xl mx-auto">
          A few numbers that represent my journey in building digital products.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-10 rounded-2xl hover:scale-105 transition duration-300 flex flex-col items-center"
            >

              <div className="text-4xl font-bold text-purple-400 mb-2">

                <span ref={(el) => (counters.current[index] = el)}>
                  0
                </span>

                {stat.suffix}

              </div>

              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}