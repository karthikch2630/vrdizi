import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Security from "../assets/security.png";
import Maids from "../assets/maids.png";
import Nurses from "../assets/nurses.png";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const springLeft: Variants = {
  hidden: { opacity: 0, x: -60, rotate: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: [null, -15, -6], 
    transition: { type: "spring", bounce: 0.4, duration: 1.2 } 
  }
};

const springRight: Variants = {
  hidden: { opacity: 0, x: 60, rotate: 10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: [null, 15, 6], 
    transition: { type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 } 
  }
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-[#00082d] flex flex-col items-center justify-start md:justify-center pt-32 pb-10 overflow-hidden font-sans px-4 sm:px-6">

      {/* Responsive Background Ambient Glow (Fades in slowly) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[80vw] h-[60vh] bg-white/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-0"
      ></motion.div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-30 w-full max-w-6xl flex flex-col items-center">

        {/* Text Container */}
        <motion.div 
          className="max-w-4xl text-center flex flex-col items-center relative z-30"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Responsive Serif Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl leading-[1.15] min-[400px]:text-[2.5rem] sm:text-6xl lg:text-[4.5rem] font-serif text-white mb-4 sm:mb-6 tracking-tight">
            End-to-End Staffing <br className="hidden sm:block" /> Solutions <br className="sm:hidden"/>
            <span className="italic text-white/80 font-light text-[1.35rem] min-[400px]:text-2xl sm:text-4xl lg:text-5xl block mt-2">
              — From Maids to Management.
            </span>
          </motion.h1>

          {/* Compact Subheadline */}
          <motion.p variants={fadeUp} className="text-white/70 text-sm sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 font-light leading-relaxed px-1">
            We provide trusted and verified manpower solutions for homes, apartments, and corporate institutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-14 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-[#be1622] text-white text-sm font-semibold rounded-lg hover:bg-[#a0121d] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgb(190,22,34,0.3)]">
              Hire Staff
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300">
              Request a Quote
            </button>
          </motion.div>
        </motion.div>

        {/* --- STATIC IMAGE CUBES --- */}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-4 w-full z-20 px-1 mt-6 mb-12 sm:mt-0 sm:mb-16 lg:absolute lg:inset-0 lg:mb-0 lg:justify-between lg:px-2 xl:px-10 lg:pointer-events-none">
          
          {/* LEFT GROUP (Maids & Nurses) */}
          <div className="flex flex-row gap-2 sm:gap-4 lg:flex-col lg:gap-16 xl:gap-24 lg:pointer-events-auto lg:-translate-y-16">
            
            {/* Cube 1: Maids */}
            <motion.div 
              variants={springLeft} 
              initial="hidden" 
              animate="visible"
              className="relative w-[4.2rem] h-[4.2rem] sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group shrink-0 lg:-rotate-6 hover:!rotate-0 transition-transform duration-500 lg:translate-x-4"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                className="w-full h-full"
              >
                <img src={Maids} alt="Maid Staffing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-[#00082d]/20 to-transparent opacity-90"></div>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full text-center text-[9px] sm:text-[10px] md:text-xs font-bold text-white tracking-wider uppercase drop-shadow-md">
                  Maids
                </span>
              </motion.div>
            </motion.div>

            {/* Cube 2: Nurses */}
            <motion.div 
              variants={springLeft} 
              initial="hidden" 
              animate="visible"
              className="relative w-[4.2rem] h-[4.2rem] sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group shrink-0 lg:rotate-3 hover:!rotate-0 transition-transform duration-500 lg:-translate-x-8 xl:-translate-x-12"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-full h-full"
              >
                <img src={Nurses} alt="Nurse Staffing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-[#00082d]/20 to-transparent opacity-90"></div>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full text-center text-[9px] sm:text-[10px] md:text-xs font-bold text-white tracking-wider uppercase drop-shadow-md">
                  Nurses
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT GROUP (Security & Executives) */}
          <div className="flex flex-row gap-2 sm:gap-4 lg:flex-col lg:gap-16 xl:gap-24 lg:pointer-events-auto lg:-translate-y-16">
            
            {/* Cube 3: Security */}
            <motion.div 
              variants={springRight} 
              initial="hidden" 
              animate="visible"
              className="relative w-[4.2rem] h-[4.2rem] sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group shrink-0 lg:rotate-6 hover:!rotate-0 transition-transform duration-500 lg:-translate-x-4 xl:-translate-x-8"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-full h-full"
              >
                <img src={Security} alt="Security Guard Staffing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-[#00082d]/20 to-transparent opacity-90"></div>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full text-center text-[9px] sm:text-[10px] md:text-xs font-bold text-white tracking-wider uppercase drop-shadow-md">
                  Security
                </span>
              </motion.div>
            </motion.div>

            {/* Cube 4: Executives */}
            <motion.div 
              variants={springRight} 
              initial="hidden" 
              animate="visible"
              className="relative w-[4.2rem] h-[4.2rem] sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group shrink-0 lg:-rotate-3 hover:!rotate-0 transition-transform duration-500 lg:translate-x-8 xl:translate-x-12"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="w-full h-full"
              >
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300" alt="Executive Staffing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-[#00082d]/20 to-transparent opacity-90"></div>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full text-center text-[9px] sm:text-[10px] md:text-xs font-bold text-white tracking-wider uppercase drop-shadow-md">
                  Execs
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* --- BOTTOM: 4 FEATURE CARDS --- */}
        <motion.div 
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 z-40 mt-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 sm:gap-4 shadow-lg group cursor-default">
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-[#be1622]/20 flex items-center justify-center group-hover:bg-[#be1622] transition-colors duration-300 text-[#be1622] group-hover:text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold text-[12px] sm:text-sm leading-tight">Verified & Vetted</h3>
              <p className="text-white/50 text-[11px] sm:text-xs font-light mt-0.5 sm:mt-1 leading-snug hidden sm:block md:hidden lg:block xl:block">Rigorous 5-step checks.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 sm:gap-4 shadow-lg group cursor-default">
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-[#be1622]/20 flex items-center justify-center group-hover:bg-[#be1622] transition-colors duration-300 text-[#be1622] group-hover:text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold text-[12px] sm:text-sm leading-tight">Quick Deploy</h3>
              <p className="text-white/50 text-[11px] sm:text-xs font-light mt-0.5 sm:mt-1 leading-snug hidden sm:block md:hidden lg:block xl:block">Placed within 48 hours.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 sm:gap-4 shadow-lg group cursor-default">
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-[#be1622]/20 flex items-center justify-center group-hover:bg-[#be1622] transition-colors duration-300 text-[#be1622] group-hover:text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold text-[12px] sm:text-sm leading-tight">Precision Match</h3>
              <p className="text-white/50 text-[11px] sm:text-xs font-light mt-0.5 sm:mt-1 leading-snug hidden sm:block md:hidden lg:block xl:block">Aligned to your needs.</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 sm:gap-4 shadow-lg group cursor-default">
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-[#be1622]/20 flex items-center justify-center group-hover:bg-[#be1622] transition-colors duration-300 text-[#be1622] group-hover:text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold text-[12px] sm:text-sm leading-tight">24/7 Support</h3>
              <p className="text-white/50 text-[11px] sm:text-xs font-light mt-0.5 sm:mt-1 leading-snug hidden sm:block md:hidden lg:block xl:block">Round-the-clock help.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;