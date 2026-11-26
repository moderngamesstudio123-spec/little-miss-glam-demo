'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      title="Back to top"
      className="fixed bottom-20 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#D45D89]/40 bg-white/95 text-[#161315] shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D45D89] hover:bg-[#FCEEF3] hover:text-[#D45D89] md:bottom-6 md:left-6"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
