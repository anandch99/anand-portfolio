import { Container } from '../ui/Container';
import { leadershipPoints } from '../../data/leadership';

export function Leadership() {
  return (
    <section id="leadership" className="bg-ink-950 py-24 text-paper-50">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent-400 uppercase">
            Engineering Leadership
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hands-on technical leader, not a people manager
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            I lead by staying close to the code and the architecture—reviewing designs, mentoring
            engineers, and owning delivery outcomes for the team.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {leadershipPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-paper-50/15 bg-paper-50/5 px-4 py-2 text-sm font-medium text-paper-100"
            >
              {point}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
