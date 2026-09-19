import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FeaturedProject } from './FeaturedProject';
import { OtherProjectCard } from './OtherProjectCard';
import { eopProject, ragProject, otherProjects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="bg-paper-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Engineering work that demonstrates architecture, not just features"
          description="Two flagship systems—an observability platform and an AI-powered document search engine—followed by enterprise applications delivered in production."
        />

        <div className="space-y-10">
          <FeaturedProject project={eopProject} />
          <FeaturedProject project={ragProject} reverse />
        </div>

        <div className="mt-16">
          <p className="mb-6 font-mono text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
            Additional Enterprise Projects
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <OtherProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
