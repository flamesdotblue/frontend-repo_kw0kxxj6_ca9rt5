import { Star, Quote, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Elena Rodriguez',
    role: 'Product Lead, Finexa',
    quote:
      'Aspero elevated our design system and shipped a performant frontend that our team loves to work with.',
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, Spheric',
    quote:
      'They balanced speed and rigor. Accessibility and performance were first-class throughout the build.',
  },
  {
    name: 'Priya Nair',
    role: 'Ops, CareWell',
    quote:
      'Clear communication, thoughtful architecture, and pixel-perfect execution. Highly recommend!',
  },
];

export default function TestimonialsContact() {
  return (
    <section className="border-t border-zinc-200/60 bg-zinc-50/50 py-20 dark:border-zinc-800/60 dark:bg-zinc-950/40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </section>
  );
}

function Testimonials() {
  return (
    <div aria-labelledby="testimonials-title">
      <h3 id="testimonials-title" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        What clients say
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                <Quote className="h-4 w-4" />
              </div>
              <div>
                <figcaption className="text-sm font-semibold text-zinc-900 dark:text-white">{t.name}</figcaption>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">{t.role}</div>
              </div>
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{t.quote}</blockquote>
            <div className="mt-3 flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div id="contact" aria-labelledby="contact-title">
      <h3 id="contact-title" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        Let’s build something great
      </h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Tell us about your goals. We typically respond within one business day.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Name" id="name">
            <input
              id="name"
              type="text"
              required
              value={state.name}
              onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
              className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
              placeholder="Jane Doe"
            />
          </Field>
          <Field label="Email" id="email">
            <input
              id="email"
              type="email"
              required
              value={state.email}
              onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
              className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
              placeholder="jane@company.com"
            />
          </Field>
        </div>
        <Field label="Message" id="message">
          <textarea
            id="message"
            required
            rows={5}
            value={state.message}
            onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
            placeholder="A short overview of your project and timeline"
          />
        </Field>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
        >
          <Send className="h-4 w-4" />
          {sent ? 'Sent! We will be in touch.' : 'Send message'}
        </button>

        <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-3">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hello@aspero.studio</span></div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+1 (555) 012-3456</span></div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Remote • Worldwide</span></div>
        </div>
      </form>
    </div>
  );
}

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="block">
      <div className="mb-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">{label}</div>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200/60 py-8 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Aspero Web Services. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">About</a>
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-zinc-900 dark:hover:text-white">Work</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
