import { Mail, Link as LinkIcon, Code } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { contact, profile } from '../../data/profile';

const links = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: LinkIcon, label: 'LinkedIn', value: 'linkedin.com/in/anandkumarchinta', href: contact.linkedin },
  { icon: Code, label: 'GitHub', value: 'github.com/anandch99', href: contact.github },
];

export function Contact() {
  return (
    <section id="contact" className="bg-paper-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about backend engineering, architecture or team leadership"
          description={profile.availability}
          align="center"
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-4 rounded-xl border border-ink-700/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600">
                <link.icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-medium tracking-wide text-ink-500 uppercase">
                  {link.label}
                </span>
                <span className="block text-sm font-medium text-ink-900">{link.value}</span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
