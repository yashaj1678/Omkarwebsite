import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = 'https://www.omestateservices.com/og-image.jpg',
  ogType = 'website'
}: SEOProps) {
  const siteUrl = 'https://www.omestateservices.com';
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title} | Om Estate Services</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || siteUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Om Estate Services" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Om Estate Services",
          "image": ogImage,
          "description": description,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "+919082909010",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No 11,13 And 14, 1st Floor, Yashokiran Co Op Hsg Society",
            "addressLocality": "Panvel",
            "addressRegion": "Maharashtra",
            "postalCode": "410206",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.9894,
            "longitude": 73.1175
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "21:30"
          }
        })}
      </script>
    </Helmet>
  );
}