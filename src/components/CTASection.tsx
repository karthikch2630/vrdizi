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

const CTASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* SECTION PADDING: 80px (py-20) | Default Body: Inter */}
      <section className="py-20 bg-white font-inter px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          
          <motion.div 
            className="relative bg-brand-navy rounded-[2.5rem] p-10 sm:p-16 lg:p-24 overflow-hidden shadow-[0_20px_60px_rgba(0,8,45,0.15)] text-center flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* --- Background Decorative Elements --- */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red rounded-full blur-[150px] opacity-40 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-red rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
            
            {/* Abstract Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            {/* --- Content --- */}
            <motion.div variants={fadeUp} className="relative z-10 inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-6 sm:w-10 h-[2px] bg-brand-red"></span>
              {/* Tag: Inter | 14px (No smaller than 14px!) */}
              <span className="font-inter text-brand-red font-semibold uppercase tracking-[0.4em] text-[14px]">
                Take The Next Step
              </span>
              <span className="w-6 sm:w-10 h-[2px] bg-brand-red"></span>
            </motion.div>

            {/* H2 Title: Poppins | 44px | Line-height 1.3 */}
            <motion.h2 variants={fadeUp} className="font-poppins relative z-10 text-3xl sm:text-4xl md:text-[44px] font-semibold text-white leading-[1.3] tracking-tight mb-6 max-w-3xl">
              Ready to secure your <br className="hidden sm:block" />
              <span className="italic font-normal text-white/70">ideal workforce?</span>
            </motion.h2>

            {/* Paragraph: Inter | 17px | Line-height 1.7 */}
            <motion.p variants={fadeUp} className="font-inter relative z-10 text-white/70 text-[16px] md:text-[17px] max-w-2xl leading-[1.7] font-normal mb-12">
              Join hundreds of satisfied families and top-tier corporations across Hyderabad. Experience seamless, verified, and professional staffing solutions today.
            </motion.p>

            {/* --- Action Buttons --- */}
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
              
              {/* Primary Button: Hire Staff | Inter | 16px | Semi-bold (600) */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="font-inter w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 sm:py-5 bg-brand-red text-white text-[16px] font-semibold rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_10px_30px_rgba(190,22,34,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] group"
              >
                Hire Staff Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Button: Apply for Job | Inter | 16px | Semi-bold (600) */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="font-inter w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 sm:py-5 bg-transparent border border-white/20 text-white text-[16px] font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
              >
                Apply as Professional
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 opacity-70 group-hover:opacity-100" />
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