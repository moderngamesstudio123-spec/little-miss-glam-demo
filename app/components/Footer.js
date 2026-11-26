import Link from 'next/link';
import { Instagram, ArrowRight } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import StudioConcierge from './StudioConcierge';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#161315] pb-24 pt-14 text-[#FFFCFD] md:pb-14">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="font-script neon-calligraphy text-4xl text-[#F29BB8]">
            Little Miss Glam
          </p>
          <p className="mt-2 text-sm text-[#FFFCFD]/80">
            Little Miss Glam — Lashes · Lip blush · Brows · Laser · Training, Manchester
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-[#FFFCFD]/70">
            <Link href="/" className="transition hover:text-[#F29BB8]">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-[#F29BB8]">
              Services &amp; Prices
            </Link>
            <Link href="/training" className="transition hover:text-[#F29BB8]">
              Training
            </Link>
            <Link href="/gallery" className="transition hover:text-[#F29BB8]">
              Gallery
            </Link>
            <Link href="/book" className="transition hover:text-[#F29BB8]">
              Book &amp; Policy
            </Link>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/littlemiss.glam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#F29BB8]/45 px-5 py-2.5 text-sm text-[#FCEEF3] transition hover:bg-[#D45D89]/25"
            >
              <Instagram className="h-4 w-4" />
              @littlemiss.glam
            </a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs tracking-wide text-[#FFFCFD]/60">
              Demo preview made by Nexora Web Labs — not a live website yet
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top + 24/7 Studio Concierge */}
      <ScrollToTop />
      <StudioConcierge />

      {/* Mobile Sticky Book Now Bar */}
      <div className="fixed inset-x-4 bottom-4 z-30 md:hidden">
        <Link
          href="/book"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D45D89] py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-[#161315]/30 transition active:scale-[0.98]"
        >
          Book now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
