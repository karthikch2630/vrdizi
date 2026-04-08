import React from 'react';
import { motion, type Variants } from 'framer-motion';

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

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white font-sans px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#be1622]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2 className="text-[#be1622] font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2">Verified Reviews</h2>
          <p className="text-3xl sm:text-5xl font-serif text-[#00082d] leading-tight tracking-tight">
            Trusted by Families & <br className="hidden sm:block" />
            <span className="italic font-light text-slate-500">Leading Corporations.</span>
          </p>
        </motion.div>

        {/* --- TESTIMONIALS GRID --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          
          {/* Testimonial 1 */}
          <motion.div variants={fadeUp} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(190,22,34,0.05)] hover:border-[#be1622]/30 transition-all duration-500 relative group">
            {/* Quote Icon Graphic */}
            <div className="absolute top-6 right-6 text-slate-100 group-hover:text-[#be1622]/10 transition-colors duration-500">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-[#be1622]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10 font-light">
              "We struggled for months to find a reliable nanny. VR Dizi not only found us the perfect match within 48 hours, but their background check process gave us complete peace of mind."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" alt="Sarah J." className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-[#00082d] font-bold text-sm">Sarah Jenkins</h5>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Hired a Nanny</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 (Center - Highlighted in Red) */}
          {/* Note: Wrapped in a div to preserve the md:-translate-y-4 layout offset without conflicting with Framer Motion's y-transform */}
          <motion.div variants={fadeUp}>
            <div className="bg-[#be1622] rounded-3xl p-8 shadow-[0_20px_40px_rgba(190,22,34,0.3)] relative group md:-translate-y-4 hover:-translate-y-6 transition-transform duration-500">
              <div className="absolute top-6 right-6 text-white/20">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              
              <div className="flex gap-1 mb-6 text-white">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              <p className="text-white text-sm leading-relaxed mb-8 relative z-10 font-light">
                "The level of professionalism is unmatched. We contracted a security team and two executive assistants for our new corporate office. The deployment was seamless, and the staff are exceptional."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 overflow-hidden flex items-center justify-center text-white font-bold text-xs">
                  MR
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm">Marcus Reed</h5>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Operations Director</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div variants={fadeUp} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(190,22,34,0.05)] hover:border-[#be1622]/30 transition-all duration-500 relative group">
            <div className="absolute top-6 right-6 text-slate-100 group-hover:text-[#be1622]/10 transition-colors duration-500">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            
            <div className="flex gap-1 mb-6 text-[#be1622]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10 font-light">
              "After my mother's surgery, we urgently needed an experienced home nurse. VR Dizi provided a licensed professional the very next day. Their 24/7 support team is also incredibly helpful."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="David M." className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-[#00082d] font-bold text-sm">David M.</h5>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Hired a Nurse</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Global Stats Footer */}
        <motion.div 
          className="mt-16 sm:mt-24 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-10 sm:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center">
            <h4 className="text-4xl font-serif text-[#00082d] mb-1">500+</h4>
            <p className="text-[#be1622] text-[10px] uppercase tracking-widest font-bold">Happy Families</p>
          </motion.div>
          <motion.div variants={fadeUp} className="text-center">
            <h4 className="text-4xl font-serif text-[#00082d] mb-1">100%</h4>
            <p className="text-[#be1622] text-[10px] uppercase tracking-widest font-bold">Vetted Staff</p>
          </motion.div>
          <motion.div variants={fadeUp} className="text-center">
            <h4 className="text-4xl font-serif text-[#00082d] mb-1">48hr</h4>
            <p className="text-[#be1622] text-[10px] uppercase tracking-widest font-bold">Replacement</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;