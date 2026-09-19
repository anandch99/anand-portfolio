import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { metrics } from '../../data/achievements';

export function Highlights() {
  return (
    <section id="highlights" className="bg-paper-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Engineering Highlights"
          title="Verified engineering outcomes"
          description="Concise, factual outcomes from enterprise engineering and technical leadership work."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm"
            >
              <p className="font-mono text-2xl font-semibold tracking-tight text-ink-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-ink-500">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

