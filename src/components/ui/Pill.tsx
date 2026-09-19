export function Pill({
  children,
  tone = 'neutral',
}: {
  children: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'muted';
}) {
  const tones: Record<string, string> = {
    neutral: 'border-ink-700/10 bg-ink-900/5 text-ink-700',
    accent: 'border-accent-500/25 bg-accent-500/10 text-accent-600',
    muted: 'border-paper-200 bg-paper-100 text-ink-500',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
