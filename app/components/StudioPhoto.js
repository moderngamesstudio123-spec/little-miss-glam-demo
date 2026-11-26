'use client';

import { useState } from 'react';
import { Sparkles, Play, Expand } from 'lucide-react';

/**
 * Renders Jasmin's real Instagram photo or .mp4 video reel from /public/images/.
 * Falls back to a refined luxury editorial frame (never stock photos) until
 * the real media file is added.
 */
export default function StudioPhoto({
  src,
  alt,
  label,
  filename,
  mediaType = 'image',
  className = '',
  aspectClass = 'aspect-[4/5]',
  priority = false,
  onOpen,
}) {
  const [missing, setMissing] = useState(false);
  const isInteractive = Boolean(onOpen) && !missing;

  return (
    <div
      onClick={isInteractive ? onOpen : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen();
              }
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl bg-[#F6E3E0]/55 border border-[#B76E79]/20 luxury-shadow ${
        isInteractive ? 'cursor-pointer' : ''
      } ${aspectClass} ${className}`}
    >
      {!missing ? (
        <>
          {mediaType === 'video' ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setMissing(true)}
              aria-label={alt}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              onError={() => setMissing(true)}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}

          {/* Subtle luxury hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {mediaType === 'video' && (
            <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#2B2B2B]/65 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
              <Play className="h-2.5 w-2.5 fill-current" />
              Reel
            </span>
          )}

          {isInteractive && (
            <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between opacity-0 transition-all duration-300 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2B2B2B] backdrop-blur-sm">
                {label}
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#2B2B2B] backdrop-blur-sm">
                <Expand className="h-3.5 w-3.5" />
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FDFBFA] via-[#F6E3E0]/80 to-[#EED2CE]/70 p-3.5 text-center sm:p-6">
          <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-[#B76E79]/25 sm:inset-3" />
          <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#B76E79]/30 bg-white/80 text-[#B76E79] transition-transform duration-500 group-hover:scale-110 sm:mb-3 sm:h-11 sm:w-11">
            {mediaType === 'video' ? (
              <Play className="h-4 w-4 stroke-[1.5] sm:h-5 sm:w-5" />
            ) : (
              <Sparkles className="h-4 w-4 stroke-[1.5] sm:h-5 sm:w-5" />
            )}
          </div>
          <p className="font-serif text-sm font-medium text-[#2B2B2B] sm:text-base">
            {label}
          </p>
          <p className="mt-1 max-w-[200px] text-[11px] leading-snug text-[#665C5E] sm:mt-1.5 sm:text-xs sm:leading-relaxed">
            Jasmin&apos;s real Instagram {mediaType === 'video' ? 'reel' : 'photo'} goes here
          </p>
          <span className="mt-2.5 max-w-full truncate rounded-full border border-[#B76E79]/25 bg-white/75 px-2.5 py-0.5 font-mono text-[9px] text-[#9A5560] sm:mt-3 sm:px-3 sm:py-1 sm:text-[10px]">
            {filename}
          </span>
        </div>
      )}
    </div>
  );
}
