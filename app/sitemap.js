export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://little-miss-glam-demo.pages.dev';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/training`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}
