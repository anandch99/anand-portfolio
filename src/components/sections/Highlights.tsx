import {
  Users,
  Code2,
  Users2,
  Gauge,
  Workflow,
  Rocket,
  Sparkles,
  Building2,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { achievements } from '../../data/achievements';

const icons = [Users, Code2, Users2, Gauge, Workflow, Rocket, Sparkles, Building2];

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
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.label}
                className="group rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600">
                  <Icon className="size-5" />
                </div>
                <p className="text-sm leading-relaxed font-medium text-ink-800">{item.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
