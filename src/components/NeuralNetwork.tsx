import { useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  bx: number;
  by: number;
  phase: number;
  amp: number;
  speed: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
}

/**
 * Animated neural-network backdrop: neuron nodes drift with a wavy (sine)
 * motion and connect to nearby neighbours with gently curved edges. Canvas-
 * based, neutral palette, and static (single frame) under reduced-motion.
 */
export function NeuralNetwork() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    // Alias to non-null-typed consts so the narrowing holds inside the
    // nested build()/frame() closures (TS won't carry it otherwise).
    const canvas = el;
    const ctx = context;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const LINK_DIST = 155;

    let width = 0;
    let height = 0;
    let neurons: Neuron[] = [];
    let raf = 0;
    let t = 0;

    function build() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(72, Math.max(26, Math.round((width * height) / 24000)));
      neurons = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          bx: x,
          by: y,
          phase: Math.random() * Math.PI * 2,
          amp: 10 + Math.random() * 24,
          speed: 0.2 + Math.random() * 0.5,
          vx: (Math.random() - 0.5) * 0.045,
          vy: (Math.random() - 0.5) * 0.045,
          r: 1.4 + Math.random() * 2.1,
          accent: Math.random() < 0.18,
        };
      });
    }

    function frame() {
      t += 0.0022;
      ctx.clearRect(0, 0, width, height);

      for (const n of neurons) {
        n.bx += n.vx;
        n.by += n.vy;
        if (n.bx < -60) n.bx = width + 60;
        else if (n.bx > width + 60) n.bx = -60;
        if (n.by < -60) n.by = height + 60;
        else if (n.by > height + 60) n.by = -60;
        n.x = n.bx + Math.sin(t * n.speed * 6 + n.phase) * n.amp;
        n.y = n.by + Math.cos(t * n.speed * 5 + n.phase) * n.amp * 0.6;
      }

      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const a = neurons[i];
          const b = neurons[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d >= LINK_DIST) continue;

          const alpha = (1 - d / LINK_DIST) * 0.24;
          ctx.strokeStyle =
            a.accent || b.accent ? `rgba(193,95,60,${alpha})` : `rgba(29,27,23,${alpha})`;
          ctx.lineWidth = 1;

          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const off = Math.sin(t * 3.5 + a.phase + b.phase) * 7;
          const nx = -dy / (d || 1);
          const ny = dx / (d || 1);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(mx + nx * off, my + ny * off, b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of neurons) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + n.phase);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.accent
          ? `rgba(193,95,60,${0.4 + pulse * 0.35})`
          : `rgba(29,27,23,${0.22 + pulse * 0.18})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(frame);
    }

    build();
    frame();

    const onResize = () => build();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="block h-full w-full" />;
}
