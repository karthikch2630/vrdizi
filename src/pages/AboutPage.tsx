import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Shield } from 'lucide-react';
import AboutIMG from "../assets/AboutpageIMG.png";

// --- Validated Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AboutPage: React.FC = () => {
  // SEO Configuration
  const seoData = {
    title: "About Us | VR Dizi - Verified Staffing & Security in Hyderabad",
    description: "Learn about VR Dizi's mission to provide 100% background-verified maids, nurses, and security guards. Discover our rigorous 7-step vetting protocol.",
    keywords: "about VR Dizi, verified staffing agency Hyderabad, reliable domestic help, trusted security guards, manpower solutions Telangana, background checked staff",
    url: "https://www.vrdizi.com/about", // Update with your actual URL
    image: "https://www.vrdizi.com/og-about-image.jpg" // Update with an actual image URL
  };

  // Structured Data (AboutPage / Organization)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "VR Dizi",
      "url": "https://www.vrdizi.com",
      "logo": "https://www.vrdizi.com/logo.png",
      "description": seoData.description,
      "founder": {
        "@type": "Person",
        "name": "Anuradha"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8688995438",
        "contactType": "customer service",
        "areaServed": "Hyderabad",
        "availableLanguage": ["English", "Telugu", "Hindi"]
      }
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

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <main className="font-inter bg-white pt-24 pb-10 overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="relative px-4 sm:px-6 mb-20 lg:mb-24" aria-label="Introduction to VR Dizi">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
              
              <motion.div 
                className="w-full lg:w-1/2 z-10 pt-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
                  <span className="w-8 h-[2px] bg-brand-red"></span>
                  <span className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px]">
                    About VR Dizi
                  </span>
                </motion.div>
                
                {/* H1 is crucial for SEO. It clearly states the core value proposition. */}
                <motion.h1 variants={fadeUp} className="font-poppins text-4xl sm:text-5xl md:text-[44px] font-semibold text-brand-navy leading-[1.3] tracking-tight mb-6">
                  Empowering Homes. <br />
                  <span className="italic font-normal text-slate-400">Securing Businesses.</span>
                </motion.h1>
                
                <motion.p variants={fadeUp} className="font-inter text-slate-500 text-[16px] md:text-[17px] max-w-lg leading-[1.7] mb-10 font-normal">
                  We are Hyderabad’s premier manpower solutions firm, dedicated to bringing highly verified, reliable professionals right to your doorstep.
                </motion.p>
                
                <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div>
                    <p className="font-poppins text-4xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy mb-2">10k+</p>
                    <p className="font-inter text-[14px] text-slate-500 font-semibold uppercase tracking-widest">Background Checks</p>
                  </div>
                  <div>
                    <p className="font-poppins text-4xl md:text-[44px] font-semibold leading-[1.3] text-brand-red mb-2">48hr</p>
                    <p className="font-inter text-[14px] text-slate-500 font-semibold uppercase tracking-widest">Replacement Guarantee</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative h-[450px] sm:h-[550px] lg:h-[650px]"
              >
                <div className="absolute top-10 -right-4 lg:-right-10 w-2/3 h-full bg-slate-50 rounded-3xl z-0 border border-slate-100"></div>
                
                <div className="absolute inset-0 right-10 bottom-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] z-10 bg-white">
                  {/* Added a more descriptive alt text for the image */}
                  <img src={AboutIMG} alt="Professional VR Dizi caretaker assisting a client in Hyderabad" className="w-full h-full object-cover opacity-95" />
                </div>
                
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-4 bottom-24 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl z-20 border border-white flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <ShieldCheck size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-poppins text-brand-navy font-semibold text-[16px] leading-[1.3]">100% Verified</p>
                    <p className="font-inter text-slate-500 text-[14px] uppercase tracking-wider font-medium">Trusted Personnel</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. PURPOSE, MISSION & VISION */}
        <section className="py-20 px-4 sm:px-6 bg-white border-y border-slate-100" aria-label="Our Mission and Vision">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                className="w-full lg:w-1/2 lg:sticky lg:top-32"
              >
                <h2 className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px] mb-4">Our Purpose</h2>
                <h3 className="font-poppins text-3xl sm:text-4xl md:text-[32px] font-semibold text-brand-navy tracking-tight mb-8 leading-[1.3]">
                  Transforming an unorganized sector into a <span className="italic font-normal text-slate-400">pillar of trust.</span>
                </h3>
                <div className="font-inter space-y-6 text-slate-500 text-[16px] md:text-[17px] leading-[1.7] font-normal">
                  <p>For too long, finding reliable domestic help, compassionate caretakers, or professional security has been a stressful and uncertain process for families and businesses alike. We created VR Dizi to change that narrative completely.</p>
                  <p>We aren't just placing workers; we are restoring peace of mind. By heavily vetting our staff and enforcing strict quality standards, we achieve two vital things: giving you back your time and safety, while empowering skilled professionals with dignified, structured employment.</p>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className="w-full lg:w-1/2 flex flex-col gap-8"
              >
                <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-shadow duration-500 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-8 text-brand-navy group-hover:text-brand-red group-hover:bg-red-50 transition-colors">
                    <Target size={24} aria-hidden="true" />
                  </div>
                  {/* Changed from h4 to h3 to maintain logical heading structure within this section */}
                  <h3 className="font-poppins text-[24px] font-semibold leading-[1.3] text-brand-navy mb-4">Our Mission</h3>
                  <p className="font-inter text-slate-500 text-[16px] leading-[1.7] font-normal">To deliver highly verified, impeccably trained, and compassionate manpower solutions. We strive to seamlessly integrate reliable care and uncompromising security into the daily lives of our clients across Hyderabad.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-brand-navy rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[80px]"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-8 text-white backdrop-blur-sm">
                      <Eye size={24} aria-hidden="true" />
                    </div>
                    {/* Changed from h4 to h3 to maintain logical heading structure */}
                    <h3 className="font-poppins text-[24px] font-semibold leading-[1.3] text-white mb-4">Our Vision</h3>
                    <p className="font-inter text-white/70 text-[16px] leading-[1.7] font-normal">To become the absolute gold standard for facility and domestic staffing in the region. We envision a future where hiring help is entirely devoid of risk, where hard-working professionals are respected, and where every home operates in total harmony.</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. CORE VALUES */}
        <section className="py-20 px-4 sm:px-6 bg-white" aria-label="Our Core Values and Standards">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <h2 className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px] mb-4">Our Standards</h2>
              <p className="font-poppins text-3xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy tracking-tight">
                Built on a foundation of <br />
                <span className="italic font-normal text-slate-400">absolute trust and care.</span>
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500">
                <span className="font-poppins text-slate-200 font-semibold text-[44px] leading-[1.3] block mb-6">01</span>
                <h3 className="font-poppins text-[24px] font-semibold text-brand-navy mb-4 leading-[1.3]">Uncompromising Safety</h3>
                <p className="font-inter text-slate-500 text-[16px] leading-[1.7] font-normal">Inviting someone into your home or business requires absolute trust. We enforce a rigorous background verification process before anyone joins our roster.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500">
                <span className="font-poppins text-brand-red/20 font-semibold text-[44px] leading-[1.3] block mb-6">02</span>
                <h3 className="font-poppins text-[24px] font-semibold text-brand-navy mb-4 leading-[1.3]">Specialized Excellence</h3>
                <p className="font-inter text-slate-500 text-[16px] leading-[1.7] font-normal">From clinically trained nurses to experienced nannies and ex-servicemen security guards, we ensure our personnel have the exact training required.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500">
                <span className="font-poppins text-slate-200 font-semibold text-[44px] leading-[1.3] block mb-6">03</span>
                <h3 className="font-poppins text-[24px] font-semibold text-brand-navy mb-4 leading-[1.3]">Reliability Guarantee</h3>
                <p className="font-inter text-slate-500 text-[16px] leading-[1.7] font-normal">We understand that staffing disruptions are stressful. Our dedicated account managers provide a strict 48-hour replacement guarantee.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 4. SAFETY PROTOCOL */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100" aria-label="Our 7-Step Vetting Protocol">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px] mb-4">Security First</h2>
              <p className="font-poppins text-3xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy tracking-tight">
                The VR Dizi <span className="italic font-normal text-slate-500">7-Step Vetting Protocol</span>
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
            >
              {['Identity Verification', 'Criminal Record Scan', 'Previous Employer Check', 'Medical Screening', 'Behavioral Interview', 'Skill Certification', 'Continuous Monitoring'].map((step, index) => (
                <motion.div key={index} variants={fadeUp} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-poppins text-slate-200 font-semibold italic text-[32px] leading-[1.3] block mb-3">0{index + 1}</span>
                  <p className="font-inter text-brand-navy text-[16px] font-semibold leading-[1.3]">{step}</p>
                </motion.div>
              ))}
              
              <motion.div variants={fadeUp} className="bg-brand-red rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-[0_10px_30px_rgba(190,22,34,0.2)] hover:-translate-y-1 transition-transform">
                <Shield className="w-8 h-8 text-white mb-3" aria-hidden="true" />
                <p className="font-inter text-white text-[14px] font-bold uppercase tracking-widest">100% Secure</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 5. LEADERSHIP */}
        <section className="py-20 px-4 sm:px-6 bg-white" aria-label="Leadership Team">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="w-full md:w-5/12"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* Better alt text for accessibility and context */}
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Anuradha, Managing Partner at VR Dizi" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className="w-full md:w-7/12"
              >
                <motion.h2 variants={fadeUp} className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px] mb-4">Leadership</motion.h2>
                <motion.h3 variants={fadeUp} className="font-poppins text-[44px] leading-[1.3] text-brand-navy font-semibold mb-2">Anuradha</motion.h3>
                <motion.p variants={fadeUp} className="font-inter text-slate-500 text-[14px] tracking-widest uppercase mb-10 font-semibold">Managing Partner, VR Dizi</motion.p>
                
                <motion.div variants={fadeUp} className="font-inter space-y-6 text-slate-500 text-[16px] md:text-[17px] leading-[1.7] font-normal mb-12">
                  <p>"When we started VR Dizi, our goal was profoundly personal: to bring absolute peace of mind to your doorstep. The manpower industry is often fragmented, but we believed it needed a standard of uncompromising professionalism."</p>
                  <p>"Whether it is caring for your aging parents, preparing your daily meals, nurturing your children, or securing your corporate office, we know that trust is the foundation of everything we do. We don't take shortcuts."</p>
                  <p className="font-medium text-brand-navy italic">"Your family's safety and your business's security are our highest priority."</p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-100">
                  <a href="tel:+918688995438" className="font-inter px-8 py-4 bg-brand-navy hover:bg-brand-red text-white text-[16px] font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Contact Directly
                  </a>
                  <a href="https://www.vrdizi.com" target="_blank" rel="noreferrer" className="font-inter text-slate-500 hover:text-brand-red text-[14px] font-semibold uppercase tracking-widest transition-colors">
                    Visit Website &rarr;
                  </a>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 6. BOTTOM CTA */}
        <section className="py-20 px-4 sm:px-6 bg-white border-t border-slate-100 text-center" aria-label="Call to Action">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="container mx-auto max-w-2xl"
          >
            <h2 className="font-poppins text-3xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy mb-6 tracking-tight">
              Ready to find your perfect match?
            </h2>
            <p className="font-inter text-slate-500 text-[16px] md:text-[17px] mb-10 leading-[1.7] font-normal">
              Connect with our resourcing team in Hyderabad to discuss your family or facility requirements today.
            </p>
            <Link to="/contact" className="font-inter inline-block px-10 py-4 bg-brand-red text-white text-[16px] font-semibold rounded-xl hover:bg-brand-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Initiate Contact
            </Link>
          </motion.div>
        </section>

      </main>
    </>
  );
};

export default AboutPage;