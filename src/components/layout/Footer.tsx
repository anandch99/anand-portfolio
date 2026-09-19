import { Code, Link as LinkIcon, Mail } from 'lucide-react';
import { Container } from '../ui/Container';
import { contact, profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-ink-700/10 bg-ink-950 py-12 text-paper-100">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold tracking-tight">
            Anand<span className="text-accent-400">.</span>Chinta
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-500">{profile.title}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-ink-500 transition-colors hover:text-paper-50"
          >
            <Mail className="size-4" /> {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-ink-500 transition-colors hover:text-paper-50"
          >
            <LinkIcon className="size-4" /> LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-ink-500 transition-colors hover:text-paper-50"
          >
            <Code className="size-4" /> GitHub
          </a>
        </div>
      </Container>

      <Container className="mt-8 border-t border-ink-700/40 pt-6">
        <p className="text-xs text-ink-600">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
