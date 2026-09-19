import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="bg-paper-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="A progression from project operations and engineering roles into senior backend engineering and technical leadership."
        />

        <div className="relative border-l border-ink-700/15 pl-8">
          {experience.map((entry) => (
            <div key={entry.company} className="relative pb-12 last:pb-0">
              <span
                className={`absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rounded-full ${
                  entry.emphasis ? 'bg-accent-500' : 'bg-ink-500/40'
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink-900">{entry.company}</h3>
                <span className="font-mono text-xs text-ink-500">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-600">
                {entry.role}
                {entry.location ? ` · ${entry.location}` : ''}
              </p>

              {entry.bullets && (
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink-700">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-500/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
