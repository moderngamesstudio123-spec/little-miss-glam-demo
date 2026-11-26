'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, Sparkles, Instagram } from 'lucide-react';

const QUICK_PROMPTS = [
  'Lash prices?',
  'Lip blush & brows?',
  'Training courses?',
  'Patch test & policy?',
  'How to book?',
];

function getConciergeReply(input) {
  const q = input.toLowerCase();

  if (q.includes('lash') && (q.includes('train') || q.includes('course') || q.includes('class'))) {
    return (
      'Jasmin offers accredited lash training in Manchester:\n' +
      '• Classic Lashes (1 day): £429\n' +
      '• Lash Lift & Tint (1 day): £450\n' +
      '• Advanced Volume (1 day): £499\n' +
      '• Fast Track Classic & Volume (1 day): £649\n' +
      '• Two-Day Classic & Volume: £879\n' +
      '• Tailored 1:1 Masterclass: £499\n\n' +
      'All courses include theory, live model practice, premium kit & certificate. See /training for full details!'
    );
  }

  if (q.includes('train') || q.includes('course') || q.includes('masterclass') || q.includes('educator')) {
    return (
      'Courses start from £429 (Classic Lashes £429, Lash Lift & Tint £450, Advanced Volume £499, Fast Track £649, Two-Day £879, Tailored 1:1 Masterclass £499). Every course is accredited & insurable with a full kit and certificate.'
    );
  }

  if (q.includes('lash') || q.includes('classic') || q.includes('hybrid') || q.includes('russian') || q.includes('mega') || q.includes('infill') || q.includes('wispy') || q.includes('lift')) {
    return (
      'Lash Prices at Little Miss Glam:\n' +
      '• Classics: £50 (2wk £30 / 3wk £35)\n' +
      '• Hybrids: £55 (2wk £40 / 3wk £45)\n' +
      '• Russians: £60 (2wk £40 / 3wk £45)\n' +
      '• Mega Volume / Strip Lash: £65 (2wk £45 / 3wk £50)\n' +
      '• 1 Hour Wispies: £40 (+£5 wispy sets)\n' +
      '• Mini Fill (within 7 days): £25\n' +
      '• Lash Lift & Tint: £40 | Removal: £15\n' +
      '• Bottom Lashes: Classic £15 / Russian £20'
    );
  }

  if (q.includes('lip') || q.includes('blush') || q.includes('ombr') || q.includes('neutral') || q.includes('micro') || q.includes('brow') || q.includes('lamination') || q.includes('thread')) {
    return (
      'Brows & Semi-Permanent Prices:\n' +
      '• Brow Thread: £8 | HD Brows: £15 | Brow Lamination: £40\n' +
      '• Brows Ombré: £195 (4–8wk top up £65)\n' +
      '• Micro Blading: £180 (4–8wk top up £50)\n' +
      '• Combination Brow: £210 (4–8wk top up £75)\n' +
      '• Lip Blush Full Lip: £220 (6–8wk top up £75)\n' +
      '• Ombré Lips: £250 (6–8wk top up £85)\n' +
      '• Lip Neutralisation: £250 | Lip Conversion: £200'
    );
  }

  if (q.includes('laser')) {
    return 'Laser hair removal is available with aftercare included. Pricing depends on the treatment area — submit a quick booking request or DM @littlemiss.glam for a tailored quote.';
  }

  if (q.includes('patch') || q.includes('policy') || q.includes('deposit') || q.includes('cancel') || q.includes('late') || q.includes('clean')) {
    return (
      'Studio Policies & Patch Testing:\n' +
      '• Patch test required 48 hours before your appointment (or sign a consent form).\n' +
      '• Non-refundable deposit required to confirm any booking.\n' +
      '• 10 mins late = £10 fee; 15 mins late = cancelled & loss of deposit.\n' +
      '• Clean lashes only (£5 cleaning fee if mascara/makeup residue).\n' +
      '• 48h notice to reschedule/cancel (under 48h = 50% charge; same-day/no-show = 100%).'
    );
  }

  if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('manchester')) {
    return 'Little Miss Glam is based in Manchester. Exact studio address and directions are shared privately once your booking and deposit are confirmed.';
  }

  if (q.includes('book') || q.includes('appointment') || q.includes('available') || q.includes('time') || q.includes('date')) {
    return 'You can request an appointment in under a minute on the Book page (/book) or DM Jasmin directly on Instagram @littlemiss.glam. A non-refundable deposit secures your slot.';
  }

  return (
    "Hi! I'm the Little Miss Glam 24/7 assistant. I can help with:\n" +
    '• Lash, Brow, Lip Blush & Laser prices\n' +
    '• Accredited Training & 1:1 Masterclasses\n' +
    '• Patch testing & Studio policies\n' +
    '• Booking your appointment in Manchester\n\n' +
    'Tap a quick topic below or ask me anything!'
  );
}

export default function StudioConcierge() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'agent',
      text: "Hi gorgeous! Welcome to Little Miss Glam Manchester. I'm available 24/7 for prices, training info, policies & bookings. How can I help?",
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    if (open && endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = getConciergeReply(trimmed);
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'agent', text: reply },
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating 24/7 Live Concierge Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close 24/7 studio assistant' : 'Open 24/7 studio assistant'}
        className="fixed bottom-20 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#161315] px-4 py-3 text-xs font-medium tracking-wide text-white shadow-xl shadow-[#161315]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#D45D89] md:bottom-6 md:right-6"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F29BB8] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F29BB8]" />
        </span>
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        <span className="hidden sm:inline">24/7 Studio Help</span>
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Little Miss Glam 24/7 Studio Assistant"
          className="fixed bottom-34 right-4 z-50 flex max-h-[72vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-[#D45D89]/30 bg-white shadow-2xl md:bottom-20 md:right-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#161315] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D45D89] text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="font-serif text-base font-medium leading-tight">
                  Little Miss Glam
                </p>
                <p className="text-[11px] text-[#F29BB8]">
                  24/7 Instant Enquiry Assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#FFFCFD] p-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed sm:text-[13px] ${
                    msg.role === 'user'
                      ? 'rounded-br-sm bg-[#D45D89] text-white'
                      : 'rounded-bl-sm border border-[#D45D89]/20 bg-white text-[#161315] shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="flex gap-1.5 overflow-x-auto border-t border-[#D45D89]/15 bg-[#FCEEF3]/50 px-3 py-2">
            {QUICK_PROMPTS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => sendMessage(chip)}
                className="shrink-0 rounded-full border border-[#D45D89]/30 bg-white px-3 py-1 text-[11px] font-medium text-[#D45D89] transition hover:bg-[#D45D89] hover:text-white"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input + Direct Actions */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-[#D45D89]/15 bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about prices, training, policy..."
              className="flex-1 rounded-full border border-[#161315]/15 bg-[#FFFCFD] px-3.5 py-2 text-xs text-[#161315] placeholder:text-[#161315]/45 focus:border-[#D45D89] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#161315] text-white transition hover:bg-[#D45D89]"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>

          <div className="flex items-center justify-between border-t border-[#D45D89]/10 bg-[#FCEEF3]/40 px-4 py-2 text-[11px]">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="font-medium text-[#D45D89] underline underline-offset-2 hover:text-[#161315]"
            >
              Book online
            </Link>
            <a
              href="https://www.instagram.com/littlemiss.glam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#161315]/75 hover:text-[#D45D89]"
            >
              <Instagram className="h-3 w-3" />
              DM @littlemiss.glam
            </a>
          </div>
        </div>
      )}
    </>
  );
}
