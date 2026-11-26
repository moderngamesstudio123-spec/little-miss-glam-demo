import Link from 'next/link';
import { GraduationCap, Check, ArrowRight, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calligraphy3D from '../components/Calligraphy3D';
import Reveal from '../components/Reveal';
import { TRAINING_OFFERINGS } from '../data/salonData';

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#FFFCFD] text-[#161315]">
      <Navbar />

      <main className="bg-gradient-to-b from-[#FCEEF3]/80 via-[#FFFCFD] to-[#FFFCFD] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D45D89]/30 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D45D89]">
              <GraduationCap className="h-3.5 w-3.5" />
              Artist &amp; Educator · Manchester
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#161315] sm:text-5xl">
              Accredited Lash Training &amp; 1:1 Masterclasses
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#161315]/75">
              Courses starting from <span className="font-semibold text-[#D45D89]">£429</span> — all accredited &amp; insurable with premium kits, live model practice, certificates, and ongoing support.
            </p>
          </div>

          <div className="mt-10">
            <Calligraphy3D
              compact
              scriptText="Train with me"
              subtitle="Accredited Courses · Certificates Included · Ongoing Support"
            />
          </div>

          {/* Real Course Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRAINING_OFFERINGS.map((course, idx) => (
              <Reveal key={course.title} delay={idx * 75} className="flex">
                <div className="flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-[#D45D89]/25 bg-white luxury-shadow luxury-shadow-hover">
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#FCEEF3]">
                      <img
                        src={course.image}
                        alt={`${course.title} course at Little Miss Glam, Manchester`}
                        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block rounded-full bg-[#FCEEF3] px-3 py-1 text-[11px] font-medium text-[#D45D89]">
                          {course.badge}
                        </span>
                        <span className="font-serif text-2xl font-semibold text-[#161315]">
                          {course.price}
                        </span>
                      </div>

                      <h2 className="mt-4 font-serif text-2xl font-medium text-[#161315]">
                        {course.title}
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#161315]/75">
                        {course.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {course.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-[#161315]/85 sm:text-sm">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FCEEF3] text-[#D45D89]">
                              <Check className="h-3 w-3" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-[#D45D89]/15 px-6 py-5 sm:px-7">
                    <div className="flex flex-wrap gap-2.5">
                      <Link
                        href="/book"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#161315] px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#D45D89]"
                      >
                        Enquire <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href="https://www.instagram.com/littlemiss.glam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#D45D89]/35 px-4 py-3 text-xs font-medium text-[#D45D89] transition hover:bg-[#FCEEF3]"
                      >
                        <Instagram className="h-3.5 w-3.5" />
                        DM
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Overview Banner */}
          <Reveal delay={120}>
            <div className="mt-14 overflow-hidden rounded-3xl border border-[#D45D89]/25 bg-white luxury-shadow">
              <div className="grid items-center md:grid-cols-12">
                <div className="md:col-span-5">
                  <img
                    src="/images/training-overview.jpg"
                    alt="Are You Ready To Level Up — Train with Jasmin at Little Miss Glam"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7 sm:p-10 md:col-span-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D45D89]">
                    Ready to Level Up?
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-medium text-[#161315]">
                    Train with Jasmin in Manchester
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#161315]/75 sm:text-base">
                    Every course includes a detailed training manual, live model practice, business &amp; social media guidance, and an accredited certificate so you can get insured and start taking clients with confidence.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D45D89] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#161315]"
                    >
                      Book your training date <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
