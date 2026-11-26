'use client';

import { useState } from 'react';

/**
 * Interactive 3D animated calligraphy & butterfly crest inspired by
 * Little Miss Glam's signature Price List branding.
 */
export default function Calligraphy3D({
  scriptText = 'Little Miss Glam',
  subtitle = 'Artist & Educator · Manchester',
  compact = false,
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 14, y: px * 16 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative select-none overflow-hidden rounded-3xl border border-[#D45D89]/30 bg-gradient-to-br from-[#F29BB8]/35 via-[#FCEEF3] to-white luxury-shadow ${
        compact ? 'px-6 py-8 sm:px-10 sm:py-10' : 'px-6 py-12 sm:px-12 sm:py-14'
      }`}
      style={{ perspective: '950px' }}
    >
      {/* Ambient rose shimmer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-[#F29BB8]/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-[#D45D89]/20 blur-3xl"
      />

      <div
        className="relative flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Butterfly Emblem matching Little Miss Glam logo */}
        <div
          className="animate-butterfly mb-2 text-[#161315]"
          style={{ transform: 'translateZ(26px)' }}
        >
          <svg
            viewBox="0 0 120 64"
            className="h-11 w-20 sm:h-12 sm:w-24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.35"
            aria-hidden="true"
          >
            <path d="M59 30 C44 6, 12 4, 14 26 C15 40, 36 42, 58 34" />
            <path d="M61 30 C76 6, 108 4, 106 26 C105 40, 84 42, 62 34" />
            <path d="M58 35 C42 40, 26 56, 38 60 C49 63, 56 49, 59 38" />
            <path d="M62 35 C78 40, 94 56, 82 60 C71 63, 64 49, 61 38" />
            <path d="M60 18 L60 44" strokeLinecap="round" />
            <path d="M60 18 C57 12, 53 10, 50 11" strokeLinecap="round" />
            <path d="M60 18 C63 12, 67 10, 70 11" strokeLinecap="round" />
          </svg>
        </div>

        {/* 3D Layered Script Calligraphy */}
        <div style={{ transform: 'translateZ(42px)' }}>
          <p className="font-script neon-calligraphy text-5xl leading-none text-[#D45D89] sm:text-6xl md:text-7xl">
            {scriptText}
          </p>
        </div>

        <p
          className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#161315]/75"
          style={{ transform: 'translateZ(18px)' }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
