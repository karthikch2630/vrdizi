import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Zap, Target, Headphones } from 'lucide-react'; 
import ContactModal from './ContactModal';
import Security from "../assets/security.png";
import Maids from "../assets/maids.png";
import Nurses from "../assets/nurses.png";
import { Link } from 'react-router-dom';

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
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 }
  }
};

const springRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 }
  }
};

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[100svh] bg-brand-navy flex flex-col items-center justify-start md:justify-center py-40 overflow-hidden font-inter px-4 sm:px-6">

        {/* Ambient Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[80vw] h-[60vh] bg-white/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-0"
        ></motion.div>

        <div className="relative z-30 w-full max-w-6xl flex flex-col items-center">

          {/* Text Container */}
          <motion.div
            className="max-w-4xl text-center flex flex-col items-center relative z-30"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={fadeUp} 
              className="font-poppins text-3xl sm:text-4xl md:text-[44px] leading-[1.3] font-semibold text-white mb-6 tracking-tight"
            >
              End-to-End Staffing <br className="hidden sm:block" /> Solutions <br className="sm:hidden" />
              <span className="text-white/80 font-normal text-xl sm:text-2xl md:text-[32px] block mt-2">
                For Every Need
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeUp} 
              className="font-inter text-white/70 text-[16px] md:text-[17px] max-w-2xl mb-10 font-normal leading-[1.7] px-1"
            >
              We provide trusted and verified manpower solutions for homes, apartments, and corporate institutions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="font-inter w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white text-[16px] font-semibold rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(190,22,34,0.3)]"
              >
                Hire Staff
                <Zap size={18} fill="currentColor" />
              </button>
              <Link to="/contact" className="font-inter w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-[16px] font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Reach Us
              </Link>
            </motion.div>
          </motion.div>

          {/* --- IMAGE CUBES --- */}
          <div className="flex flex-row flex-nowrap items-center justify-center gap-4 w-full z-20 px-1 mt-6 mb-12 lg:absolute lg:inset-0 lg:mb-0 lg:justify-between lg:px-2 xl:px-10 lg:pointer-events-none">
            
            <div className="flex flex-row gap-4 lg:flex-col lg:gap-16 xl:gap-24 lg:pointer-events-auto lg:-translate-y-16">
              <motion.div variants={springLeft} initial="hidden" animate="visible" className="relative w-20 h-20 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-2xl group shrink-0 transition-transform duration-500 lg:translate-x-4">
                <div className="w-full h-full relative">
                  <img src={Maids} alt="Maids" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90"></div>
                  <span className="absolute bottom-2 left-0 w-full text-center text-[11px] font-poppins font-bold text-white tracking-wider uppercase">Maids</span>
                </div>
              </motion.div>

              <motion.div variants={springLeft} initial="hidden" animate="visible" className="relative w-20 h-20 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-2xl group shrink-0 transition-transform duration-500 lg:-translate-x-8">
                <div className="w-full h-full relative">
                  <img src={Nurses} alt="Nurses" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90"></div>
                  <span className="absolute bottom-2 left-0 w-full text-center text-[11px] font-poppins font-bold text-white tracking-wider uppercase">Nurses</span>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-row gap-4 lg:flex-col lg:gap-16 xl:gap-24 lg:pointer-events-auto lg:-translate-y-16">
              <motion.div variants={springRight} initial="hidden" animate="visible" className="relative w-20 h-20 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-2xl group shrink-0 transition-transform duration-500 lg:-translate-x-4">
                <div className="w-full h-full relative">
                  <img src={Security} alt="Security" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90"></div>
                  <span className="absolute bottom-2 left-0 w-full text-center text-[11px] font-poppins font-bold text-white tracking-wider uppercase">Security</span>
                </div>
              </motion.div>

              <motion.div variants={springRight} initial="hidden" animate="visible" className="relative w-20 h-20 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-xl overflow-hidden border border-white/20 shadow-2xl group shrink-0 transition-transform duration-500 lg:translate-x-8">
                <div className="w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="Execs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90"></div>
                  <span className="absolute bottom-2 left-0 w-full text-center text-[11px] font-poppins font-bold text-white tracking-wider uppercase">Execs</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- BOTTOM CARDS (USING ICON COMPONENTS) --- */}
          <motion.div
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 z-40 mt-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { 
                title: "Verified & Vetted", 
                desc: "Rigorous 5-step checks.", 
                icon: <ShieldCheck size={20} /> 
              },
              { 
                title: "Quick Deploy", 
                desc: "Placed within 48 hours.", 
                icon: <Zap size={20} /> 
              },
              { 
                title: "Precision Match", 
                desc: "Aligned to your needs.", 
                icon: <Target size={20} /> 
              },
              { 
                title: "24/7 Support", 
                desc: "Round-the-clock help.", 
                icon: <Headphones size={20} /> 
              }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 shadow-lg group">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 text-brand-red group-hover:text-white">
                  {card.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-poppins text-white font-semibold text-[14px] leading-tight">{card.title}</h3>
                  <p className="font-inter text-white/50 text-[12px] font-normal mt-1 leading-snug hidden sm:block">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;