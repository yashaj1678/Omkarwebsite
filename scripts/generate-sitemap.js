import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/why-om', changefreq: 'monthly', priority: 0.7 },
  { url: '/team', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/documents', changefreq: 'weekly', priority: 0.8 }
];

// Create sitemap
const stream = new SitemapStream({ hostname: 'https://www.omestateservices.com' });

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(routes).pipe(stream))
  .then((data) => {
    createWriteStream('./public/sitemap.xml').write(data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });