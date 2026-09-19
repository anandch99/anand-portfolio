import { Code, ArrowUpRight } from 'lucide-react';
import { Pill } from '../ui/Pill';
import { FlowDiagram } from '../ui/FlowDiagram';
import type { Project } from '../../data/projects';
import { ragComponents } from '../../data/projects';
import {
  observabilityConcepts,
  applicationMetrics,
  serverMetrics,
  tracingConcepts,
} from '../../data/architecture';

export function FeaturedProject({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const isRag = project.id === 'rag';
  const isEop = project.id === 'eop';

  const scrollToDeepDives = () =>
    document.getElementById('deep-dives')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="rounded-2xl border border-ink-700/10 bg-white p-6 shadow-sm sm:p-10">
      <div className={`flex flex-col gap-2 ${reverse ? 'items-end text-right' : ''}`}>
        <Pill tone="accent">{project.badge ?? 'Flagship Project'}</Pill>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
          {project.name}
        </h3>
        <p className="text-sm font-medium text-accent-600">{project.tagline}</p>
      </div>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-700">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technology.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-5">
        <button
          onClick={scrollToDeepDives}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-800 hover:text-accent-600"
        >
          View Case Study <ArrowUpRight className="size-4" />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-800 hover:text-accent-600"
          >
            <Code className="size-4" /> View on GitHub
          </a>
        )}
      </div>


      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
            Architecture
          </p>
          <FlowDiagram steps={project.architecture ?? []} />

          {isRag && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ragComponents.map((c) => (
                <div key={c.name} className="rounded-lg border border-ink-700/10 bg-paper-50 p-4">
                  <p className="font-mono text-sm font-semibold text-ink-900">{c.name}</p>
                  <p className="mt-1 text-sm text-ink-500">{c.description}</p>
                </div>
              ))}
            </div>
          )}

          {isEop && (
            <div className="mt-8 space-y-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {observabilityConcepts.map((c) => (
                  <div key={c.term} className="rounded-lg border border-ink-700/10 bg-paper-50 p-4">
                    <p className="font-mono text-sm font-semibold text-ink-900">{c.term}</p>
                    <p className="mt-1 text-sm text-ink-500">"{c.question}"</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Application Metrics
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {applicationMetrics.map((m) => (
                      <Pill key={m} tone="muted">
                        {m}
                      </Pill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Server Metrics
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {serverMetrics.map((m) => (
                      <Pill key={m} tone="muted">
                        {m}
                      </Pill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Tracing Concepts
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tracingConcepts.map((m) => (
                      <Pill key={m} tone="muted">
                        {m}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
            Capabilities
          </p>
          <ul className="grid grid-cols-1 gap-2">
            {project.capabilities?.map((cap) => (
              <li
                key={cap}
                className="rounded-md border border-ink-700/10 bg-paper-50 px-3 py-2 text-sm text-ink-700"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
