import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';
import Reveal from '../components/Reveal';

const RETENTION_TIPS = [
  {
    title: 'First 24 Hours',
    text: 'Keep lashes dry and avoid steam, saunas, or oil-based products so the adhesive cures cleanly.',
  },
  {
    title: 'Daily Lash Cleansing',
    text: 'Wash gently with a lash-safe foam cleanser and soft brush to keep follicles clean and maximise retention.',
  },
  {
    title: 'Infill Schedule',
    text: 'Book your 2-week or 3-week infill on time so sets stay full, fluffy, and healthy.',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFFCFD] text-[#161315]">
      <Navbar />

      <main>
        <section className="bg-gradient-to-b from-[#FCEEF3]/80 to-[#FFFCFD] pt-14 text-center sm:pt-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#D45D89]">
              Portfolio &amp; Retention
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#161315] sm:text-5xl">
              Lashes, Brows, Lip Blush &amp; Laser
            </h1>
          </div>
        </section>

        <GallerySection />

        {/* Retention Highlight Section */}
        <section id="retention" className="bg-[#FCEEF3]/65 py-20 scroll-mt-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <div className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#D45D89] luxury-shadow">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                  Aftercare
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium text-[#161315] sm:text-4xl">
                  Retention &amp; Care Guide
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {RETENTION_TIPS.map((tip, idx) => (
                <Reveal key={tip.title} delay={idx * 90}>
                  <div className="h-full rounded-2xl border border-[#D45D89]/20 bg-white p-6 luxury-shadow">
                    <h3 className="font-serif text-xl font-medium text-[#161315]">
                      {tip.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#161315]/75">
                      {tip.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-[#161315] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#D45D89]"
              >
                Book your infill or full set <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
