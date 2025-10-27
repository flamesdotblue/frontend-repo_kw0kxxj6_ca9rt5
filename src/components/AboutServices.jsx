import { Code, Palette, Shield, Rocket } from 'lucide-react';

export default function AboutServices() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">About Aspero</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          We are a design-led web agency crafting delightful digital products. Our team blends strategy, aesthetics, and engineering discipline to ship results.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Years" value="4+" />
        <Stat label="Projects" value="30+" />
        <Stat label="Avg. NPS" value="9.4" />
        <Stat label="Uptime" value="99.9%" />
      </div>

      <div id="services" className="mt-16">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">Our Services</h3>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
          From idea to launch, we cover the full stack with accessibility, performance, and maintainability at the core.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<Palette className="h-5 w-5" />}
            title="Brand & UI"
            desc="Design systems, component libraries, and visual identities with scalable tokens."
          />
          <ServiceCard
            icon={<Code className="h-5 w-5" />}
            title="Web Apps"
            desc="React frontends, FastAPI backends, and cloud-native architectures."
          />
          <ServiceCard
            icon={<Shield className="h-5 w-5" />}
            title="Accessibility"
            desc="WCAG-compliant experiences using Radix primitives and semantic patterns."
          />
          <ServiceCard
            icon={<Rocket className="h-5 w-5" />}
            title="Performance"
            desc="Core Web Vitals-first builds with caching, image optimizations, and CI."
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="animate-in fade-in zoom-in-95 rounded-2xl border border-zinc-200/60 bg-white/60 p-5 text-center shadow-sm backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/40">
      <div className="text-3xl font-bold text-zinc-900 dark:text-white">{value}</div>
      <div className="mt-1 text-sm font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-indigo-500 dark:border-zinc-700/60 dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-sm">
          {icon}
        </div>
        <h4 className="text-base font-semibold text-zinc-900 dark:text-white">{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{desc}</p>
    </div>
  );
}
