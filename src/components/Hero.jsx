import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Moon, Sun, ArrowRight } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize from system or stored preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 bg-white/60 px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-zinc-700/60 dark:bg-zinc-800/60 dark:text-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle color theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} mode</span>
    </button>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#" className="group inline-flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
            <Rocket size={18} />
          </span>
          <span className="text-lg tracking-tight">Aspero Web Services</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#about" className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">About</a>
          <a href="#services" className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Services</a>
          <a href="#portfolio" className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Work</a>
          <a href="#contact" className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Contact</a>
          <ThemeToggle />
        </nav>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 pt-6 sm:px-6 md:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="animate-in fade-in slide-in-from-left-8 duration-700">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            30+ projects shipped in 4 years
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            Modern web experiences that convert and scale.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            We design and build accessible, high-performance websites and apps backed by a solid design system and a robust engineering toolkit.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-zinc-700 dark:focus:ring-offset-zinc-900"
            >
              Start a project
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 dark:focus:ring-indigo-600 dark:focus:ring-offset-zinc-900"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="h-[380px] w-full rounded-2xl border border-zinc-200/60 bg-white/30 shadow-inner backdrop-blur md:h-[520px] dark:border-zinc-700/60 dark:bg-zinc-900/30">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* soft light overlay for readability; non-blocking */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-zinc-900/40" />
        </div>
      </div>

      {/* background aesthetics */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/40 blur-[100px] dark:bg-fuchsia-700/30" />
        <div className="absolute right-[10%] bottom-[-10%] h-72 w-72 rounded-full bg-indigo-500/30 blur-[100px] dark:bg-indigo-700/30" />
      </div>
    </section>
  );
}
