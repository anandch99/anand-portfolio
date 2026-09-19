import { ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { deepDives } from '../../data/deepDives';

export function DeepDives() {
  return (
    <section id="deep-dives" className="bg-paper-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Technical Deep Dives"
          title="Engineering topics I write and speak about"
          description="Focused write-ups on the architectural and engineering problems behind the projects above."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deepDives.map((dive) => (
            <div
              key={dive.id}
              className="group flex flex-col justify-between rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <h3 className="text-base font-semibold text-ink-900">{dive.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{dive.summary}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent-600">
                Case study coming soon
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
