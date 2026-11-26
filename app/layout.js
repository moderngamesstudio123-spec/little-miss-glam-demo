import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata = {
  title: 'Little Miss Glam — Lashes, Lip Blush, Brows & Laser in Manchester | Jasmin',
  description:
    'Lash extensions, lip blush, brows, laser and training in Manchester by Jasmin at Little Miss Glam. View real prices and book online.',
  openGraph: {
    title: 'Little Miss Glam — Lashes, Lip Blush, Brows & Laser in Manchester | Jasmin',
    description:
      'Lash extensions, lip blush, brows, laser and training in Manchester by Jasmin at Little Miss Glam.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Little Miss Glam',
    description:
      'Lashes, lip blush, brows, laser and accredited lash training in Manchester by Jasmin.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressCountry: 'GB',
    },
    sameAs: ['https://www.instagram.com/littlemiss.glam'],
  };

  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <body className="bg-[#FFFCFD] text-[#161315] antialiased selection:bg-[#F29BB8] selection:text-[#161315]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
