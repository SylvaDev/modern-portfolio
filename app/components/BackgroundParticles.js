"use client";

import { useEffect, useRef } from "react";

// Subtle emerald particles in the background using canvas
export default function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    const particles = [];
    const maxParticles = 80; // keep this modest for performance

    const emeralds = [
      "rgba(16, 185, 129, 0.08)", // emerald-500, very subtle
      "rgba(16, 185, 129, 0.14)",
      "rgba(45, 212, 191, 0.12)", // teal-ish accent
    ];

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createParticle = () => {
      const size = Math.random() * 4 + 1;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: size,
        alpha: 0,
        maxAlpha: 0.15 + Math.random() * 0.08,
        speedY: 0.15 + Math.random() * 0.35,
        driftX: (Math.random() - 0.5) * 0.15,
        color: emeralds[Math.floor(Math.random() * emeralds.length)],
        phase: Math.random() * Math.PI * 2,
      };
    };

    const populate = () => {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        particles.push(createParticle());
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // gentle float
        p.y -= p.speedY;
        p.x += p.driftX;
        p.phase += 0.01;

        // soft fade-in/out shimmer
        const alphaWave = (Math.sin(p.phase) + 1) / 2; // 0..1
        p.alpha = p.maxAlpha * alphaWave;

        // recycle when off-screen
        if (p.y + p.radius < 0) {
          Object.assign(p, createParticle(), { y: height + p.radius });
        }

        ctx.beginPath();
        ctx.fillStyle = p.color.replace(/0\.\d+\)/, `${p.alpha})`);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      populate();
    };

    resize();
    populate();
    draw();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}

