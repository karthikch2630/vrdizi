import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Headphones } from 'lucide-react'; // Using Lucide icons
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
    <main className="font-inter bg-white pt-28 lg:pt-32 pb-10 overflow-hidden min-h-screen">
      
      {/* =========================================
          1. PAGE HEADER
      ========================================= */}
      <section className="px-4 sm:px-6 mb-20 lg:mb-24">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6">
            <span className="w-6 sm:w-8 h-[2px] bg-brand-red"></span>
            {/* Tag: Poppins | 14px (No smaller!) */}
            <span className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px]">Our Expertise</span>
            <span className="w-6 sm:w-8 h-[2px] bg-brand-red"></span>
          </motion.div>
          
          {/* H1: Poppins | 44px | Line-height 1.3 */}
          <motion.h1 variants={fadeUp} className="font-poppins text-4xl sm:text-5xl md:text-[44px] font-semibold text-brand-navy leading-[1.3] tracking-tight mb-6 lg:mb-8">
            Premium Staffing <br />
            <span className="italic font-normal text-slate-400">for Every Need.</span>
          </motion.h1>
          
          {/* Paragraph: Inter | 17px | Line-height 1.7 */}
          <motion.p variants={fadeUp} className="font-inter text-slate-500 text-[16px] md:text-[17px] max-w-2xl mx-auto leading-[1.7] font-normal px-2">
            From maintaining the sanctity of your home to securing your corporate assets, VR Dizi provides specialized, heavily vetted personnel tailored to your exact requirements.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          2. SERVICES (EDITORIAL ZIG-ZAG LAYOUT)
      ========================================= */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="container mx-auto max-w-7xl flex flex-col gap-20 md:gap-24 lg:gap-32">
          
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className={`flex flex-col gap-10 lg:gap-20 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
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
                  <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply transition-opacity lg:group-hover:opacity-0"></div>
                </div>
                
                {/* Decorative floating block */}
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-32 bg-brand-red rounded-full blur-[40px] opacity-20 pointer-events-none ${service.reverse ? '-left-10' : '-right-10'}`}></div>
              </motion.div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <motion.div variants={fadeUp} className="mb-4">
                  {/* Number: Poppins | 56px */}
                  <span className="font-poppins text-slate-200 font-semibold text-[44px] lg:text-[56px] block mb-2 leading-[1.3]">0{index + 1}</span>
                  {/* H2: Poppins | 32px */}
                  <h2 className="font-poppins text-2xl sm:text-[32px] font-semibold text-brand-navy tracking-tight leading-[1.3]">{service.title}</h2>
                  {/* Subtitle: Inter | 14px */}
                  <p className="font-inter text-brand-red text-[14px] font-semibold tracking-widest uppercase mt-2 lg:mt-3">{service.subtitle}</p>
                </motion.div>
                
                {/* Paragraph: Inter | 16px */}
                <motion.p variants={fadeUp} className="font-inter text-slate-500 text-[16px] leading-[1.7] font-normal mb-8 lg:mb-10">
                  {service.description}
                </motion.p>
                
                <motion.ul variants={fadeUp} className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-red">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                      </div>
                      {/* Features: Inter | 16px */}
                      <span className="font-inter text-slate-600 text-[16px] font-medium">{feature}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  {/* Link Button: Inter | 16px | Semi-bold (600) */}
                  <Link 
                    to="/contact" 
                    className="font-inter inline-flex items-center justify-center w-full lg:w-auto gap-3 px-6 py-4 lg:px-0 lg:py-0 bg-brand-navy lg:bg-transparent text-white lg:text-brand-navy hover:bg-brand-red lg:hover:bg-transparent lg:hover:text-brand-red text-[16px] font-semibold rounded-xl lg:rounded-none group transition-all"
                  >
                    Inquire About Service
                    <ArrowRight size={18} className="lg:group-hover:translate-x-1 transition-transform" />
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
      {/* SECTION PADDING: 80px (py-20) */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200"
          >
            <motion.div variants={fadeUp} className="pt-8 md:pt-0 md:px-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-navy">
                <ShieldCheck size={24} />
              </div>
              {/* H4: Poppins | 20px | Semi-bold */}
              <h4 className="font-poppins text-[20px] font-semibold text-brand-navy mb-2 leading-[1.3]">100% Verified Staff</h4>
              {/* P: Inter | 14px | Line-height 1.7 */}
              <p className="font-inter text-slate-500 text-[14px] leading-[1.7] font-normal px-4 md:px-0">Every candidate passes a strict 7-step background and behavioral check.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8 md:pt-0 md:px-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-navy">
                <Clock size={24} />
              </div>
              <h4 className="font-poppins text-[20px] font-semibold text-brand-navy mb-2 leading-[1.3]">48-Hour Replacement</h4>
              <p className="font-inter text-slate-500 text-[14px] leading-[1.7] font-normal px-4 md:px-0">If a placement isn't the perfect fit, we provide a replacement within 48 hours.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8 md:pt-0 md:px-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-navy">
                <Headphones size={24} />
              </div>
              <h4 className="font-poppins text-[20px] font-semibold text-brand-navy mb-2 leading-[1.3]">Dedicated Support</h4>
              <p className="font-inter text-slate-500 text-[14px] leading-[1.7] font-normal px-4 md:px-0">Your personal account manager is available around the clock to assist you.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. BOTTOM CTA
      ========================================= */}
      <section className="py-20 px-4 sm:px-6 bg-white text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="container mx-auto max-w-2xl"
        >
          {/* H2: Poppins | 44px | Semi-bold */}
          <h2 className="font-poppins text-3xl md:text-[44px] font-semibold text-brand-navy mb-6 tracking-tight leading-[1.3]">
            Ready to secure your staff?
          </h2>
          {/* P: Inter | 17px | Line-height 1.7 */}
          <p className="font-inter text-slate-500 text-[16px] md:text-[17px] mb-10 leading-[1.7] font-normal">
            Fill out a simple inquiry form, and our placement specialists in Hyderabad will respond immediately.
          </p>
          {/* CTA Button: Inter | 16px | Semi-bold */}
          <Link to="/contact" className="font-inter inline-block w-full sm:w-auto px-10 py-4 bg-brand-red text-white text-[16px] font-semibold rounded-xl hover:bg-brand-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Start Your Request
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default ServicesPage;