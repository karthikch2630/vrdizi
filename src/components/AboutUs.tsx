import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react'; // Using Lucide icons
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
    /* SECTION PADDING: 80px (py-20) | Default Font: Inter */
    <section className="py-20 bg-brand-navy font-inter overflow-hidden px-4 sm:px-6">
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
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] -z-10"></div>
            
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
                className="absolute -bottom-6 -right-2 sm:-right-8 bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 max-w-[280px] group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(190,22,34,0.4)]">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  {/* Title: Poppins | 28px */}
                  <p className="font-poppins text-2xl sm:text-[28px] font-semibold text-white leading-none tracking-tight">12+ Years</p>
                  {/* Subtext: Inter | 14px (No less than 14px!) */}
                  <p className="font-inter text-[14px] uppercase font-medium text-white/60 tracking-wider mt-2">Market Excellence</p>
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
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-brand-red"></span>
              {/* Tag: Inter | 14px | 600 weight */}
              <span className="font-inter text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px]">
                VR Dizi Legacy
              </span>
            </motion.div>

            {/* Main Heading: Poppins | 44px | Line-height 1.3 */}
            <motion.h2 variants={fadeUp} className="font-poppins text-3xl sm:text-4xl md:text-[44px] font-semibold text-white mb-6 leading-[1.3] tracking-tight">
              Redefining Trust in <br />
              <span className="italic font-normal text-white/70">Manpower Solutions.</span>
            </motion.h2>

            {/* Paragraph: Inter | 17px | Line-height 1.7 */}
            <motion.p variants={fadeUp} className="font-inter text-white/70 text-[16px] md:text-[17px] leading-[1.7] mb-12 font-normal max-w-xl">
              Founded on absolute reliability, <span className="text-white font-medium">VR Dizi</span> bridges the gap between skilled professionals and those who need them most. We treat every placement as a strategic partnership.
            </motion.p>

            {/* Trust Grid: Compact & Dashboard Aligned to match Services Section */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 border-t border-white/10 pt-10">
              
              {/* Grid Items */}
              {[
                { title: "Mission", desc: "Providing secure, vetted, and dignified employment to thousands.", active: true },
                { title: "Vision", desc: "Global benchmark for ethical and transparent staffing.", active: false },
                { title: "Integrity", desc: "Zero hidden fees. 100% transparency in every contract.", active: false },
                { title: "Support", desc: "24/7 dedicated account managers for every client.", active: false }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  {/* Grid Tags: Inter | 14px */}
                  <span className={`inline-flex font-inter text-[14px] font-semibold px-3 py-1 rounded-md uppercase self-start border backdrop-blur-md ${
                    item.active 
                      ? "bg-brand-red/10 text-brand-red border-brand-red/20" 
                      : "bg-white/5 text-white/50 border-white/10"
                  }`}>
                    {item.title}
                  </span>
                  {/* Grid Descriptions: Inter | 14px | Line-height 1.7 */}
                  <p className="font-inter text-[14px] text-white/80 font-normal leading-[1.7] max-w-[250px]">
                    {item.desc}
                  </p>
                </div>
              ))}

            </motion.div>

            {/* Compact CTA Button Box */}
            <motion.div variants={fadeUp} className="mt-12 lg:mt-14">
              {/* Button: Inter | 16px | Semi-bold (600) */}
              <Link 
                to="/about" 
                className="font-inter inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-brand-navy hover:bg-brand-red hover:text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] group w-full sm:w-auto"
              >
                Our Full History
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;