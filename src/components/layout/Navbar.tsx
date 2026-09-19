import { useEffect, useState } from 'react';
import { Menu, X, Link as LinkIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { navItems } from '../../data/nav';
import { contact } from '../../data/profile';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)');
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink-950/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'border-b border-paper-50/10 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-3">
        <button
          onClick={() => handleClick('home')}
          className="flex min-w-0 shrink items-center gap-2 font-mono text-sm font-semibold tracking-tight text-paper-50 sm:gap-2.5"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt=""
            className="size-7 shrink-0 rounded-full border border-paper-50/15 object-cover sm:size-8"
          />
          <span className="truncate">
            Anand<span className="text-accent-400">.</span>Chinta
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === item.id
                  ? 'text-accent-400'
                  : 'text-ink-500 hover:text-paper-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-md bg-paper-50 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-paper-100 lg:inline-flex"
        >
          <LinkIcon className="size-4" /> LinkedIn
        </a>

        <button
          className="-mr-1 inline-flex shrink-0 items-center justify-center rounded-md p-2.5 text-paper-50 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <nav className="animate-fade-in max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-paper-50/10 bg-ink-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`rounded-md px-3 py-2.5 text-left text-sm font-medium ${
                  active === item.id ? 'text-accent-400' : 'text-ink-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-paper-50 px-3 py-2.5 text-sm font-medium text-ink-950"
            >
              <LinkIcon className="size-4" /> LinkedIn
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
