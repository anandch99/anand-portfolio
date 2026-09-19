import { Code, Link as LinkIcon, Download, Mail } from 'lucide-react';
import { Container } from '../ui/Container';
import { contact, profile } from '../../data/profile';

export function GitHubCta() {
  return (
    <section id="work-together" className="bg-paper-50 py-20">
      <Container>
        <div className="rounded-2xl border border-ink-700/10 bg-ink-900 px-8 py-12 text-center text-paper-50">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Interested in working together?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-500">
            Explore my engineering work or download my resume for a detailed view of my
            experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumePath}`}
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-paper-50/15 px-5 py-3 text-sm font-medium text-paper-50 transition-colors hover:bg-paper-50/10"
            >
              <Code className="size-4" /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-paper-50/15 px-5 py-3 text-sm font-medium text-paper-50 transition-colors hover:bg-paper-50/10"
            >
              <LinkIcon className="size-4" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-paper-50/15 px-5 py-3 text-sm font-medium text-paper-50 transition-colors hover:bg-paper-50/10"
            >
              <Mail className="size-4" /> Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

