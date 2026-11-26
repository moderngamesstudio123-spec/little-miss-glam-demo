'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Instagram, CheckCircle2, ArrowRight } from 'lucide-react';

const TREATMENTS = [
  'Lashes (Classics / Hybrids / Russians / Mega / Strip)',
  'Lash Lift & Tint / Wispies / Infill',
  'Brows (Thread / HD / Lamination / Ombré / Microblading)',
  'Lip Blush / Ombré Lips / Neutralisation',
  'Laser Hair Removal',
  'Beginner Training / Masterclass',
];

export default function BookingSection({ preselectedTreatment = '' }) {
  const [name, setName] = useState('');
  const [treatment, setTreatment] = useState(TREATMENTS[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!preselectedTreatment) return;
    const match = TREATMENTS.find((t) =>
      t.toLowerCase().includes(preselectedTreatment.toLowerCase())
    );
    if (match) setTreatment(match);
  }, [preselectedTreatment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // DEMO: Posts to Nexora Web Labs FormSubmit inbox for demo testing.
      // When Jasmin's site goes live, replace with her own email address.
      const response = await fetch('https://formsubmit.co/ajax/info@nexoraweblabs.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[DEMO] Little Miss Glam — Booking Request (${treatment})`,
          client_demo: 'Little Miss Glam (Jasmin, Manchester)',
          name,
          treatment,
          preferred_date: preferredDate,
          preferred_time: preferredTime,
          instagram_or_phone: contact,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setPreferredDate('');
        setPreferredTime('');
        setContact('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="bg-[#FCEEF3] py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
            Appointments &amp; Training Enquiries
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#161315] sm:text-4xl">
            Book your appointment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#161315]/75">
            Pick your treatment and a time that suits you. I&apos;ll confirm your booking on Instagram or by message.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-[#D45D89]/25 bg-white p-6 sm:p-10 luxury-shadow">
          {status === 'success' ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FCEEF3] text-[#D45D89]">
                <CheckCircle2 className="h-7 w-7 stroke-[1.75]" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-[#161315]">
                Thank you! I&apos;ll confirm your booking shortly.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#161315]/70">
                Your request has been sent. Keep an eye on your Instagram messages or phone for confirmation.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-7 inline-flex items-center justify-center rounded-full border border-[#D45D89]/40 px-6 py-2.5 text-sm font-medium text-[#D45D89] transition hover:bg-[#FCEEF3]"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#161315]/75">
                    Name
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your first & last name"
                    className="mt-2 w-full rounded-xl border border-[#161315]/15 bg-[#FFFCFD] px-4 py-3 text-sm text-[#161315] placeholder:text-[#161315]/40 focus:border-[#D45D89] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F29BB8]/40"
                  />
                </div>

                <div>
                  <label htmlFor="booking-treatment" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#161315]/75">
                    Treatment or Course
                  </label>
                  <select
                    id="booking-treatment"
                    name="treatment"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#161315]/15 bg-[#FFFCFD] px-4 py-3 text-sm text-[#161315] focus:border-[#D45D89] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F29BB8]/40"
                  >
                    {TREATMENTS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#161315]/75">
                    Preferred date
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full min-w-0 rounded-xl border border-[#161315]/15 bg-[#FFFCFD] px-4 py-3 text-sm text-[#161315] focus:border-[#D45D89] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F29BB8]/40"
                    />
                    <Calendar className="pointer-events-none absolute right-3.5 top-3.5 hidden h-4 w-4 text-[#D45D89]/70 sm:block" />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#161315]/75">
                    Preferred time
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="booking-time"
                      name="preferredTime"
                      type="text"
                      required
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      placeholder="e.g. Morning, 2:30 pm, or flexible"
                      className="w-full rounded-xl border border-[#161315]/15 bg-[#FFFCFD] px-4 py-3 pr-10 text-sm text-[#161315] placeholder:text-[#161315]/40 focus:border-[#D45D89] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F29BB8]/40"
                    />
                    <Clock className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-[#D45D89]/70" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="booking-contact" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#161315]/75">
                  Instagram handle or phone
                </label>
                <input
                  id="booking-contact"
                  name="contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. @yourhandle or 07..."
                  className="mt-2 w-full rounded-xl border border-[#161315]/15 bg-[#FFFCFD] px-4 py-3 text-sm text-[#161315] placeholder:text-[#161315]/40 focus:border-[#D45D89] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F29BB8]/40"
                />
              </div>

              {status === 'error' && (
                <p className="rounded-xl bg-[#FCEEF3] px-4 py-3 text-sm text-[#D45D89]">
                  Something went wrong sending the request. Please try again or DM{' '}
                  <a
                    href="https://www.instagram.com/littlemiss.glam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline"
                  >
                    @littlemiss.glam
                  </a>{' '}
                  on Instagram.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#161315] px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition hover:bg-[#D45D89] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending… please wait — this can take up to a minute' : 'Request booking'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <div className="mt-7 border-t border-[#161315]/10 pt-6 text-center">
            <p className="text-sm text-[#161315]/70">
              Prefer to message?{' '}
              <a
                href="https://www.instagram.com/littlemiss.glam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#D45D89] underline decoration-[#F29BB8] underline-offset-4 transition hover:text-[#161315]"
              >
                <Instagram className="h-4 w-4" />
                DM me on Instagram @littlemiss.glam
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
