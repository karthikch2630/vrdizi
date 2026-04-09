import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutIMG from "../assets/About-vrdizi.png"; // Ensure this image path is correct

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1.2 } 
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#00082d] font-sans overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: ARCHITECTURAL IMAGE STACK --- */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Ambient Glow behind images to match Hero */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#be1622]/10 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative">
              {/* Main Image with Glassmorphic Border */}
              <motion.div variants={imageReveal} className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform -rotate-2 group hover:rotate-0 transition-all duration-700 bg-white/5 p-2">
                <img 
                  src={AboutIMG} 
                  alt="Our Team" 
                  className="w-full h-[350px] sm:h-[500px] object-cover rounded-2xl grayscale-[30%] group-hover:grayscale-0 transition-all"
                />
              </motion.div>

              {/* Floating Dashboard Card (Experience) */}
              <motion.div 
                variants={popIn} 
                className="absolute -bottom-6 -right-2 sm:-right-8 bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 max-w-[260px] group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#be1622] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(190,22,34,0.4)]">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-2xl font-black text-white leading-none tracking-tighter">12+ Years</p>
                  <p className="text-[9px] uppercase font-bold text-white/50 tracking-[0.2em] mt-1.5">Market Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: THE STORY & DASHBOARD GRID --- */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[#be1622]"></span>
              <span className="text-[#be1622] font-bold uppercase tracking-[0.4em] text-[10px]">VR Dizi Legacy</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Redefining Trust in <br />
              <span className="italic font-light text-white/40">Manpower Solutions.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-base sm:text-lg leading-relaxed mb-12 font-light max-w-xl">
              Founded on absolute reliability, <span className="text-white font-medium">VR Dizi</span> bridges the gap between skilled professionals and those who need them most. We treat every placement as a strategic partnership.
            </motion.p>

            {/* Trust Grid: Compact & Dashboard Aligned to match Services Section */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-white/10 pt-10">
              
              <div className="flex flex-col gap-2.5 group">
                <span className="inline-flex bg-[#be1622]/10 text-[#be1622] text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase self-start border border-[#be1622]/20">
                  Mission
                </span>
                <p className="text-[13px] sm:text-sm text-white font-medium leading-snug tracking-tight">
                  Providing secure, vetted, and dignified employment to thousands.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 group">
                <span className="inline-flex bg-white/5 text-white/50 text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase self-start border border-white/10">
                  Vision
                </span>
                <p className="text-[13px] sm:text-sm text-white/80 font-medium leading-snug tracking-tight">
                  Global benchmark for ethical and transparent staffing.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 group">
                <span className="inline-flex bg-white/5 text-white/50 text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase self-start border border-white/10">
                  Integrity
                </span>
                <p className="text-[13px] sm:text-sm text-white/80 font-medium leading-snug tracking-tight">
                  Zero hidden fees. 100% transparency in every contract.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 group">
                <span className="inline-flex bg-white/5 text-white/50 text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase self-start border border-white/10">
                  Support
                </span>
                <p className="text-[13px] sm:text-sm text-white/80 font-medium leading-snug tracking-tight">
                  24/7 dedicated account managers for every client.
                </p>
              </div>

            </motion.div>

            {/* Compact CTA link */}
            {/* Compact CTA Button Box */}
            <motion.div variants={fadeUp} className="mt-12 lg:mt-14">
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#00082d] hover:bg-[#be1622] hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] group w-full sm:w-auto"
              >
                Our Full History
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;