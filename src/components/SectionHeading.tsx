import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center = false }: Props) {
  return (
    <Reveal className={"mb-12 max-w-2xl" + (center ? " mx-auto text-center" : "")}>
      <span className={"eyebrow" + (center ? " justify-center" : "")}>
        <span className="h-px w-6 bg-accent/70" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
