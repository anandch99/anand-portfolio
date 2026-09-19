import { ArrowRight, ArrowDown } from 'lucide-react';

export function FlowDiagram({
  steps,
  direction = 'horizontal',
}: {
  steps: string[];
  direction?: 'horizontal' | 'vertical';
}) {
  if (direction === 'vertical') {
    return (
      <div className="flex flex-col items-stretch gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-full rounded-lg border border-ink-700/10 bg-white px-4 py-3 text-center text-sm font-medium text-ink-800 shadow-sm">
              {step}
            </div>
            {i < steps.length - 1 && <ArrowDown className="my-1 size-4 shrink-0 text-ink-500/50" />}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="scrollbar-thin flex items-stretch gap-2 overflow-x-auto pb-2">
      {steps.map((step, i) => (
        <div key={step} className="flex shrink-0 items-center gap-2">
          <div className="flex min-w-[120px] items-center justify-center rounded-lg border border-ink-700/10 bg-white px-4 py-3 text-center text-sm font-medium text-ink-800 shadow-sm">
            {step}
          </div>
          {i < steps.length - 1 && <ArrowRight className="size-4 shrink-0 text-ink-500/50" />}
        </div>
      ))}
    </div>
  );
}
