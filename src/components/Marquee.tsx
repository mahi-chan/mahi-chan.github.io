import { profile } from "../data/profile";

/** Full-bleed scrolling ticker of technologies — pauses on hover. */
export function Marquee() {
  const items = [...profile.marquee, ...profile.marquee];

  return (
    <div className="border-y border-line bg-surface/40">
      <div className="marquee-mask overflow-hidden py-5">
        <ul className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-8">
              <span className="font-mono text-sm font-medium uppercase tracking-wider text-muted">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/50" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
