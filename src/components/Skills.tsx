import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & technologies"
          description="The languages, frameworks and tools I reach for most."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.skills.map((group, i) => (
            <Reveal key={group.category} delay={Math.min(i, 4) * 0.06}>
              <div className="card h-full p-6">
                <h3 className="font-display text-base font-semibold text-fg">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
