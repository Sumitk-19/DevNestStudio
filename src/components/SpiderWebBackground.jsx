"use client";

import { useEffect, useRef } from "react";

export default function SpiderWebBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 90;

    const mouse = {
      x: null,
      y: null
    };

    const colors = [
      "#a855f7",
      "#6366f1",
      "#3b82f6",
      "#ec4899",
      "#22c55e",
      "#f59e0b"
    ];

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = 2.2;

        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const repelRadius = 80;

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            this.x += dx * force * 0.05;
            this.y += dy * force * 0.05;
          }
        }
      }

      draw() {
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = this.color;
          } else {
            ctx.shadowBlur = 0;
          }
        }

        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const gradient = ctx.createLinearGradient(
              particles[a].x,
              particles[a].y,
              particles[b].x,
              particles[b].y
            );

            gradient.addColorStop(0, "#a855f7");
            gradient.addColorStop(1, "#3b82f6");

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function connectToCursor() {
      if (mouse.x === null) return;

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 130) {
          const gradient = ctx.createLinearGradient(
            p.x,
            p.y,
            mouse.x,
            mouse.y
          );

          gradient.addColorStop(0, "#a855f7");
          gradient.addColorStop(1, "#6366f1");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }

    function init() {
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connectParticles();
      connectToCursor();

      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
}