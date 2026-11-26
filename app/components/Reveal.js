'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Smooth, luxury editorial scroll-reveal wrapper using IntersectionObserver.
 * Zero heavy dependencies; respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  y = 22,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '750ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transform: visible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
        opacity: visible ? 1 : 0,
      }}
      className={`transition-[transform,opacity] will-change-[transform,opacity] ${className}`}
    >
      {children}
    </div>
  );
}
