import { Code, Star } from 'lucide-react';
import { Container } from '../ui/Container';
import { contact } from '../../data/profile';

export function GitHubCta() {
  return (
    <section id="github" className="bg-paper-50 py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-ink-700/10 bg-ink-900 px-8 py-10 text-center text-paper-50 sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-paper-50/10">
              <Code className="size-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Code and repositories</h3>
              <p className="mt-1 text-sm text-ink-500">
                Explore implementation details, including the Enterprise RAG system, on GitHub.
              </p>
            </div>
          </div>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            <Star className="size-4" /> View GitHub Profile
          </a>
        </div>
      </Container>
    </section>
  );
}
