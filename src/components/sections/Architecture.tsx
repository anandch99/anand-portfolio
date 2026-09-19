import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FlowDiagram } from '../ui/FlowDiagram';
import { architectureDiagrams, engineeringFlows } from '../../data/architecture';

export function Architecture() {
  return (
    <section id="architecture" className="bg-paper-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Architecture & Engineering"
          title="How the systems are structured"
          description="Core architectural patterns applied across enterprise APIs, AI/RAG systems, observability platforms and asynchronous processing."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {architectureDiagrams.map((diagram) => (
            <div
              key={diagram.id}
              className="rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-5 text-base font-semibold text-ink-900">{diagram.title}</h3>
              <FlowDiagram steps={diagram.steps} />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent-500 uppercase">
            Engineering Thinking
          </p>
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            How I approach engineering problems
          </h3>

          <div className="grid gap-6 lg:grid-cols-2">
            {engineeringFlows.map((flow) => (
              <div
                key={flow.id}
                className="rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm"
              >
                <h4 className="mb-5 text-sm font-semibold tracking-wide text-ink-700 uppercase">
                  {flow.title}
                </h4>
                <FlowDiagram steps={flow.steps} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
