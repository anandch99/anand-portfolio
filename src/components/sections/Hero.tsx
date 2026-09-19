import { ArrowRight, Download, Code } from 'lucide-react';
import { Container } from '../ui/Container';
import { profile, contact } from '../../data/profile';

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper-50 pt-32 pb-24 text-ink-900 sm:pt-40 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #4a6fa5 1px, transparent 1px), linear-gradient(to bottom, #4a6fa5 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] right-[-10%] size-[500px] rounded-full bg-accent-500/10 blur-[140px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-6 font-mono text-xs font-medium tracking-[0.25em] text-accent-600 uppercase">
            {profile.title}
          </p>
          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {profile.heroHeading}
          </h1>
          <p className="mt-6 text-lg font-medium text-ink-700 sm:text-xl">
            {profile.heroSubheading}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            {profile.heroSupporting}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600"
            >
              View Projects <ArrowRight className="size-4" />
            </button>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumePath}`}
              download
              className="inline-flex items-center gap-2 rounded-md border border-ink-700/15 px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-700/15 px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              <Code className="size-4" /> GitHub
            </a>
          </div>

          <p className="mt-10 border-l-2 border-accent-500/60 pl-4 text-sm text-ink-500 italic">
            {profile.location} · {profile.availability}
          </p>
        </div>

          <div className="animate-fade-in order-first flex justify-center lg:order-last lg:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl border border-accent-500/20"
              />
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Portrait of Anand Kumar Chinta"
                className="relative size-52 rounded-2xl border border-ink-700/10 object-cover shadow-xl sm:size-64 lg:size-72"
                width={288}
                height={288}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
