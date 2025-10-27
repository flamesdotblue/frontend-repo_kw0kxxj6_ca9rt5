import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Portfolio from './components/Portfolio';
import TestimonialsContact from './components/TestimonialsContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Hero />
      <AboutServices />
      <Portfolio />
      <TestimonialsContact />
    </div>
  );
}
