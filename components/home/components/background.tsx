"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  pulse: number;
};

const NUM_STARS = 200;

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Move DPR calculation inside useEffect to avoid SSR issues
    const DPR = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(DPR, DPR);
    };

    setCanvasSize();
    const resizeHandler = () => setCanvasSize();
    window.addEventListener("resize", resizeHandler);

    const stars: Star[] = Array(NUM_STARS)
      .fill(null)
      .map(() => ({
        x: Math.random() * width,
        y: Math.random() * (height * 0.8),
        size: Math.random() * 1,
        speed: 0.1 + Math.random() * 0.2,
        opacity: Math.random() * 0.5 + 0.5,
        pulse: Math.random() * Math.PI,
      }));

    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.pulse += 0.02;
        const currentOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));

        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();

        star.x -= star.speed * (deltaTime / 16);
        if (star.x < 0) {
          star.x = width;
          star.y = Math.random() * (height * 0.8);
        }
      });

      const centerX = width / 2;
      const centerY = height / 0.57;
      const baseRadius = Math.min(width, height) * 1.1;
      const radius = baseRadius + Math.sin(currentTime * 0.0008) * 80;

      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      glow.addColorStop(0, "rgba(96, 165, 250, 0.4)");
      glow.addColorStop(0.3, "rgba(59, 130, 246, 0.0)");
      glow.addColorStop(0.5, "rgba(0, 0, 0, 0)");
      glow.addColorStop(0.6, "rgba(37, 99, 235, 0.6)");
      glow.addColorStop(0.8, "rgba(0, 0, 0, 0)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-20 dark:opacity-100 -z-10 mx-auto flex pointer-events-none"
    />
  );
}