import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  // Track which card is currently being hovered to trigger the expansion
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#00082d] font-sans px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
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

        {/* --- DYNAMIC EXPANDING BENTO GRID --- */}
        {/* Mobile: Grid Layout | Desktop: Flex Accordion Layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[600px] w-full mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          
          {/* 1. Domestic Help */}
          <motion.div 
            variants={fadeUp} 
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative group rounded-3xl overflow-hidden bg-[#00082d] border border-white/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col h-[300px] sm:h-[350px] lg:h-full sm:col-span-2 lg:col-span-1
              ${hoveredIndex === 0 ? 'lg:flex-[2.5] border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.2)]' : hoveredIndex !== null ? 'lg:flex-[0.8] lg:opacity-60' : 'lg:flex-1'}
            `}
          >
            <div className="relative z-20 p-6 flex flex-col h-full justify-end">
              <div className="transform transition-transform duration-500 lg:group-hover:-translate-y-2">
                <span className="inline-flex bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-3 border border-emerald-500/30 backdrop-blur-md">
                  Domestic
                </span>
                <h3 className="text-white text-2xl font-bold leading-none tracking-tight drop-shadow-lg whitespace-nowrap">
                  Housekeeping
                </h3>
              </div>
              {/* Hidden Description (Only reveals on large screens when expanded, or always visible on mobile) */}
              <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === 0 ? 'lg:max-h-20 lg:opacity-100 lg:mt-2' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'} max-h-20 opacity-100 mt-2 lg:block`}>
                <p className="text-white/80 text-xs leading-relaxed max-w-[250px] whitespace-normal">
                  Immaculate cleaning and professional home management tailored to your exact standards.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              {/* Added object-top/center to ensure faces/main subjects stay in view when shrinking */}
              <img src={MaidService} className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:opacity-90" alt="Maid Staffing" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d]/90 via-[#00082d]/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* 2. Cooks */}
          <motion.div 
            variants={fadeUp} 
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative group rounded-3xl overflow-hidden bg-[#00082d] border border-white/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col h-[300px] sm:h-[350px] lg:h-full
              ${hoveredIndex === 1 ? 'lg:flex-[2.5] border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.2)]' : hoveredIndex !== null ? 'lg:flex-[0.8] lg:opacity-60' : 'lg:flex-1'}
            `}
          >
            <div className="relative z-20 p-6 flex flex-col h-full justify-end">
              <div className="transform transition-transform duration-500 lg:group-hover:-translate-y-2">
                <span className="inline-flex bg-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-3 border border-amber-500/30 backdrop-blur-md">
                  Culinary
                </span>
                <h3 className="text-white text-2xl font-bold leading-none tracking-tight drop-shadow-lg whitespace-nowrap">
                  Cooks & Chefs
                </h3>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === 1 ? 'lg:max-h-20 lg:opacity-100 lg:mt-2' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'} max-h-20 opacity-100 mt-2 lg:block`}>
                <p className="text-white/80 text-xs leading-relaxed max-w-[250px] whitespace-normal">
                  Nutritious, hygienic, and highly personalized daily meals for your family.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Cookscaretakers} className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:opacity-90" alt="Cooks" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d]/90 via-[#00082d]/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* 3. Nannies */}
          <motion.div 
            variants={fadeUp} 
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative group rounded-3xl overflow-hidden bg-[#00082d] border border-white/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col h-[300px] sm:h-[350px] lg:h-full
              ${hoveredIndex === 2 ? 'lg:flex-[2.5] border-pink-500/50 shadow-[0_0_50px_rgba(236,72,153,0.2)]' : hoveredIndex !== null ? 'lg:flex-[0.8] lg:opacity-60' : 'lg:flex-1'}
            `}
          >
            <div className="relative z-20 p-6 flex flex-col h-full justify-end">
              <div className="transform transition-transform duration-500 lg:group-hover:-translate-y-2">
                <span className="inline-flex bg-pink-500/20 text-pink-400 text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-3 border border-pink-500/30 backdrop-blur-md">
                  Childcare
                </span>
                <h3 className="text-white text-2xl font-bold leading-none tracking-tight drop-shadow-lg whitespace-nowrap">
                  Nannies
                </h3>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === 2 ? 'lg:max-h-20 lg:opacity-100 lg:mt-2' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'} max-h-20 opacity-100 mt-2 lg:block`}>
                <p className="text-white/80 text-xs leading-relaxed max-w-[250px] whitespace-normal">
                  Compassionate, thoroughly vetted professionals to nurture and protect your children.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Nannies} className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:opacity-90" alt="Nanny" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d]/90 via-[#00082d]/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* 4. Nursing */}
          <motion.div 
            variants={fadeUp} 
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative group rounded-3xl overflow-hidden bg-[#00082d] border border-white/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col h-[300px] sm:h-[350px] lg:h-full
              ${hoveredIndex === 3 ? 'lg:flex-[2.5] border-sky-500/50 shadow-[0_0_50px_rgba(14,165,233,0.2)]' : hoveredIndex !== null ? 'lg:flex-[0.8] lg:opacity-60' : 'lg:flex-1'}
            `}
          >
            <div className="relative z-20 p-6 flex flex-col h-full justify-end">
              <div className="transform transition-transform duration-500 lg:group-hover:-translate-y-2">
                <span className="inline-flex bg-sky-500/20 text-sky-400 text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-3 border border-sky-500/30 backdrop-blur-md">
                  Health
                </span>
                <h3 className="text-white text-2xl font-bold leading-none tracking-tight drop-shadow-lg whitespace-nowrap">
                  Home Nurses
                </h3>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === 3 ? 'lg:max-h-20 lg:opacity-100 lg:mt-2' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'} max-h-20 opacity-100 mt-2 lg:block`}>
                <p className="text-white/80 text-xs leading-relaxed max-w-[250px] whitespace-normal">
                  Dignified medical care and companionship for post-operative or elderly needs.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Nurse} className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:opacity-90" alt="Nurse" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d]/90 via-[#00082d]/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* 5. Security */}
          <motion.div 
            variants={fadeUp} 
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative group rounded-3xl overflow-hidden bg-[#00082d] border border-white/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col h-[300px] sm:h-[350px] lg:h-full sm:col-span-2 lg:col-span-1
              ${hoveredIndex === 4 ? 'lg:flex-[2.5] border-[#be1622]/60 shadow-[0_0_50px_rgba(190,22,34,0.25)]' : hoveredIndex !== null ? 'lg:flex-[0.8] lg:opacity-60' : 'lg:flex-1'}
            `}
          >
            <div className="relative z-20 p-6 flex flex-col h-full justify-end">
              <div className="transform transition-transform duration-500 lg:group-hover:-translate-y-2">
                <span className="inline-flex bg-[#be1622]/20 text-[#be1622] text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-3 border border-[#be1622]/30 backdrop-blur-md">
                  Security
                </span>
                <h3 className="text-white text-2xl font-bold leading-none tracking-tight drop-shadow-lg whitespace-nowrap">
                  Guards
                </h3>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === 4 ? 'lg:max-h-20 lg:opacity-100 lg:mt-2' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'} max-h-20 opacity-100 mt-2 lg:block`}>
                <p className="text-white/80 text-xs leading-relaxed max-w-[250px] whitespace-normal">
                  Uncompromising protection for your assets with highly trained ex-servicemen.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={Security} className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:opacity-90" alt="Security" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00082d]/90 via-[#00082d]/30 to-transparent"></div>
            </div>
          </motion.div>

        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <Link to="/services" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#00082d] hover:bg-[#be1622] hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-xl group">
            Explore All Services
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesGrid;