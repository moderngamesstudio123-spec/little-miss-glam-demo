'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How long do lash extensions last?',
    a: 'Usually 2–3 weeks with good aftercare. A refill keeps them looking full.',
  },
  {
    q: 'Does lip blush hurt?',
    a: "Most clients say it feels like light scratching. Numbing cream is used, and I'll talk you through it.",
  },
  {
    q: 'How do I book?',
    a: 'Pick a treatment above and request a time, or DM me on Instagram — whichever is easier.',
  },
  {
    q: 'Where are you based?',
    a: 'Manchester. Exact location and directions are shared when your booking is confirmed.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-[#B76E79]/20 rounded-3xl border border-[#B76E79]/20 bg-white px-6 sm:px-8 luxury-shadow">
      {FAQS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.q} className="py-5 sm:py-6">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-serif text-lg font-medium text-[#2B2B2B] sm:text-xl">
                {item.q}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6E3E0]/70 text-[#9A5560]">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 pr-8 text-sm leading-relaxed text-[#5C5355] sm:text-base">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
