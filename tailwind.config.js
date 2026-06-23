/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm, neutral, professional — Claude-like restraint.
        bg: "#f6f5f0", // warm ivory
        surface: "#fffdf8", // warm white cards
        surface2: "#efece3", // subtle fills / pills
        line: "#e6e2d6", // hairline borders
        muted: "#75736b", // secondary text
        fg: "#1d1b17", // primary text (warm near-black)
        accent: {
          DEFAULT: "#c15f3c", // restrained terracotta — used sparingly
          soft: "#d3795a",
          dim: "#9d4628",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(29,27,23,0.04), 0 12px 32px -16px rgba(29,27,23,0.18)",
        lift: "0 2px 4px rgba(29,27,23,0.05), 0 18px 40px -18px rgba(29,27,23,0.22)",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        drift: {
          "0%,100%": { transform: "translate(0px,0px) rotate(0deg)" },
          "50%": { transform: "translate(26px,-30px) rotate(8deg)" },
        },
        "drift-slow": {
          "0%,100%": { transform: "translate(0px,0px) rotate(0deg)" },
          "50%": { transform: "translate(-30px,24px) rotate(-10deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        marquee: "scroll-x 36s linear infinite",
        float: "float 9s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "drift-slow": "drift-slow 22s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
