import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/HeroSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  // SEO Configuration Data
  const seoData = {
    title: "VRDIZI Staffing Services | Verified Maids, Nurses & Security in Hyderabad",
    description: "Hire background-verified housemaids, professional bedside nurses, and trained security guards in Hyderabad. VRDIZI provides reliable blue-collar staffing solutions.",
    keywords: "VRDIZI staffing, hire maids Hyderabad, home nursing services, security guard agency Telangana, verified domestic help, blue collar recruitment",
    url: "https://vrdizi.com", // Replace with your actual domain
    image: "https://vrdizi.com/og-image.jpg"
  };

  // Structured Data (Schema.org)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VRDIZI Staffing Services",
    "image": seoData.image,
    "@id": seoData.url,
    "url": seoData.url,
    "telephone": "+91-XXXXXXXXXX", // Update with actual contact
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Office Address",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3850,
      "longitude": 78.4867
    },
    "description": seoData.description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VRDIZI Staffing Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Maid & Housekeeping Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Home Nursing & Patient Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential & Commercial Security Guards"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        {/* Standard Metadata */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />

        {/* Social Media (Open Graph) */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        {/* Structured Data injection */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <main>
        {/* Use semantic section tags for better crawling */}
        <Hero />
        
        <section id="services" aria-label="Our Staffing Services">
          <Services />
        </section>

        <section id="about-us" aria-label="About VRDIZI">
          <AboutUs />
        </section>

        <section id="our-process" aria-label="How we hire">
          <Process />
        </section>

        <section id="client-testimonials" aria-label="Testimonials">
          <Testimonials />
        </section>

        <CTASection />
      </main>
    </>
  );
};

export default Home;