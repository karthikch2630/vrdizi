import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Process: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 font-sans px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- COMPACT HEADER --- */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2 className="text-[#be1622] font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2">Our Workflow</h2>
          <p className="text-3xl sm:text-5xl font-serif text-[#00082d] leading-tight tracking-tight">
            A Seamless Path to <br className="hidden sm:block" />
            <span className="italic font-light text-slate-500">Reliable Staffing.</span>
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

          {/* STEP 1 */}
          <motion.div variants={fadeUp} className="relative z-10 bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#be1622]/30 hover:shadow-[0_20px_40px_rgba(190,22,34,0.05)] transition-all duration-500 group">
            {/* Number Icon */}
            <div className="w-12 h-12 bg-[#00082d] text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#be1622] group-hover:-translate-y-1 transition-all duration-300 shadow-md">
              01
            </div>
            <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-md mb-4 border border-slate-100 group-hover:bg-[#be1622]/5 group-hover:text-[#be1622] group-hover:border-[#be1622]/20 transition-colors">
              Discovery
            </span>
            <h4 className="text-xl font-bold text-[#00082d] mb-3 tracking-tight">Consultation</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Define your specific requirements. We discuss roles, schedules, and budgets to build your exact candidate persona.
            </p>
          </motion.div>

          {/* STEP 2 */}
          <motion.div variants={fadeUp} className="relative z-10 bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#be1622]/30 hover:shadow-[0_20px_40px_rgba(190,22,34,0.05)] transition-all duration-500 group">
            {/* Number Icon */}
            <div className="w-12 h-12 bg-[#00082d] text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#be1622] group-hover:-translate-y-1 transition-all duration-300 shadow-md">
              02
            </div>
            <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-md mb-4 border border-slate-100 group-hover:bg-[#be1622]/5 group-hover:text-[#be1622] group-hover:border-[#be1622]/20 transition-colors">
              Curation
            </span>
            <h4 className="text-xl font-bold text-[#00082d] mb-3 tracking-tight">Vetting & Selection</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Our specialists execute deep-dive interviews and multi-layered checks to present the top 3 most compatible profiles.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div variants={fadeUp} className="relative z-10 bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#be1622]/30 hover:shadow-[0_20px_40px_rgba(190,22,34,0.05)] transition-all duration-500 group">
            {/* Number Icon */}
            <div className="w-12 h-12 bg-[#00082d] text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#be1622] group-hover:-translate-y-1 transition-all duration-300 shadow-md">
              03
            </div>
            <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-md mb-4 border border-slate-100 group-hover:bg-[#be1622]/5 group-hover:text-[#be1622] group-hover:border-[#be1622]/20 transition-colors">
              Placement
            </span>
            <h4 className="text-xl font-bold text-[#00082d] mb-3 tracking-tight">Onboarding</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Interview and hire. We handle all compliance paperwork and back our placements with a 48-hour replacement guarantee.
            </p>
          </motion.div>

        </motion.div>

        {/* --- COMPACT ACTION BANNER --- */}
        <motion.div 
          className="mt-16 sm:mt-20 bg-[#00082d] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          {/* Decorative Red Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#be1622] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white text-2xl sm:text-3xl font-serif tracking-tight mb-2">Ready to hire your perfect match?</h4>
            <p className="text-white/60 text-sm sm:text-base font-light">Join hundreds of satisfied clients across Hyderabad.</p>
          </div>
          
          <Link to="/contact" className="relative z-10 shrink-0 px-10 py-4 bg-[#be1622] hover:bg-white hover:text-[#00082d] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-lg flex items-center gap-3 group">
            Get Started
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;