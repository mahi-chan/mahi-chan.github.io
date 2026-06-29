import { NeuralNetwork } from "./NeuralNetwork";

/**
 * Fixed backdrop: warm ivory base + an animated, wavy neural-network mesh,
 * over a barely-there grid for subtle structure. Neutral and professional.
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

      {/* animated neural network */}
      <div className="absolute inset-0">
        <NeuralNetwork />
      </div>
    </div>
  );
}
