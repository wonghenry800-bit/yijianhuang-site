'use client';

import { useEffect, useRef } from 'react';

export default function LiquidHeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawRibbon = (
      yBase: number,
      amp: number,
      color: string,
      width: number,
      speed: number,
      offset: number,
    ) => {
      const w = window.innerWidth;
      const t = frame * speed + offset;

      ctx.beginPath();
      for (let x = -60; x <= w + 60; x += 28) {
        const y = yBase
          + Math.sin(x * 0.006 + t) * amp
          + Math.cos(x * 0.014 - t * 0.8) * amp * 0.28;

        if (x === -60) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.shadowColor = color;
      ctx.shadowBlur = 22;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      frame += prefersReducedMotion ? 0 : 1;

      ctx.clearRect(0, 0, w, h);

      const bg = ctx.createRadialGradient(w * 0.5, h * 0.32, 0, w * 0.5, h * 0.34, Math.max(w, h) * 0.72);
      bg.addColorStop(0, 'rgba(45, 145, 255, 0.24)');
      bg.addColorStop(0.34, 'rgba(107, 79, 255, 0.12)');
      bg.addColorStop(0.72, 'rgba(18, 24, 38, 0.18)');
      bg.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const sweep = ctx.createLinearGradient(w * 0.1, h * 0.1, w * 0.9, h * 0.86);
      sweep.addColorStop(0, 'rgba(255,255,255,0)');
      sweep.addColorStop(0.42, 'rgba(255,255,255,0.18)');
      sweep.addColorStop(0.48, 'rgba(94,187,255,0.18)');
      sweep.addColorStop(0.58, 'rgba(255,255,255,0.04)');
      sweep.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = sweep;
      ctx.globalCompositeOperation = 'screen';
      ctx.fillRect(0, 0, w, h);

      drawRibbon(h * 0.48, 46, 'rgba(122, 204, 255, 0.26)', 1.4, 0.012, 0);
      drawRibbon(h * 0.54, 34, 'rgba(255, 255, 255, 0.18)', 1, 0.009, 1.7);
      drawRibbon(h * 0.6, 58, 'rgba(111, 96, 255, 0.18)', 1.2, 0.007, 3.4);

      for (let i = 0; i < 22; i += 1) {
        const angle = i * 0.9 + frame * 0.006;
        const radius = Math.min(w, h) * (0.18 + (i % 7) * 0.018);
        const x = w * 0.5 + Math.cos(angle) * radius;
        const y = h * 0.46 + Math.sin(angle * 0.8) * radius * 0.46;
        const dot = ctx.createRadialGradient(x, y, 0, x, y, 42);
        dot.addColorStop(0, 'rgba(255,255,255,0.16)');
        dot.addColorStop(0.34, 'rgba(80,170,255,0.08)');
        dot.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = dot;
        ctx.fillRect(x - 44, y - 44, 88, 88);
      }

      ctx.globalCompositeOperation = 'source-over';

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="liquid-hero-scene" aria-hidden="true" />
      <div className="liquid-hero-grid" aria-hidden="true" />
      <div className="liquid-hero-glass" aria-hidden="true" />
    </>
  );
}
