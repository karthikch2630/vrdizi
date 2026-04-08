import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import HouseMaids from "../assets/Housemaids.png"
import Cooks from "../assets/cooks.png"
import ChildCare from "../assets/Childcare.png"
import Healthcare from "../assets/Healthcare.png"
import Watchmen from "../assets/Watchmen.png"

// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut" } 
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

const ServicesPage: React.FC = () => {
  return (
    <main className="font-sans bg-white pt-28 lg:pt-32 pb-10 overflow-hidden min-h-screen">
      
      {/* =========================================
          1. PAGE HEADER
      ========================================= */}
      <section className="px-4 sm:px-6 mb-16 lg:mb-32">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-6 sm:w-8 h-[2px] bg-[#be1622]"></span>
            <span className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[9px] sm:text-[10px]">Our Expertise</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#be1622]"></span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl min-[400px]:text-5xl md:text-6xl lg:text-7xl font-serif text-[#00082d] leading-[1.1] tracking-tight mb-6 lg:mb-8">
            Premium Staffing <br />
            <span className="italic font-light text-slate-400">for Every Need.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light px-2">
            From maintaining the sanctity of your home to securing your corporate assets, VR Dizi provides specialized, heavily vetted personnel tailored to your exact requirements.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          2. SERVICES (EDITORIAL ZIG-ZAG LAYOUT)
      ========================================= */}
      <section className="px-4 sm:px-6 pb-16 lg:pb-20">
        <div className="container mx-auto max-w-7xl flex flex-col gap-16 md:gap-24 lg:gap-32">
          
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className={`flex flex-col gap-8 lg:gap-20 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              
              {/* Image Side */}
              <motion.div variants={imageReveal} className="w-full lg:w-1/2 relative group">
                <div className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-xl lg:shadow-[0_20px_50px_rgba(0,0,0,0.05)] aspect-[4/3] lg:aspect-square bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-90 lg:group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay for premium feel */}
                  <div className="absolute inset-0 bg-[#00082d]/5 mix-blend-multiply transition-opacity lg:group-hover:opacity-0"></div>
                </div>
                
                {/* Decorative floating block (Hidden on mobile for cleaner look) */}
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-32 bg-[#be1622] rounded-full blur-[40px] opacity-20 pointer-events-none ${service.reverse ? '-left-10' : '-right-10'}`}></div>
              </motion.div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <motion.div variants={fadeUp} className="mb-4">
                  <span className="text-slate-200 font-serif italic text-5xl lg:text-6xl block mb-2 leading-none">0{index + 1}</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00082d] tracking-tight">{service.title}</h2>
                  <p className="text-[#be1622] text-xs lg:text-sm font-bold tracking-widest uppercase mt-2 lg:mt-3">{service.subtitle}</p>
                </motion.div>
                
                <motion.p variants={fadeUp} className="text-slate-500 text-sm lg:text-base leading-relaxed font-light mb-6 lg:mb-8">
                  {service.description}
                </motion.p>
                
                <motion.ul variants={fadeUp} className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 lg:mt-1 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-[#be1622]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center w-full lg:w-auto gap-2 px-6 py-3.5 lg:px-0 lg:py-0 bg-[#00082d] lg:bg-transparent text-white lg:text-[#00082d] hover:bg-[#be1622] lg:hover:bg-transparent lg:hover:text-[#be1622] text-[11px] font-bold uppercase tracking-[0.2em] transition-colors rounded-xl lg:rounded-none group"
                  >
                    Inquire About Service
                    <svg className="w-4 h-4 lg:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </motion.div>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* =========================================
          3. THE VR DIZI PROMISE
      ========================================= */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200"
          >
            <motion.div variants={fadeUp} className="py-8 md:py-0 md:px-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-sm text-[#00082d]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-[#00082d] mb-2">100% Verified Staff</h4>
              <p className="text-slate-500 text-xs lg:text-sm font-light px-4 md:px-0">Every candidate passes a strict 7-step background and behavioral check.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="py-8 md:py-0 md:px-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-sm text-[#00082d]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-[#00082d] mb-2">48-Hour Replacement</h4>
              <p className="text-slate-500 text-xs lg:text-sm font-light px-4 md:px-0">If a placement isn't the perfect fit, we provide a replacement within 48 hours.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="py-8 md:py-0 md:px-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-sm text-[#00082d]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-[#00082d] mb-2">Dedicated Support</h4>
              <p className="text-slate-500 text-xs lg:text-sm font-light px-4 md:px-0">Your personal account manager is available around the clock to assist you.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. BOTTOM CTA
      ========================================= */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="container mx-auto max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-[#00082d] mb-4 lg:mb-6 tracking-tight">
            Ready to secure your staff?
          </h2>
          <p className="text-slate-500 text-sm lg:text-base mb-8 lg:mb-10 leading-relaxed font-light">
            Fill out a simple inquiry form, and our placement specialists in Hyderabad will respond immediately.
          </p>
          <Link to="/contact" className="inline-block w-full sm:w-auto px-10 py-4 bg-[#be1622] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#00082d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Start Your Request
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default ServicesPage;