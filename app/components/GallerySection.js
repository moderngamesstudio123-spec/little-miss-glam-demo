'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import StudioPhoto from './StudioPhoto';
import Reveal from './Reveal';

const LIP_BLUSH_SLIDES = [
  {
    filename: 'lip-blush-1.jpg',
    src: '/images/lip-blush-1.jpg',
    alt: 'Lip blush result 1 by Jasmin at Little Miss Glam, Manchester',
    label: 'Lip Blush — Look 1',
  },
  {
    filename: 'lip-blush-2.jpg',
    src: '/images/lip-blush-2.jpg',
    alt: 'Lip blush result 2 by Jasmin at Little Miss Glam, Manchester',
    label: 'Lip Blush — Look 2',
  },
  {
    filename: 'lip-blush-3.jpg',
    src: '/images/lip-blush-3.jpg',
    alt: 'Lip blush result 3 by Jasmin at Little Miss Glam, Manchester',
    label: 'Lip Blush — Look 3',
  },
  {
    filename: 'lip-blush-4.jpg',
    src: '/images/lip-blush-4.jpg',
    alt: 'Lip blush result 4 by Jasmin at Little Miss Glam, Manchester',
    label: 'Lip Blush — Look 4',
  },
];

const GALLERY_ITEMS = [
  {
    filename: 'gallery-lashes-1.jpg',
    src: '/images/gallery-lashes-1.jpg',
    alt: 'Russian volume lashes by Jasmin, Manchester',
    label: 'Russian volume lashes',
    category: 'Lashes',
    mediaType: 'image',
  },
  {
    filename: 'gallery-lashes-2.jpg',
    src: '/images/gallery-lashes-2.jpg',
    alt: 'Classic and hybrid lash extensions by Jasmin, Manchester',
    label: 'Classic & hybrid lashes',
    category: 'Lashes',
    mediaType: 'image',
  },
  {
    filename: 'gallery-brows.jpg',
    src: '/images/gallery-brows.jpg',
    alt: 'Shaped and tinted brows by Jasmin, Manchester',
    label: 'Brows',
    category: 'Brows',
    mediaType: 'image',
  },
  {
    filename: 'gallery-laser.jpg',
    src: '/images/gallery-laser.jpg',
    alt: 'Laser hair removal studio and results by Jasmin, Manchester',
    label: 'Laser treatment',
    category: 'Laser',
    mediaType: 'image',
  },
  {
    filename: 'gallery-jasmin.jpg',
    src: '/images/gallery-jasmin.jpg',
    alt: 'Jasmin at work at Little Miss Glam, Manchester',
    label: 'Jasmin at work',
    category: 'Studio',
    mediaType: 'image',
  },
];

const REEL_ITEMS = [
  {
    filename: 'reel-1.mp4',
    src: '/images/reel-1.mp4',
    alt: 'Little Miss Glam lash transformation reel 1',
    label: 'Lash Transformation Reel',
    category: 'Reels',
    mediaType: 'video',
  },
  {
    filename: 'reel-2.mp4',
    src: '/images/reel-2.mp4',
    alt: 'Little Miss Glam lip blush & brows reel 2',
    label: 'Lip Blush & Brows Reel',
    category: 'Reels',
    mediaType: 'video',
  },
  {
    filename: 'reel-3.mp4',
    src: '/images/reel-3.mp4',
    alt: 'Little Miss Glam studio work reel 3',
    label: 'Studio Highlights Reel',
    category: 'Reels',
    mediaType: 'video',
  },
];

const FILTERS = ['All', 'Lashes', 'Lip blush', 'Brows', 'Laser'];

function LipBlushSlider({ onOpenSlide }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [missingMap, setMissingMap] = useState({});

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % LIP_BLUSH_SLIDES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [paused]);

  const current = LIP_BLUSH_SLIDES[slideIdx];
  const isMissing = Boolean(missingMap[current.filename]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group relative overflow-hidden rounded-2xl border border-[#D45D89]/25 bg-[#FCEEF3]/65 luxury-shadow aspect-[4/5]"
    >
      {/* Slides */}
      {LIP_BLUSH_SLIDES.map((slide, idx) => {
        const active = idx === slideIdx;
        const slideMissing = Boolean(missingMap[slide.filename]);
        return (
          <div
            key={slide.filename}
            onClick={() => {
              if (!slideMissing && onOpenSlide) onOpenSlide(slide);
            }}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            } ${!slideMissing ? 'cursor-pointer' : ''}`}
          >
            {!slideMissing ? (
              <img
                src={slide.src}
                alt={slide.alt}
                onError={() =>
                  setMissingMap((prev) => ({ ...prev, [slide.filename]: true }))
                }
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FFFCFD] via-[#FCEEF3] to-[#F29BB8]/35 p-4 text-center">
                <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-[#D45D89]/25" />
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#D45D89]/30 bg-white text-[#D45D89]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="font-serif text-sm font-medium text-[#161315] sm:text-base">
                  {slide.label}
                </p>
                <p className="mt-1 text-[11px] text-[#161315]/65">
                  Auto-slider ({idx + 1}/4)
                </p>
                <span className="mt-2.5 rounded-full border border-[#D45D89]/25 bg-white/85 px-2.5 py-0.5 font-mono text-[9px] text-[#D45D89]">
                  {slide.filename}
                </span>
              </div>
            )}
          </div>
        );
      })}

      {/* Badge */}
      <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-full bg-[#161315]/75 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
        Lip Blush · {slideIdx + 1}/4
      </span>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous lip blush photo"
        onClick={(e) => {
          e.stopPropagation();
          setSlideIdx((slideIdx - 1 + LIP_BLUSH_SLIDES.length) % LIP_BLUSH_SLIDES.length);
        }}
        className="absolute left-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#161315] shadow-sm backdrop-blur-sm transition hover:bg-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next lip blush photo"
        onClick={(e) => {
          e.stopPropagation();
          setSlideIdx((slideIdx + 1) % LIP_BLUSH_SLIDES.length);
        }}
        className="absolute right-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#161315] shadow-sm backdrop-blur-sm transition hover:bg-white"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
        {LIP_BLUSH_SLIDES.map((s, i) => (
          <button
            key={s.filename}
            type="button"
            aria-label={`Show lip blush slide ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              setSlideIdx(i);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === slideIdx
                ? 'w-5 bg-[#D45D89]'
                : isMissing
                ? 'w-1.5 bg-[#161315]/25'
                : 'w-1.5 bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const visibleItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const showLipSlider = activeFilter === 'All' || activeFilter === 'Lip blush';

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxItem(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxItem]);

  return (
    <section id="gallery" className="bg-[#FFFCFD] py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
              Portfolio
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#161315] sm:text-4xl">
              Real work by Jasmin
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#161315]/70 sm:text-base">
              Close-up results across lashes, lip blush, brows and laser.
            </p>

            {/* Editorial Category Filter Pills */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition ${
                      isActive
                        ? 'bg-[#161315] text-white shadow-sm'
                        : 'border border-[#D45D89]/30 bg-white text-[#161315]/75 hover:border-[#D45D89] hover:text-[#D45D89]'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Uniform Photo Grid + Lip Blush 4-Image Auto-Slider */}
        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-3">
          {showLipSlider && (
            <Reveal delay={0}>
              <LipBlushSlider onOpenSlide={(slide) => setLightboxItem({ ...slide, category: 'Lip blush', mediaType: 'image' })} />
            </Reveal>
          )}

          {visibleItems.map((item, idx) => (
            <Reveal key={item.filename} delay={(idx + 1) * 70}>
              <StudioPhoto
                src={item.src}
                alt={item.alt}
                label={item.label}
                filename={item.filename}
                mediaType={item.mediaType}
                aspectClass="aspect-[4/5]"
                onOpen={() => setLightboxItem(item)}
              />
            </Reveal>
          ))}
        </div>

        {/* 9:16 Instagram Reels Showcase (3 Videos) */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                In Motion · 9:16 Reels
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium text-[#161315] sm:text-3xl">
                Watch the transformations
              </h3>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {REEL_ITEMS.map((reel, idx) => (
              <Reveal key={reel.filename} delay={idx * 90}>
                <div className="mx-auto max-w-[300px] sm:max-w-none">
                  <StudioPhoto
                    src={reel.src}
                    alt={reel.alt}
                    label={reel.label}
                    filename={reel.filename}
                    mediaType="video"
                    aspectClass="aspect-[9/16]"
                    onOpen={() => setLightboxItem(reel)}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#161315]/85 p-4 backdrop-blur-md"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.label}
        >
          <button
            type="button"
            onClick={() => setLightboxItem(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[88vh] w-full max-w-md overflow-hidden rounded-3xl bg-[#FFFCFD] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.mediaType === 'video' ? (
              <video
                src={lightboxItem.src}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[76vh] w-full object-cover"
              />
            ) : (
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="max-h-[76vh] w-full object-cover"
              />
            )}
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="font-serif text-lg font-medium text-[#161315]">
                  {lightboxItem.label}
                </p>
                <p className="text-xs text-[#161315]/65">Little Miss Glam · Manchester</p>
              </div>
              <span className="rounded-full bg-[#FCEEF3] px-3 py-1 text-xs font-medium text-[#D45D89]">
                {lightboxItem.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
