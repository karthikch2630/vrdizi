import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Headphones } from 'lucide-react';
import HouseMaids from "../assets/Housemaids.png";
import Cooks from "../assets/cooks.png";
import ChildCare from "../assets/Childcare.png";
import Healthcare from "../assets/Healthcare.png";
import Watchmen from "../assets/Watchmen.png";

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

// More performant and premium image reveal
const imageReveal: Variants = {
  hidden: { clipPath: 'inset(10% 10% 10% 10%)', opacity: 0, scale: 1.05 },
  visible: { 
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.5, ease: CUSTOM_EASE } 
  }
};

// --- Services Data ---
const services = [
  {
    id: "housekeeping",
    title: "Maids & Housekeeping",
    subtitle: "Immaculate homes, effortless living.",
    description: "Our rigorously vetted housekeeping staff ensures your home is maintained to the highest standards of hygiene and organization. From daily chores to deep cleaning, we provide professionals who respect your space and privacy.",
    features: ["Daily cleaning & sanitization", "Laundry & wardrobe management", "Deep cleaning specialists", "Highly vetted & verified"],
    image: HouseMaids,
    reverse: false
  },
  {
    id: "culinary",
    title: "Cooks & Culinary Staff",
    subtitle: "Nutritious meals tailored to your taste.",
    description: "Bring the luxury of personalized dining into your home. Our culinary professionals are skilled in various cuisines and strictly adhere to dietary requirements, ensuring hygienic and delicious meals for your family.",
    features: ["Multi-cuisine expertise", "Dietary & allergy management", "Kitchen hygiene maintenance", "Grocery & menu planning"],
    image: Cooks,
    reverse: true
  },
  {
    id: "childcare",
    title: "Nannies & Childcare",
    subtitle: "Compassionate care for your little ones.",
    description: "Leaving your children in someone else's care requires absolute trust. Our nannies are thoroughly background-checked, trained in child safety, and deeply passionate about fostering a nurturing environment.",
    features: ["Infant & toddler care", "Trained in basic first-aid", "Engaging educational activities", "Strict behavioral assessments"],
    image: ChildCare,
    reverse: false
  },
  {
    id: "nursing",
    title: "Home Nurses & Elder Care",
    subtitle: "Dignified support for those you love.",
    description: "We provide licensed and experienced home nurses to assist with post-operative care, chronic illness management, and elderly companionship. They bring medical expertise and profound empathy right to your doorstep.",
    features: ["Post-surgical & recovery care", "Medication administration", "Elderly companionship", "24/7 live-in options available"],
    image: Healthcare,
    reverse: true
  },
  {
    id: "security",
    title: "Security Guards & Watchmen",
    subtitle: "Uncompromising protection for your assets.",
    description: "Protecting your residential community or corporate office is our priority. We deploy highly trained security personnel, including ex-servicemen, equipped to handle access control, surveillance, and emergency protocols.",
    features: ["Residential & corporate security", "Access control & visitor logging", "Emergency response trained", "Ex-servicemen & verified guards"],
    image: Watchmen,
    reverse: false
  }
];

// Memoize individual service blocks to prevent unnecessary re-renders on scroll
const ServiceBlock = memo(({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10%" }}
    variants={staggerContainer}
    className={`flex flex-col gap-10 lg:gap-24 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
  >
    {/* Image Side */}
    <motion.div variants={imageReveal} className="w-full lg:w-1/2 relative group">
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[4/5] bg-[#fafafa]">
        <img 
          src={service.image} 
          alt={`Professional providing ${service.title.toLowerCase()} services in Hyderabad`} 
          loading="lazy" // Performance: Native lazy loading
          decoding="async" // Performance: Non-blocking decoding
          className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[1.5s] ease-out will-change-transform"
        />
        <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply transition-opacity duration-700 lg:group-hover:opacity-0" aria-hidden="true"></div>
      </div>
    </motion.div>

    {/* Content Side */}
    <div className="w-full lg:w-1/2">
      <motion.div variants={fadeUp} className="mb-6">
        <span className="font-poppins text-[#f0f0f0] font-medium text-[56px] lg:text-[72px] block mb-2 leading-[1]">0{index + 1}</span>
        <h2 className="font-poppins text-3xl sm:text-[40px] font-medium text-[#111] tracking-[-0.02em] leading-[1.2]">{service.title}</h2>
        <p className="font-inter text-brand-red text-[13px] font-medium tracking-[0.2em] uppercase mt-4">{service.subtitle}</p>
      </motion.div>
      
      <motion.p variants={fadeUp} className="font-inter text-[#666] text-[17px] leading-[1.8] font-light mb-10">
        {service.description}
      </motion.p>
      
      <motion.ul variants={fadeUp} className="space-y-5 mb-12" aria-label={`Features of ${service.title}`}>
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className="mt-1 w-6 h-6 rounded-full bg-[#f8f8f8] flex items-center justify-center shrink-0 text-brand-red">
              <CheckCircle2 size={14} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-inter text-[#333] text-[16px] font-normal leading-[1.6]">{feature}</span>
          </li>
        ))}
      </motion.ul>

      <motion.div variants={fadeUp}>
        <Link 
          to="/contact" 
          aria-label={`Inquire about ${service.title}`}
          className="font-inter inline-flex items-center justify-center gap-3 border-b-2 border-transparent hover:border-brand-red pb-1 text-[#111] hover:text-brand-red text-[15px] font-medium uppercase tracking-widest group transition-all"
        >
          Inquire About Service
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
));

const ServicesPage: React.FC = () => {
  // SEO Configuration
  const seoData = {
    title: "Premium Staffing Services | VRDizi Maids, Nurses & Security",
    description: "Explore VRDizi's highly vetted staffing solutions in Hyderabad. We provide professional housemaids, culinary cooks, compassionate nannies, registered home nurses, and verified security guards.",
    url: "https://www.vrdizi.com/services"
  };

  // Structured Data (Schema.org) for Services
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Blue Collar Staffing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VRDizi Staffing Solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Staffing Categories",
      "itemListElement": services.map((s, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        },
        "position": index + 1
      }))
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

      <main className="font-inter bg-[#ffffff] pt-32 lg:pt-40 pb-16 overflow-hidden min-h-screen selection:bg-brand-red selection:text-white">
        
        {/* 1. PAGE HEADER */}
        <section className="px-6 lg:px-12 mb-32 lg:mb-40" aria-label="Services Introduction">
          <motion.div 
            className="container mx-auto max-w-4xl text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-brand-red" aria-hidden="true"></span>
              <h1 className="font-poppins text-brand-red font-medium uppercase tracking-[0.2em] text-[12px]">Our Expertise</h1>
              <span className="w-12 h-[1px] bg-brand-red" aria-hidden="true"></span>
            </motion.div>
            
            <motion.p variants={fadeUp} className="font-poppins text-5xl sm:text-6xl md:text-[72px] font-medium text-[#111] leading-[1.1] tracking-[-0.03em] mb-8">
              Premium Staffing <br />
              <span className="italic font-light text-[#888]">for Every Need.</span>
            </motion.p>
            
            <motion.p variants={fadeUp} className="font-inter text-[#666] text-[18px] max-w-2xl mx-auto leading-[1.8] font-light">
              From maintaining the sanctity of your home to securing your corporate assets, VRDizi provides specialized, heavily vetted personnel tailored to your exact requirements.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. SERVICES LISTING */}
        <section className="px-6 lg:px-12 pb-32" aria-label="Detailed Service Offerings">
          <div className="container mx-auto max-w-[1400px] flex flex-col gap-32 lg:gap-48">
            {services.map((service, index) => (
              <ServiceBlock key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* 3. THE VR DIZI PROMISE */}
        <section className="py-32 px-6 lg:px-12 bg-[#fafafa]" aria-label="Our Service Guarantee">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center"
            >
              {[
                { icon: ShieldCheck, title: "100% Verified Staff", desc: "Every candidate passes a strict 7-step background and behavioral check." },
                { icon: Clock, title: "48-Hour Replacement", desc: "If a placement isn't the perfect fit, we provide a replacement within 48 hours." },
                { icon: Headphones, title: "Dedicated Support", desc: "Your personal account manager is available around the clock to assist you." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-[#111]">
                    <item.icon size={28} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-poppins text-[22px] font-medium text-[#111] mb-4 leading-[1.3]">{item.title}</h3>
                  <p className="font-inter text-[#666] text-[16px] leading-[1.8] font-light max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. BOTTOM CTA */}
        <section className="py-32 px-6 lg:px-12 bg-[#111] text-center" aria-label="Call to Action">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="container mx-auto max-w-3xl"
          >
            <h2 className="font-poppins text-4xl md:text-[56px] font-medium text-white mb-8 tracking-[-0.02em] leading-[1.1]">
              Ready to secure <span className="italic font-light text-white/50">your staff?</span>
            </h2>
            <p className="font-inter text-white/60 text-[18px] mb-12 leading-[1.8] font-light">
              Fill out a simple inquiry form, and our placement specialists in Hyderabad will respond immediately.
            </p>
            <Link to="/contact" className="font-inter inline-block px-12 py-5 bg-white text-[#111] text-[15px] font-medium uppercase tracking-widest rounded-full hover:bg-brand-red hover:text-white transition-colors duration-500">
              Start Your Request
            </Link>
          </motion.div>
        </section>

      </main>
    </>
  );
};

export default ServicesPage;