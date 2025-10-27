import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'Data-rich analytics with glassmorphism and real-time charts.',
    tags: ['React', 'Tailwind', 'D3'],
  },
  {
    title: 'SaaS Marketing',
    desc: 'Conversion-focused site with A/B tested hero and pricing.',
    tags: ['SEO', 'Next', 'Perf'],
  },
  {
    title: 'E-commerce UI',
    desc: 'Accessible product flows and blazing-fast checkout.',
    tags: ['Accessibility', 'UX', 'Stripe'],
  },
  {
    title: 'Health Platform',
    desc: 'HIPAA-aware patient portal with responsive charts.',
    tags: ['React', 'FastAPI', 'Cloud'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">Selected Work</h3>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
            A snapshot of products we helped launch. Each engagement pairs design systems with robust engineering.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:inline-flex"
        >
          Get a quote
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, i) => (
          <article
            key={i}
            className="group animate-in fade-in slide-in-from-bottom-4 overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-white to-white/60 p-5 shadow-sm backdrop-blur transition hover:shadow-md dark:border-zinc-700/60 dark:from-zinc-900 dark:to-zinc-900/60"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.4),transparent_35%)]" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-white">{p.title}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
              </div>
              <button
                aria-label={`Open ${p.title}`}
                className="opacity-70 transition hover:opacity-100"
              >
                <ExternalLink className="h-4 w-4 text-zinc-500 dark:text-zinc-300" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
