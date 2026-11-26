'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services & Prices' },
  { href: '/training', label: 'Training' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/book', label: 'Book & Policy' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D45D89]/20 bg-[#FFFCFD]/92 backdrop-blur-md">
      {/* Subtle Luxury Top Bar */}
      <div className="bg-[#161315] px-4 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#FCEEF3]">
        Manchester · One-to-One Studio · Accredited Training ·{' '}
        <a
          href="https://www.instagram.com/littlemiss.glam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F29BB8] underline decoration-[#F29BB8]/40 underline-offset-2 hover:text-white"
        >
          @littlemiss.glam
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl font-semibold tracking-tight text-[#161315] transition-colors group-hover:text-[#D45D89] sm:text-2xl">
            Little Miss Glam
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D45D89]">
            Manchester · Artist &amp; Educator
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? 'font-medium text-[#D45D89]'
                    : 'text-[#161315]/75 hover:text-[#D45D89]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#D45D89]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/book"
            className="hidden items-center gap-1.5 rounded-full bg-[#161315] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D45D89] sm:inline-flex"
          >
            Book now
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D45D89]/30 bg-white text-[#161315] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-[#D45D89]/15 bg-[#FFFCFD] px-5 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? 'bg-[#FCEEF3] font-medium text-[#D45D89]'
                      : 'text-[#161315]/80 hover:bg-[#FCEEF3]/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
