import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { SocialIcon } from "./icons";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return String(n);
}

export function Hero() {
  const stats = [
    { label: "Repositories", value: profile.stats.repos },
    { label: "Languages", value: profile.topLanguages.length },
    { label: "Followers", value: profile.stats.followers },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div className="container-content grid items-center gap-12 lg:grid-cols-12">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={item}>
            <span className="pill">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-muted">Hi, I&apos;m </span>
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-xl font-medium text-fg sm:text-2xl">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/60"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
              >
                <SocialIcon icon={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar + stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-4 rounded-full bg-accent/15 blur-2xl" />
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={288}
              height={288}
              className="relative aspect-square w-60 rounded-full border border-line object-cover shadow-soft sm:w-72"
            />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="card px-3 py-4 text-center">
                <div className="font-display text-2xl font-bold text-fg">{formatCount(s.value)}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-accent md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
