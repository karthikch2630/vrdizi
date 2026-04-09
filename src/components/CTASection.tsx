import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
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

const CTASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-24 bg-white font-sans px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          
          <motion.div 
            className="relative bg-[#00082d] rounded-[2.5rem] p-10 sm:p-16 lg:p-24 overflow-hidden shadow-[0_20px_60px_rgba(0,8,45,0.15)] text-center flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* --- Background Decorative Elements --- */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#be1622] rounded-full blur-[150px] opacity-40 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#be1622] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
            
            {/* Abstract Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            {/* --- Content --- */}
            <motion.div variants={fadeUp} className="relative z-10 inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-6 sm:w-10 h-[2px] bg-[#be1622]"></span>
              <span className="text-[#be1622] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-[11px]">Take The Next Step</span>
              <span className="w-6 sm:w-10 h-[2px] bg-[#be1622]"></span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Ready to secure your <br className="hidden sm:block" />
              <span className="italic font-light text-white/70">ideal workforce?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="relative z-10 text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-light mb-12">
              Join hundreds of satisfied families and top-tier corporations across Hyderabad. Experience seamless, verified, and professional staffing solutions today.
            </motion.p>

            {/* --- Action Buttons --- */}
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              
              {/* Primary Button: Hire Staff */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 sm:py-5 bg-[#be1622] text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-[#00082d] transition-all duration-300 shadow-[0_10px_30px_rgba(190,22,34,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] group"
              >
                Hire Staff Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Secondary Button: Apply for Job */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 sm:py-5 bg-transparent border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
              >
                Apply as Professional
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* Inject the Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTASection;