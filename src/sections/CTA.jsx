"use client";

import { useEffect, useRef, useState } from "react";
import { createAnimatable, utils, stagger } from "animejs";
import { PopupModal } from "react-calendly";

export default function CTA() {

  const containerRef = useRef(null);
  const animatableRef = useRef(null);

  const [openCalendly, setOpenCalendly] = useState(false);

  useEffect(() => {

    const container = containerRef.current;

    const circles = createAnimatable(".cta-circle", {
      x: stagger(40, { from: "center", start: 100 }),
      y: stagger(40, { from: "center", start: 100 }),
      ease: "out(4)"
    });

    animatableRef.current = circles;

    let bounds = container.getBoundingClientRect();

    const refreshBounds = () => {
      bounds = container.getBoundingClientRect();
    };

    const onMouseMove = (e) => {

      const { width, height, left, top } = bounds;

      const hw = width / 2;
      const hh = height / 2;

      const x = utils.clamp(e.clientX - left - hw, -hw, hw);
      const y = utils.clamp(e.clientY - top - hh, -hh, hh);

      circles.x(x * 0.15);
      circles.y(y * 0.15);

    };

    window.addEventListener("resize", refreshBounds);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", refreshBounds);
      container.removeEventListener("mousemove", onMouseMove);
    };

  }, []);

  const handleStartProject = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const handleScheduleCall = () => {
    setOpenCalendly(true);
  };

  return (
    <section
      id="cta"
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-r from-purple-900 via-black to-blue-900"
    >

      {/* gradient glow */}

      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[200px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      {/* animated circles */}

      <div className="absolute top-10 left-10 flex gap-4 opacity-40">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="cta-circle w-8 h-8 bg-purple-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-10 right-10 flex gap-4 opacity-40">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="cta-circle w-8 h-8 bg-purple-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute bottom-10 left-10 flex gap-4 opacity-40">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="cta-circle w-8 h-8 bg-purple-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 flex gap-4 opacity-40">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="cta-circle w-8 h-8 bg-purple-400 rounded-full"></div>
        ))}
      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Have a Project in Mind?
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Let's build something amazing together. I help businesses create
          modern digital products that attract customers and grow revenue.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <button
            onClick={handleStartProject}
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Your Project
          </button>

          <button
            onClick={handleScheduleCall}
            className="px-8 py-4 border border-gray-500 rounded-xl hover:bg-white hover:text-black transition"
          >
            Schedule a Call
          </button>

        </div>

      </div>

      {/* Calendly Popup */}

      <PopupModal
         url="https://calendly.com/devneststudio-team/30min"
         onModalClose={() => setOpenCalendly(false)}
         open={openCalendly}
         rootElement={typeof window !== "undefined" ? document.body : null}
      />

    </section>
  );
}