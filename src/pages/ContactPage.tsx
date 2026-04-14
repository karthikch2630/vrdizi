import React, { useState, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ContactModal from '../components/ContactModal';

// --- Studio-Grade Animation Variants ---
const CUSTOM_EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: CUSTOM_EASE } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// --- Reusable Contact Card Component (Memoized for performance) ---
const ContactCard = memo(({ 
  href, 
  icon: Icon, 
  title, 
  detail1, 
  detail2, 
  isLink = true 
}: { 
  href?: string, 
  icon: React.ElementType, 
  title: string, 
  detail1: React.ReactNode, 
  detail2: string,
  isLink?: boolean
}) => {
  const CardWrapper = isLink ? motion.a : motion.div;
  
  return (
    <CardWrapper 
      href={href} 
      variants={fadeUp} 
      className="bg-[#fafafa] rounded-[32px] p-10 border border-gray-100 hover:border-brand-red/20 hover:shadow-[0_20px_60px_rgba(190,22,34,0.06)] transition-all duration-500 group flex flex-col items-center text-center cursor-pointer"
    >
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 text-[#111] group-hover:text-brand-red group-hover:bg-brand-red/5 transition-colors duration-500 shadow-sm">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-poppins text-[13px] font-medium text-[#111] mb-3 uppercase tracking-[0.15em]">{title}</h3>
      <div className="font-inter text-[#666] font-light text-[17px] leading-[1.6]">
        {detail1}
      </div>
      <p className="font-inter text-[#888] text-[14px] font-light mt-3">{detail2}</p>
    </CardWrapper>
  );
});

const ContactPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- SEO Configuration ---
  const seoData = {
    title: "Contact VRDizi | Staffing Solutions in Hyderabad",
    description: "Get in touch with VRDizi for premium staffing solutions. Hire verified maids, nurses, and security guards. Call +91 86889 95438 or visit our Madhapur office.",
    url: "https://www.vrdizi.com/contact"
  };

  // --- Structured Data (Schema.org) ---
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "VRDizi Staffing Solutions",
      "image": "https://www.vrdizi.com/logo.png",
      "@id": "https://www.vrdizi.com",
      "url": "https://www.vrdizi.com",
      "telephone": "+91-8688995438",
      "email": "info@vrdizi.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Maa Nilayam, 3rd Floor, 1-98/9/3/20, Sy No 71, Madhapur, Serilingampally",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500081",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4483, // Update with exact coordinates if needed
        "longitude": 78.3915
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.url} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main className="font-inter bg-white pt-32 lg:pt-40 pb-24 overflow-hidden min-h-screen relative selection:bg-brand-red selection:text-white">
        
        {/* 1. HEADER SECTION */}
        <section className="px-6 lg:px-12 mb-24 lg:mb-32" aria-label="Contact Introduction">
          <motion.div 
            className="container mx-auto max-w-4xl text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-brand-red" aria-hidden="true"></span>
              <h1 className="font-poppins text-brand-red font-medium uppercase tracking-[0.2em] text-[12px]">Get in Touch</h1>
              <span className="w-12 h-[1px] bg-brand-red" aria-hidden="true"></span>
            </motion.div>
            
            <motion.p variants={fadeUp} className="font-poppins text-5xl sm:text-6xl md:text-[72px] font-medium text-[#111] leading-[1.1] tracking-[-0.03em] mb-8">
              Let's build your <br className="hidden sm:block" />
              <span className="italic font-light text-[#888]">trusted team.</span>
            </motion.p>
            
            <motion.p variants={fadeUp} className="font-inter text-[#666] text-[18px] max-w-2xl mx-auto leading-[1.8] font-light mb-12">
              Whether you need compassionate care for a loved one, robust security for your business, or are looking to join our verified team of professionals.
            </motion.p>

            <motion.button 
              variants={fadeUp}
              onClick={() => setIsModalOpen(true)}
              aria-label="Open contact form modal"
              className="font-inter inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#111] text-white text-[14px] font-medium uppercase tracking-widest rounded-full hover:bg-brand-red transition-colors duration-500 group"
            >
              Open Quick Form
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </section>

        {/* 2. CONTACT INFO CARDS */}
        <section className="px-6 lg:px-12 mb-32" aria-label="Contact Information">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
            >
              <ContactCard 
                href="tel:+918688995438"
                icon={Phone}
                title="Call Us"
                detail1="+91 86889 95438"
                detail2="Mon-Sat, 9am to 6pm"
              />
              <ContactCard 
                href="mailto:info@vrdizi.com"
                icon={Mail}
                title="Email Us"
                detail1="info@vrdizi.com"
                detail2="Online Support 24/7"
              />
              <ContactCard 
                isLink={false}
                icon={MapPin}
                title="Headquarters"
                detail1={
                  <>
                    Maa Nilayam, 3rd Floor<br />
                    Madhapur, Hyderabad 500081
                  </>
                }
                detail2="Visit by Appointment"
              />
            </motion.div>
          </div>
        </section>

        {/* 3. CONTACT FORM & IMAGE SPLIT */}
        <section className="px-6 lg:px-12" aria-label="Send us a message">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_30px_100px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row">
              
              {/* Left: Contact Form */}
              <motion.div 
                className="w-full lg:w-3/5 flex flex-col bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeUp}
              >
                {/* Note: Ensure padding is handled inside ContactForm component to match this clean container */}
                <div className="p-8 lg:p-16">
                  <ContactForm />
                </div>
              </motion.div>

              {/* Right: The Image Placard */}
              <motion.div 
                className="w-full lg:w-2/5 relative min-h-[500px] lg:min-h-full bg-[#f0f0f0]"
                initial={{ opacity: 0, clipPath: 'inset(10% 0% 0% 0%)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: CUSTOM_EASE }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Corporate Office Building in Hyderabad" 
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent"></div>
                
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[24px]">
                    <h4 className="font-poppins text-white font-medium text-[22px] mb-3 leading-[1.2]">Corporate Office</h4>
                    <p className="font-inter text-white/60 text-[15px] leading-[1.8] font-light">
                      Maa Nilayam, 3rd Floor, 1-98/9/3/20<br/>
                      Sy No 71, Madhapur, Serilingampally<br/>
                      Hyderabad, Telangana 500081
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ContactPage;