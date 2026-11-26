export const LASH_PRICES = [
  {
    category: 'Lash Extensions',
    items: [
      {
        name: 'Classics',
        price: '£50',
        details: [
          { label: '2 Week Infill', price: '£30' },
          { label: '3 Week Infill', price: '£35' },
        ],
      },
      {
        name: 'Hybrids',
        price: '£55',
        details: [
          { label: '2 Week Infill', price: '£40' },
          { label: '3 Week Infill', price: '£45' },
        ],
      },
      {
        name: 'Russians',
        price: '£60',
        details: [
          { label: '2 Week Infill', price: '£40' },
          { label: '3 Week Infill', price: '£45' },
        ],
      },
      {
        name: 'Mega Volume',
        price: '£65',
        details: [
          { label: '2 Week Infill', price: '£45' },
          { label: '3 Week Infill', price: '£50' },
        ],
      },
      {
        name: 'Strip Lash',
        price: '£65',
        details: [
          { label: '2 Week Infill', price: '£45' },
          { label: '3 Week Infill', price: '£50' },
        ],
      },
    ],
  },
  {
    category: 'Lash Extras & Lifts',
    items: [
      {
        name: '1 Hour Wispies',
        price: '£40',
        details: [{ label: 'Wispy Sets Additional', price: '+£5' }],
      },
      { name: 'Mini Fill (Within 7 Days)', price: '£25', details: [] },
      {
        name: 'Bottom Lashes',
        price: 'from £15',
        details: [
          { label: 'Classic', price: '£15' },
          { label: 'Russian', price: '£20' },
        ],
      },
      { name: 'Removal', price: '£15', details: [] },
      { name: 'Lash Lift and Tint', price: '£40', details: [] },
    ],
  },
];

export const BROW_PRICES = [
  {
    category: 'Brow Styling',
    items: [
      { name: 'Brow Thread', price: '£8', details: [] },
      { name: 'HD Brows', price: '£15', details: [] },
      { name: 'Brow Lamination', price: '£40', details: [] },
    ],
  },
  {
    category: 'Semi-Permanent Brows',
    items: [
      {
        name: 'Brows Ombré',
        price: '£195',
        details: [{ label: 'Top Up 4–8 Weeks', price: '£65' }],
      },
      {
        name: 'Microblading',
        price: '£180',
        details: [{ label: 'Top Up 4–8 Weeks', price: '£50' }],
      },
      {
        name: 'Combination Brow',
        price: '£210',
        details: [{ label: '4–8 Weeks Top Up', price: '£75' }],
      },
      {
        name: 'Colour Boost (Ombré / Microblading / Combination)',
        price: 'from £90',
        details: [
          { label: '3–6 Months', price: '£90' },
          { label: '6–18 Months', price: '£120' },
          { label: '18 Months+', price: '£150' },
        ],
      },
    ],
  },
];

export const LIP_PRICES = [
  {
    category: 'Semi-Permanent Lips',
    items: [
      {
        name: 'Lip Blush Full Lip',
        price: '£220',
        details: [{ label: 'Top Up 6–8 Weeks', price: '£75' }],
      },
      {
        name: 'Ombré Lips',
        price: '£250',
        details: [{ label: 'Top Up 6–8 Weeks', price: '£85' }],
      },
      {
        name: 'Lip Neutralisation',
        price: '£250',
        details: [
          { label: 'Session 2', price: '£100' },
          { label: 'Session 3', price: '£100' },
          { label: 'Top Up 8–18 Months', price: '£150' },
          { label: '18 Months+', price: '£190' },
        ],
      },
      {
        name: 'Colour Boost Full Lip / Ombré',
        price: 'from £100',
        details: [
          { label: '3–6 Months', price: '£100' },
          { label: '6–18 Months', price: '£140' },
          { label: '18+ Months', price: '£180' },
        ],
      },
      { name: 'Lip Conversion', price: '£200', details: [] },
    ],
  },
];

export const LASER_PRICES = [
  {
    category: 'Laser Hair Removal',
    items: [
      {
        name: 'Tailored Laser Sessions',
        price: 'from £—',
        details: [
          {
            label: 'Smooth, long-lasting hair removal with aftercare included — area pricing confirmed on enquiry',
            price: 'Enquire',
          },
        ],
      },
    ],
  },
];

export const TRAINING_OFFERINGS = [
  {
    badge: 'One Day Intensive · 10AM – 5PM',
    title: 'Classic Lashes',
    price: '£429',
    image: '/images/training-classic.webp',
    description:
      'Fully accredited and insurable beginner course covering every aspect of classic lash extensions.',
    highlights: [
      'Full premium kit worth over £150',
      'In-depth theory, manual & live model practice',
      'Product & insurance discount codes',
      'Marketing, business & photo editing tips',
      'Certificate included & ongoing support',
    ],
  },
  {
    badge: 'One Day Intensive · 10AM – 3PM',
    title: 'Lash Lift & Tint',
    price: '£450',
    image: '/images/training-lash-lift.webp',
    description:
      'Fully accredited one-day course teaching natural lash lifting and tinting with lifetime guidance.',
    highlights: [
      'Full premium kit worth over £150',
      'In-depth theory, manual & live model practice',
      'Product & insurance discount codes',
      'Marketing, business & photo editing tips',
      'Certificate included & lifetime support',
    ],
  },
  {
    badge: 'One Day Intensive · 10AM – 5PM',
    title: 'Advanced Volume',
    price: '£499',
    image: '/images/training-advanced-volume.webp',
    description:
      'Learn 2 styles — Hybrids and Volume — in an intensive one-day accredited course.',
    highlights: [
      'Full premium kit worth over £150',
      'Hybrids & Volume theory + live model practice',
      'Product & insurance discount codes',
      'Marketing, business & photo editing tips',
      'Certificate included & ongoing support',
    ],
  },
  {
    badge: 'One Day Intensive · 9AM – 5PM',
    title: 'Fast Track Classic & Volume',
    price: '£649',
    image: '/images/training-fast-track.webp',
    description:
      'Learn 3 styles — Classic, Hybrid and Volume — in one intensive accredited training day.',
    highlights: [
      'Full premium kit worth over £200',
      'Classic, Hybrid & Volume + live model practice',
      'Product & insurance discount codes',
      'Marketing, business & photo editing tips',
      'Certificate included',
    ],
  },
  {
    badge: 'Two Day Intensive · 10AM – 5PM',
    title: 'Two-Day Classic & Volume',
    price: '£879',
    image: '/images/training-two-day.webp',
    description:
      'Two full days mastering Classic, Hybrid and Volume lashes with extended hands-on practice.',
    highlights: [
      'Full premium kit worth over £200',
      '2 days of theory, manual & live model practice',
      'Product & insurance discount codes',
      'Marketing, business & photo editing tips',
      'Certificate included & ongoing support',
    ],
  },
  {
    badge: 'Tailored 1:1 · 10AM – 5PM',
    title: 'Tailored 1:1 Masterclass',
    price: '£499',
    image: '/images/training-masterclass.webp',
    description:
      'A course designed just for you (must already be trained in classic lashes) to level up skills & confidence.',
    highlights: [
      'Refresh skills, expand knowledge & advance techniques',
      'Model practice & Jasmin’s favourite products',
      'Marketing, social media & photo editing advice',
      'Building your lash business + lifetime guidance',
      'Certificate of attendance included',
    ],
  },
];

export const PATCH_TEST_POLICY = {
  title: 'Patch Testing (48 Hours Prior)',
  points: [
    'A patch test is required 48 hours before your appointment.',
    'If you choose not to attend a patch test, you will be required to sign a consent form before your treatment.',
  ],
};

export const STUDIO_POLICIES = [
  {
    num: '01',
    title: 'Deposits & Confirmation',
    text: 'A non-refundable deposit is required to secure any booking. No appointment is confirmed without a deposit.',
  },
  {
    num: '02',
    title: 'Arrival & Lateness',
    text: 'Please arrive on time and plan your journey ahead. Please keep me informed if you are running late. 10 minutes late will result in a £10 fee; 15 minutes late will result in your appointment being cancelled and loss of deposit.',
  },
  {
    num: '03',
    title: 'Clean Lashes',
    text: 'Please arrive with clean lashes. Any residue of mascara or makeup will result in a £5 cleaning fee.',
  },
  {
    num: '04',
    title: 'Rescheduling & Cancellations',
    text: 'Appointments can be rescheduled or cancelled if 48 hours notice is given. If cancelled with less than 48 hours notice, 50% of the treatment cost will be charged.',
  },
  {
    num: '05',
    title: 'Same-Day Cancellations & No-Shows',
    text: 'If you cancel on the day of your appointment or fail to show, 100% of the treatment cost will be charged to you before you can book any future appointments.',
  },
  {
    num: '06',
    title: 'Infill Timing & Location',
    text: '2-week and 3-week infill pricing applies when booked within the timeframe with at least 40–50% lashes remaining. Based in Manchester — exact studio address is shared once confirmed.',
  },
];
