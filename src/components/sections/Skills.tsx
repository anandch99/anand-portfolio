import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="bg-paper-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technology stack"
          description="Organized by area of engineering responsibility, from backend and database design to AI integration and observability."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-ink-900 uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-ink-700/10 bg-paper-50 px-2.5 py-1 text-xs font-medium text-ink-700"
                  >
                    {skill.name}
                    {skill.note && (
                      <span className="text-[10px] font-normal text-ink-500 italic">
                        ({skill.note})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
