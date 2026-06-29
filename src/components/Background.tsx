import { NeuralNetwork } from "./NeuralNetwork";

/**
 * Fixed backdrop: warm ivory base + a barely-there grid + an animated wavy
 * neural-network mesh, with drifting outlined geometric shapes layered on top.
 * Neutral and professional; all motion is slow and gentle.
 */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      {/* barely-there grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(29,27,23,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,27,23,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 25%, #000 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 80% at 50% 25%, #000 45%, transparent 95%)",
        }}
      />

      {/* soft warm wash at the top */}
      <div className="absolute inset-x-0 top-0 h-[55vh] bg-gradient-to-b from-accent/[0.05] to-transparent" />

      {/* animated neural network mesh */}
      <div className="absolute inset-0">
        <NeuralNetwork />
      </div>

      {/* ---- drifting geometric shapes ---- */}

      {/* rings */}
      <div className="absolute left-[7%] top-[15%] h-24 w-24 rounded-full border border-fg/10 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute right-[43%] bottom-[26%] h-14 w-14 rounded-full border border-fg/10 animate-drift" style={{ animationDelay: "-7s" }} />
      <div className="absolute right-[17%] top-[58%] h-9 w-9 rounded-full border border-fg/10 animate-drift-slow" style={{ animationDelay: "-4s" }} />
      <div className="absolute left-[3%] top-[52%] h-32 w-32 rounded-full border border-accent/10 animate-float" style={{ animationDelay: "-9s" }} />

      {/* squares / diamonds */}
      <div className="absolute right-[11%] top-[19%] h-16 w-16 rotate-45 rounded-[4px] border border-accent/25 animate-drift" />
      <div className="absolute left-[30%] bottom-[12%] h-12 w-12 rounded-md border border-fg/10 animate-spin-slow" />
      <div className="absolute left-[40%] bottom-[30%] h-9 w-9 rotate-45 rounded-[3px] border border-fg/10 animate-drift" style={{ animationDelay: "-2.5s" }} />
      <div className="absolute right-[48%] top-[8%] h-7 w-7 rotate-45 rounded-[3px] border border-accent/20 animate-spin-slow" style={{ animationDelay: "-5s" }} />

      {/* triangles */}
      <svg className="absolute left-[13%] bottom-[17%] h-20 w-20 animate-drift-slow text-fg/10" viewBox="0 0 100 100" fill="none">
        <polygon points="50,8 92,88 8,88" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="absolute right-[13%] top-[13%] h-14 w-14 animate-spin-slow text-fg/[0.08]" viewBox="0 0 100 100" fill="none">
        <polygon points="50,8 92,88 8,88" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>

      {/* hexagons */}
      <svg className="absolute right-[8%] bottom-[14%] h-24 w-24 animate-spin-slow text-accent/15" viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 89,27 89,73 50,95 11,73 11,27" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="absolute left-[6%] bottom-[42%] h-16 w-16 animate-drift-slow text-fg/[0.08]" style={{ animationDelay: "-3s" }} viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 89,27 89,73 50,95 11,73 11,27" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>

      {/* plus signs */}
      <svg className="absolute left-[47%] top-[11%] h-10 w-10 animate-float text-fg/15" style={{ animationDelay: "-3.5s" }} viewBox="0 0 100 100" fill="none">
        <path d="M50 16 V84 M16 50 H84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="absolute right-[29%] bottom-[40%] h-7 w-7 animate-float text-accent/25" style={{ animationDelay: "-6s" }} viewBox="0 0 100 100" fill="none">
        <path d="M50 16 V84 M16 50 H84" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <svg className="absolute left-[70%] top-[44%] h-6 w-6 animate-drift text-fg/15" style={{ animationDelay: "-1.5s" }} viewBox="0 0 100 100" fill="none">
        <path d="M50 16 V84 M16 50 H84" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* dots */}
      <div className="absolute right-[26%] top-[35%] h-2.5 w-2.5 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "-5s" }} />
      <div className="absolute left-[22%] top-[29%] h-2 w-2 rounded-full bg-fg/20 animate-float" style={{ animationDelay: "-1s" }} />
      <div className="absolute left-[60%] top-[21%] h-3 w-3 rounded-full bg-accent/25 animate-float" style={{ animationDelay: "-8s" }} />
      <div className="absolute left-[76%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-fg/20 animate-float" style={{ animationDelay: "-5.5s" }} />
    </div>
  );
}
