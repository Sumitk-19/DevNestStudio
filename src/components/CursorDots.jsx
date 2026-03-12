"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";

export default function CursorDots() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const dots = container.querySelectorAll(".dot");

    const bounds = container.getBoundingClientRect();

    const moveDots = (e) => {

      const { width, height, left, top } = bounds;

      const hw = width / 2;
      const hh = height / 2;

      const x = utils.clamp(e.clientX - left - hw, -hw, hw);
      const y = utils.clamp(e.clientY - top - hh, -hh, hh);

      animate(dots, {
        x: stagger(8, { from: "center" }),
        y: stagger(8, { from: "center" }),
        duration: 400,
        ease: "out(3)"
      });
    };

    container.addEventListener("mousemove", moveDots);

    return () => container.removeEventListener("mousemove", moveDots);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 grid grid-cols-10 gap-6 opacity-30 pointer-events-none"
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="dot w-2 h-2 bg-purple-400 rounded-full"
        />
      ))}
    </div>
  );
}