import React from 'react';
import { motion, type Variants } from 'framer-motion';
import MaidService from "../assets/Maid-Service.png";
import Cookscaretakers from "../assets/Cooks-caretakers.png";
import Nannies from "../assets/nannies-childcare.png";
import Nurse from "../assets/Nurse-front.png";
import Security from "../assets/security-guards.png";

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

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#00082d] font-sans px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header - Compact and Elegant */}
        <motion.div 
          className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2 className="text-[#be1622] font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2">Our Expertise</h2>
          <p className="text-3xl sm:text-5xl font-serif text-white leading-tight tracking-tight">
            Specialized Staffing for <br className="hidden sm:block" />
            <span className="italic font-light text-white/80">Every Requirement.</span>
          </p>
        </motion.div>

        {/* --- STUNNING HYBRID BENTO GRID --- */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 h-auto md:h-[550px] lg:h-[600px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          
          {/* 1. Domestic Help */}
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-2 lg:col-span-1 relative group rounded-2xl overflow-hidden bg-[#00041a] border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#be1622]/30 cursor-pointer h-[350px] sm:h-80 md:h-auto flex flex-col">
            <div className="relative z-20 p-5 sm:p-6 flex flex-col h-full justify-start md:justify-end">
              <span className="inline-flex bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase mb-2 self-start border border-emerald-500/20 backdrop-blur-md">
                Domestic
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-none tracking-tighter mb-2">
                Housekeeping <br className="hidden lg:block"/> & Maids
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Professional cleaning & house management.
              </p>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={MaidService} className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center opacity-40 grayscale-[20%] transition-transform duration-700 group-hover:scale-105" alt="Maid Staffing" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00082d] via-transparent to-[#00082d] md:bg-gradient-to-t md:from-[#00082d] md:via-[#00082d]/40 md:to-transparent"></div>
            </div>
          </motion.div>

          {/* 2. Cooks */}
          <motion.div variants={fadeUp} className="col-span-1 relative group rounded-2xl overflow-hidden bg-[#00041a] border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#be1622]/30 cursor-pointer h-64 md:h-auto flex flex-col">
            <div className="relative z-20 p-5 flex flex-col h-full justify-end">
              <span className="inline-flex bg-amber-500/10 text-amber-400 text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase mb-2 self-start border border-amber-500/20 backdrop-blur-md">
                Culinary
              </span>
              <h3 className="text-white text-lg sm:text-xl font-bold leading-none tracking-tighter">
                Cooks & <br/> Chefs
              </h3>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Cookscaretakers} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[20%] transition-transform duration-700 group-hover:scale-105" alt="Cooks" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* 3. Nannies - CENTERPIECE */}
          <motion.div variants={fadeUp} className="col-span-1 relative group rounded-2xl overflow-hidden bg-white border-b-4 border-[#be1622] shadow-[0_0_40px_rgba(190,22,34,0.15)] transition-all duration-500 cursor-pointer h-64 md:h-auto flex flex-col">
            <div className="relative z-20 p-5 flex flex-col h-full justify-end">
              <span className="inline-flex bg-[#be1622] text-white text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase mb-2 self-start shadow-md">
                Childcare
              </span>
              <h3 className="text-white text-lg sm:text-xl font-bold leading-none tracking-tighter drop-shadow-md">
                Nannies & <br/> Babysitters
              </h3>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Nannies} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Nanny" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d]/80 via-[#00082d]/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* 4. Nursing */}
          <motion.div variants={fadeUp} className="col-span-1 relative group rounded-2xl overflow-hidden bg-[#00041a] border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#be1622]/30 cursor-pointer h-64 md:h-auto flex flex-col">
            <div className="relative z-20 p-5 flex flex-col h-full justify-end">
              <span className="inline-flex bg-sky-500/10 text-sky-400 text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase mb-2 self-start border border-sky-500/20 backdrop-blur-md">
                Health
              </span>
              <h3 className="text-white text-lg sm:text-xl font-bold leading-none tracking-tighter">
                Medical <br/> Nursing
              </h3>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Nurse} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[20%] transition-transform duration-700 group-hover:scale-105" alt="Nurse" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* 5. Security */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2 lg:col-span-1 relative group rounded-2xl overflow-hidden bg-[#00041a] border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#be1622]/30 cursor-pointer h-64 md:h-auto md:col-start-2 lg:col-start-5 flex flex-col">
            <div className="relative z-20 p-5 flex flex-col h-full justify-end">
              <span className="inline-flex bg-[#be1622]/10 text-[#be1622] text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase mb-2 self-start border border-[#be1622]/20 backdrop-blur-md">
                Security
              </span>
              <h3 className="text-white text-lg sm:text-xl font-bold leading-none tracking-tighter">
                Guards & <br/> Watchmen
              </h3>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Security} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[20%] transition-transform duration-700 group-hover:scale-105" alt="Security" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-transparent to-transparent"></div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;