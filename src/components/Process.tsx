import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Using Lucide icon
import ContactModal from './ContactModal';

// --- Animation Variants ---
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

// --- Process Data Array ---
const processSteps = [
  {
    num: "01",
    tag: "Discovery",
    title: "Consultation",
    desc: "Define your specific requirements. We discuss roles, schedules, and budgets to build your exact candidate persona."
  },
  {
    num: "02",
    tag: "Curation",
    title: "Vetting & Selection",
    desc: "Our specialists execute deep-dive interviews and multi-layered checks to present the top 3 most compatible profiles."
  },
  {
    num: "03",
    tag: "Placement",
    title: "Onboarding",
    desc: "Interview and hire. We handle all compliance paperwork and back our placements with a 48-hour replacement guarantee."
  }
];

const Process: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* SECTION PADDING: 80px (py-20) | Default Body: Inter */}
      <section className="py-20 bg-slate-50 font-inter px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          
          {/* --- COMPACT HEADER --- */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            {/* Subheading: Poppins | 14px Minimum */}
            <h2 className="font-poppins text-brand-red font-semibold uppercase tracking-[0.4em] text-[14px] mb-4">
              Our Workflow
            </h2>
            
            {/* H2 Title: Poppins | 44px | Line-height 1.3 */}
            <p className="font-poppins text-3xl md:text-[44px] font-semibold text-brand-navy leading-[1.3] tracking-tight">
              A Seamless Path to <br className="hidden sm:block" />
              <span className="italic font-normal text-slate-500">Reliable Staffing.</span>
            </p>
          </motion.div>

          {/* --- COMPACT 3-STEP GRID --- */}
          <motion.div 
            className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            
            {/* Subtle Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-slate-200 z-0"></div>

            {/* Render Steps */}
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="relative z-10 bg-white border border-slate-200 rounded-3xl p-8 hover:border-brand-red/30 hover:shadow-[0_20px_40px_rgba(190,22,34,0.05)] transition-all duration-500 group">
                
                {/* Number Icon */}
                <div className="font-poppins w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center font-semibold text-lg mb-6 group-hover:bg-brand-red group-hover:-translate-y-1 transition-all duration-300 shadow-md">
                  {step.num}
                </div>
                
                {/* Step Tag: Inter | 14px */}
                <span className="font-inter inline-block px-3 py-1 bg-slate-50 text-slate-500 text-[14px] font-semibold uppercase tracking-widest rounded-md mb-4 border border-slate-100 group-hover:bg-brand-red/5 group-hover:text-brand-red group-hover:border-brand-red/20 transition-colors">
                  {step.tag}
                </span>
                
                {/* Step Title: Poppins | 24px */}
                <h3 className="font-poppins text-[24px] font-semibold text-brand-navy mb-3 leading-[1.3] tracking-tight">
                  {step.title}
                </h3>
                
                {/* Step Desc: Inter | 16px | Line-height 1.7 */}
                <p className="font-inter text-slate-500 text-[16px] leading-[1.7] font-normal">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </motion.div>

          {/* --- COMPACT ACTION BANNER --- */}
          <motion.div 
            className="mt-16 sm:mt-20 bg-brand-navy rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            {/* Decorative Red Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
            
            <div className="relative z-10 text-center md:text-left">
              {/* Banner Title: Poppins | 32px */}
              <h4 className="font-poppins text-white text-2xl sm:text-[32px] font-semibold leading-[1.3] tracking-tight mb-2">
                Ready to hire your perfect match?
              </h4>
              {/* Banner Subtext: Inter | 16px */}
              <p className="font-inter text-white/70 text-[16px] leading-[1.7] font-normal">
                Join hundreds of satisfied clients across Hyderabad.
              </p>
            </div>
            
            {/* Button: Inter | 16px | Semi-bold (600) */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="font-inter relative z-10 shrink-0 px-10 py-4 bg-brand-red hover:bg-white hover:text-brand-navy text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group w-full md:w-auto"
            >
              Get Started
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Inject the Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Process;