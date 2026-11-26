'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  Instagram,
  ArrowRight,
  MapPin,
  GraduationCap,
  FileCheck2,
  Eye,
  MessageCircleHeart,
  BadgePoundSterling,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calligraphy3D from './components/Calligraphy3D';
import StudioPhoto from './components/StudioPhoto';
import BookingSection from './components/BookingSection';
import FaqAccordion from './components/FaqAccordion';
import Reveal from './components/Reveal';

const SERVICES = [
  {
    num: '01',
    name: 'Lashes',
    description: 'Classic, hybrid and Russian volume lashes, tailored to your eye shape.',
    price: 'from £50',
  },
  {
    num: '02',
    name: 'Lip blush',
    description: 'Soft, natural colour that defines your lips — no lipstick needed.',
    price: 'from £220',
  },
  {
    num: '03',
    name: 'Brows',
    description: 'Shaped, tinted and finished to frame your face.',
    price: 'from £8',
  },
  {
    num: '04',
    name: 'Laser',
    description: 'Smooth, long-lasting hair removal with aftercare included.',
    price: 'from £—',
  },
];

const HIGHLIGHTS = [
  { label: 'Pricelist', href: '/services', icon: BadgePoundSterling },
  { label: 'Training', href: '/training', icon: GraduationCap },
  { label: 'Retention', href: '/gallery#retention', icon: Sparkles },
  { label: 'Policy', href: '/book#policy', icon: FileCheck2 },
  { label: 'Lashes', href: '/gallery', icon: Eye },
  { label: 'Reviews', href: '/#reviews', icon: MessageCircleHeart },
];

const TRUST_POINTS = [
  { icon: UserCheck, text: 'One-to-one appointments' },
  { icon: ShieldCheck, text: 'Clean, hygienic tools every time' },
  { icon: HeartHandshake, text: 'Aftercare guidance included' },
];

const RIBBON_ITEMS = [
  'Lashes',
  'Lip Blush',
  'Brows',
  'Laser',
  'Beginner Training',
  'Masterclasses',
  'Manchester Studio',
  '@littlemiss.glam',
];

export default function HomePage() {
  const [selectedTreatment, setSelectedTreatment] = useState('Lashes');

  const handleSelectTreatment = (treatmentName) => {
    setSelectedTreatment(treatmentName);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFCFD] text-[#161315]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FCEEF3]/80 via-[#FFFCFD] to-[#FFFCFD] pb-14 pt-10 sm:pb-20 sm:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#F29BB8]/35 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="animate-hero-1 inline-flex items-center gap-2 rounded-full border border-[#D45D89]/30 bg-white/90 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#D45D89]">
                <MapPin className="h-3.5 w-3.5" />
                Manchester · Artist &amp; Educator
              </div>

              <h1 className="animate-hero-2 mt-6 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#161315] sm:text-5xl lg:text-[3.35rem]">
                Lashes, lip blush, brows &amp; laser — in Manchester
              </h1>

              <p className="animate-hero-3 mt-5 max-w-xl text-base leading-relaxed text-[#161315]/75 sm:text-lg">
                Beautiful, natural results by Jasmin at Little Miss Glam. See the work, pick your treatment, and book in under a minute.
              </p>

              <div className="animate-hero-4 mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#161315] px-8 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D45D89]"
                >
                  Book now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-[#D45D89]/40 bg-white px-7 py-4 text-sm font-medium text-[#161315] transition hover:border-[#D45D89] hover:bg-[#FCEEF3]"
                >
                  View full price list
                </Link>
              </div>
            </div>

            <div className="animate-hero-media lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="pointer-events-none absolute -bottom-3 -left-3 -right-3 -top-3 rounded-[2rem] border border-[#D45D89]/25" />
                <StudioPhoto
                  src="/images/hero-lashes.jpg"
                  alt="Russian volume lashes close-up by Jasmin at Little Miss Glam, Manchester"
                  label="Signature Lash Close-up"
                  filename="hero-lashes.jpg"
                  aspectClass="aspect-[4/4.6]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 3D Animated Calligraphy Crest */}
          <div className="mx-auto mt-14 max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Calligraphy3D
                scriptText="Little Miss Glam"
                subtitle="Luxury Beauty Treatments · Beginner Training · Masterclasses"
              />
            </Reveal>
          </div>
        </section>

        {/* Luxury Editorial Ribbon */}
        <div className="overflow-hidden border-y border-[#D45D89]/20 bg-[#161315] py-3.5 text-[#FCEEF3]">
          <div className="animate-marquee items-center">
            {[...RIBBON_ITEMS, ...RIBBON_ITEMS].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="mx-6 inline-flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.26em]"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-[#F29BB8]" />
              </span>
            ))}
          </div>
        </div>

        {/* Instagram Highlights Navigation Strip */}
        <section className="bg-white py-12 border-b border-[#D45D89]/15">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D45D89]/40 bg-[#FCEEF3] p-1 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#D45D89] group-hover:shadow-md">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#161315] transition-colors group-hover:text-[#D45D89]">
                        <Icon className="h-5 w-5 stroke-[1.6]" />
                      </div>
                    </div>
                    <span className="mt-2.5 text-xs font-medium tracking-wide text-[#161315]/80 group-hover:text-[#D45D89]">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. SERVICES */}
        <section id="services" className="bg-[#FCEEF3]/65 py-20 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                    Treatments
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#161315] sm:text-4xl">
                    Curated beauty services
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D45D89] underline decoration-[#F29BB8] underline-offset-4 hover:text-[#161315]"
                >
                  See full price list
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, idx) => (
                <Reveal key={service.name} delay={idx * 80} className="flex">
                  <article className="group flex w-full flex-col justify-between rounded-2xl border border-[#D45D89]/20 bg-white p-6 luxury-shadow luxury-shadow-hover">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xs italic text-[#D45D89]">
                          {service.num}
                        </span>
                        <span className="rounded-full bg-[#FCEEF3] px-3 py-1 text-xs font-medium text-[#D45D89]">
                          {service.price}
                        </span>
                      </div>
                      <h3 className="mt-5 font-serif text-2xl font-medium text-[#161315]">
                        {service.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#161315]/70">
                        {service.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectTreatment(service.name)}
                      className="mt-6 inline-flex items-center gap-1.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-[#D45D89] transition hover:text-[#161315]"
                    >
                      Book {service.name.toLowerCase()}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY JASMIN / ABOUT */}
        <section id="about" className="bg-[#FFFCFD] py-20 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full border-2 border-[#D45D89]/40 bg-[#FCEEF3] p-1 luxury-shadow">
                <img
                  src="/images/jasmin-profile.jpg"
                  alt="Jasmin at Little Miss Glam, Manchester"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                Artist &amp; Educator
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#161315] sm:text-4xl">
                Your face, in safe hands
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#161315]/75 sm:text-lg">
                I&apos;m Jasmin, a lash and beauty artist in Manchester. Every treatment is done one-to-one, with clean tools, honest advice, and aftercare you can actually follow. Have a look at my work below — if you like what you see, book in.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {TRUST_POINTS.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <Reveal key={point.text} delay={idx * 90}>
                    <div className="flex h-full flex-col items-center rounded-2xl border border-[#D45D89]/20 bg-white px-5 py-6 luxury-shadow luxury-shadow-hover">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FCEEF3] text-[#D45D89]">
                        <Icon className="h-5 w-5 stroke-[1.6]" />
                      </div>
                      <p className="mt-3.5 text-sm font-medium text-[#161315]">
                        {point.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. REVIEWS */}
        <section id="reviews" className="bg-[#FFFCFD] pb-20 sm:pb-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <div className="rounded-3xl border border-[#D45D89]/25 bg-white p-8 text-center sm:p-12 luxury-shadow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FCEEF3] text-[#D45D89]">
                  <Sparkles className="h-5 w-5 stroke-[1.6]" />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                  Client Love
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium text-[#161315] sm:text-3xl">
                  See what my clients say
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#161315]/75 sm:text-base">
                  See what my clients say — read real comments on my Instagram{' '}
                  <span className="font-medium text-[#D45D89]">@littlemiss.glam</span>
                </p>
                <a
                  href="https://www.instagram.com/littlemiss.glam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D45D89]/40 bg-[#FFFCFD] px-6 py-3 text-sm font-medium text-[#D45D89] transition hover:-translate-y-0.5 hover:bg-[#FCEEF3] hover:text-[#161315]"
                >
                  <Instagram className="h-4 w-4" />
                  Visit @littlemiss.glam on Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. BOOKING */}
        <BookingSection preselectedTreatment={selectedTreatment} />

        {/* 6. FAQ */}
        <section id="faq" className="bg-[#FFFCFD] py-20 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                  Questions
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#161315] sm:text-4xl">
                  Frequently asked questions
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10">
                <FaqAccordion />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
