import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { careerProgression } from '../../data/leadership';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-paper-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Backend engineer, technical lead, and enterprise architect"
          description="I design and build enterprise backend systems—focusing on architecture, performance, security and reliability—while leading engineering teams through delivery, mentoring and technical decision-making."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-ink-700">
              My work centers on ASP.NET Core, PostgreSQL and distributed systems, building REST
              APIs and full-stack enterprise applications that hold up under real production load.
              Alongside core backend engineering, I've extended into applied AI—building
              retrieval-augmented generation systems on pgvector and open-source LLMs—and into
              observability, designing a monitoring platform instrumented with OpenTelemetry.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              As a technical team lead, I remain hands-on: writing code, reviewing architecture,
              and owning delivery outcomes for a 9-member engineering team, rather than stepping
              away from engineering into pure people management.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
              Career Progression
            </p>
            <ol className="space-y-3">
              {careerProgression.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-ink-700/15 bg-white font-mono text-xs font-semibold text-ink-700">
                    {i + 1}
                  </span>
                  <span
                    className={`text-sm ${
                      i === careerProgression.length - 1
                        ? 'font-semibold text-ink-900'
                        : 'text-ink-600'
                    }`}
                  >
                    {step}
                  </span>
                  {i < careerProgression.length - 1 && (
                    <ArrowRight className="ml-auto size-3.5 text-ink-500/40" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
