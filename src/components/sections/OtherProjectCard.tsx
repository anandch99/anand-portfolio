import { Pill } from '../ui/Pill';
import type { Project } from '../../data/projects';

export function OtherProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ink-700/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h4 className="text-lg font-semibold text-ink-900">{project.name}</h4>
      <p className="mt-1 text-sm font-medium text-accent-600">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technology.map((tech) => (
          <Pill key={tech} tone="muted">
            {tech}
          </Pill>
        ))}
      </div>

      {project.capabilities && (
        <ul className="mt-4 grid grid-cols-1 gap-1 border-t border-ink-700/10 pt-4 text-xs text-ink-500">
          {project.capabilities.slice(0, 5).map((cap) => (
            <li key={cap}>• {cap}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
