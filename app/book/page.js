import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import FaqAccordion from '../components/FaqAccordion';
import Reveal from '../components/Reveal';
import { STUDIO_POLICIES, PATCH_TEST_POLICY } from '../data/salonData';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FFFCFD] text-[#161315]">
      <Navbar />

      <main>
        <section className="bg-gradient-to-b from-[#FCEEF3]/80 to-[#FCEEF3] pt-12 text-center sm:pt-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#D45D89]">
              Little Miss Glam · Manchester
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#161315] sm:text-5xl">
              Book &amp; Studio Policy
            </h1>
          </div>
        </section>

        <BookingSection />

        {/* Studio Policy & Patch Testing Section */}
        <section id="policy" className="bg-white py-20 scroll-mt-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                  Before Your Appointment
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium text-[#161315] sm:text-4xl">
                  Studio Policies &amp; Patch Testing
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-[#161315]/70">
                  Please read our studio guidelines carefully before requesting your appointment.
                </p>
              </div>
            </Reveal>

            {/* Patch Testing Highlight Banner */}
            <Reveal delay={60}>
              <div className="mt-10 rounded-3xl border border-[#D45D89]/30 bg-gradient-to-br from-[#FCEEF3] via-white to-[#FCEEF3]/60 p-6 sm:p-8 luxury-shadow">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#161315] text-[#F29BB8]">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D45D89]">
                      Important Safety Notice
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-medium text-[#161315]">
                      {PATCH_TEST_POLICY.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {PATCH_TEST_POLICY.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#161315]/80"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D45D89]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STUDIO_POLICIES.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 65}>
                  <div className="flex h-full flex-col rounded-2xl border border-[#D45D89]/20 bg-[#FFFCFD] p-6 luxury-shadow luxury-shadow-hover">
                    <span className="font-serif text-xs italic text-[#D45D89]">
                      {item.num}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-medium text-[#161315]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#161315]/75">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFCFD] pb-20 pt-6">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-medium text-[#161315]">
                  Frequently asked questions
                </h2>
              </div>
              <FaqAccordion />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
