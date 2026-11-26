'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calligraphy3D from '../components/Calligraphy3D';
import Reveal from '../components/Reveal';
import {
  LASH_PRICES,
  BROW_PRICES,
  LIP_PRICES,
  LASER_PRICES,
} from '../data/salonData';

const TABS = [
  { id: 'all', label: 'All Treatments' },
  { id: 'lashes', label: 'Lashes' },
  { id: 'brows', label: 'Brows' },
  { id: 'lips', label: 'Semi-Permanent Lips' },
  { id: 'laser', label: 'Laser' },
];

function PriceBlock({ title, scriptLabel, groups }) {
  return (
    <div className="rounded-3xl border border-[#D45D89]/25 bg-white p-6 sm:p-10 luxury-shadow">
      <div className="flex flex-col justify-between gap-2 border-b border-[#D45D89]/20 pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-script text-3xl text-[#D45D89] sm:text-4xl">
            {scriptLabel}
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#161315] sm:text-4xl">
            {title}
          </h2>
        </div>
        <Link
          href="/book"
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#D45D89] hover:text-[#161315]"
        >
          Book treatment <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-6 space-y-8">
        {groups.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D45D89]">
              {group.category}
            </h3>
            <div className="mt-3 divide-y divide-[#D45D89]/12">
              {group.items.map((item) => (
                <div key={item.name} className="py-4 first:pt-2 last:pb-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-lg font-medium text-[#161315] sm:text-xl">
                      {item.name}
                    </span>
                    <span className="shrink-0 font-serif text-lg font-semibold text-[#D45D89] sm:text-xl">
                      {item.price}
                    </span>
                  </div>
                  {item.details.length > 0 && (
                    <div className="mt-2 space-y-1 pl-3 border-l-2 border-[#F29BB8]/60">
                      {item.details.map((d) => (
                        <div
                          key={d.label}
                          className="flex items-baseline justify-between gap-4 text-xs text-[#161315]/70 sm:text-sm"
                        >
                          <span>{d.label}</span>
                          <span className="shrink-0 font-medium text-[#161315]">
                            {d.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-[#FFFCFD] text-[#161315]">
      <Navbar />

      <main className="bg-gradient-to-b from-[#FCEEF3]/80 via-[#FFFCFD] to-[#FFFCFD] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#D45D89]">
              Little Miss Glam · Manchester
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#161315] sm:text-6xl">
              PRICE LIST
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#161315]/70 sm:text-base">
              Full treatment menu for lashes, brows, semi-permanent lips and laser.
            </p>
          </div>

          <div className="mt-8">
            <Calligraphy3D
              compact
              scriptText="Lashes, Brows & Lips"
              subtitle="Verified Studio Price Menu"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition ${
                  activeTab === tab.id
                    ? 'bg-[#161315] text-white shadow-sm'
                    : 'border border-[#D45D89]/30 bg-white text-[#161315]/75 hover:border-[#D45D89] hover:text-[#D45D89]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {(activeTab === 'all' || activeTab === 'lashes') && (
              <Reveal>
                <PriceBlock
                  title="Lashes"
                  scriptLabel="Lash Extensions & Lifts"
                  groups={LASH_PRICES}
                />
              </Reveal>
            )}
            {(activeTab === 'all' || activeTab === 'brows') && (
              <Reveal>
                <PriceBlock
                  title="Brows"
                  scriptLabel="Styling & Semi-Permanent"
                  groups={BROW_PRICES}
                />
              </Reveal>
            )}
            {(activeTab === 'all' || activeTab === 'lips') && (
              <Reveal>
                <PriceBlock
                  title="Lips"
                  scriptLabel="Semi Permanent"
                  groups={LIP_PRICES}
                />
              </Reveal>
            )}
            {(activeTab === 'all' || activeTab === 'laser') && (
              <Reveal>
                <PriceBlock
                  title="Laser"
                  scriptLabel="Smooth & Long-Lasting"
                  groups={LASER_PRICES}
                />
              </Reveal>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
