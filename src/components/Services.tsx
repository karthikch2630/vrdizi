import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Using Lucide icon for consistency
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

// --- Services Data Array ---
const servicesData = [
  { 
    id: 0, 
    tag: "Domestic", 
    title: "Housekeeping", 
    desc: "Immaculate cleaning and professional home management tailored to your exact standards.", 
    img: MaidService, 
    activeBorder: "border-emerald-500/50", 
    activeShadow: "shadow-[0_0_50px_rgba(16,185,129,0.2)]", 
    tagStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    gridSpan: "sm:col-span-2 lg:col-span-1"
  },
  { 
    id: 1, 
    tag: "Culinary", 
    title: "Cooks & Chefs", 
    desc: "Nutritious, hygienic, and highly personalized daily meals for your family.", 
    img: Cookscaretakers, 
    activeBorder: "border-amber-500/50", 
    activeShadow: "shadow-[0_0_50px_rgba(245,158,11,0.2)]", 
    tagStyle: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    gridSpan: ""
  },
  { 
    id: 2, 
    tag: "Childcare", 
    title: "Nannies", 
    desc: "Compassionate, thoroughly vetted professionals to nurture and protect your children.", 
    img: Nannies, 
    activeBorder: "border-pink-500/50", 
    activeShadow: "shadow-[0_0_50px_rgba(236,72,153,0.2)]", 
    tagStyle: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    gridSpan: ""
  },
  { 
    id: 3, 
    tag: "Health", 
    title: "Home Nurses", 
    desc: "Dignified medical care and companionship for post-operative or elderly needs.", 
    img: Nurse, 
    activeBorder: "border-sky-500/50", 
    activeShadow: "shadow-[0_0_50px_rgba(14,165,233,0.2)]", 
    tagStyle: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    gridSpan: ""
  },
  { 
    id: 4, 
    tag: "Security", 
    title: "Guards", 
    desc: "Uncompromising protection for your assets with highly trained ex-servicemen.", 
    img: Security, 
    activeBorder: "border-brand-red/60", 
    activeShadow: "shadow-[0_0_50px_rgba(190,22,34,0.25)]", 
    tagStyle: "bg-brand-red/20 text-brand-red border-brand-red/30",
    gridSpan: "sm:col-span-2 lg:col-span-1"
  }
];

const ServicesGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    /* SECTION PADDING: 80px (py-20) | Default Body: Inter */
    <section className="py-20 bg-brand-navy font-inter px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          {/* Subheading: Poppins | 14px (No smaller than 14px!) */}
          <h2 className="text-brand-red font-poppins font-semibold uppercase tracking-[0.4em] text-[14px] mb-4">
            Our Expertise
          </h2>
          
          {/* H2 Title: Poppins | 44px | Line-height 1.3 */}
          <p className="font-poppins text-3xl md:text-[44px] font-semibold text-white leading-[1.3] tracking-tight">
            Specialized Staffing for <br className="hidden sm:block" />
            <span className="italic font-normal text-white/80">Every Requirement.</span>
          </p>
        </motion.div>

        {/* --- DYNAMIC EXPANDING BENTO GRID --- */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 h-auto lg:h-[600px] w-full mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              variants={fadeUp} 
              onMouseEnter={() => setHoveredIndex(service.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-3xl overflow-hidden bg-brand-navy border border-white/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col h-[350px] lg:h-full ${service.gridSpan}
                ${hoveredIndex === service.id ? `lg:flex-[2.5] ${service.activeBorder} ${service.activeShadow}` : hoveredIndex !== null ? 'lg:flex-[0.8] lg:opacity-60' : 'lg:flex-1'}
              `}
            >
              <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                <div className="transform transition-transform duration-500 lg:group-hover:-translate-y-2">
                  
                  {/* Tag: Inter | 14px */}
                  <span className={`inline-flex font-inter text-[14px] font-semibold px-3 py-1 rounded-md uppercase mb-3 border backdrop-blur-md ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                  
                  {/* H3 Card Title: Poppins | 24px */}
                  <h3 className="font-poppins text-white text-[24px] font-semibold leading-none tracking-tight drop-shadow-lg whitespace-nowrap">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description: Inter | 14px | Line-height 1.7 */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === service.id ? 'lg:max-h-24 lg:opacity-100 lg:mt-3' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'} max-h-24 opacity-100 mt-3 lg:block`}>
                  <p className="font-inter text-white/80 text-[14px] leading-[1.7] max-w-[280px] whitespace-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 z-0">
                <img src={service.img} className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:opacity-90" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent"></div>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex justify-center"
        >
          {/* Button: Inter | 16px | Semi-bold (600) */}
          <Link to="/services" className="font-inter inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-navy hover:bg-brand-red hover:text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-xl group">
            Explore All Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesGrid;