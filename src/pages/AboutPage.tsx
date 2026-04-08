import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutIMG from "../assets/AboutpageIMG.png";

// --- Validated Animation Variants ---
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

const AboutPage: React.FC = () => {
  return (
    <main className="font-sans bg-white pt-24 pb-10 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 mb-24 lg:mb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            <motion.div 
              className="w-full lg:w-1/2 z-10 pt-10"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-[#be1622]"></span>
                <span className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[10px]">About VR Dizi</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#00082d] leading-[1.1] tracking-tight mb-6">
                Empowering Homes. <br />
                <span className="italic font-light text-slate-400">Securing Businesses.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-light">
                We are Hyderabad’s premier manpower solutions firm, dedicated to bringing highly verified, reliable professionals right to your doorstep.
              </motion.p>
              
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-4xl font-serif text-[#00082d] mb-2">10k+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Background Checks</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-[#be1622] mb-2">48hr</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Replacement Guarantee</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative h-[450px] sm:h-[550px] lg:h-[650px]"
            >
              <div className="absolute top-10 -right-4 lg:-right-10 w-2/3 h-full bg-slate-50 rounded-3xl z-0 border border-slate-100"></div>
              
              <div className="absolute inset-0 right-10 bottom-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] z-10 bg-white">
                <img src={AboutIMG} alt="Professional Care" className="w-full h-full object-cover opacity-95" />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-4 bottom-24 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl z-20 border border-white flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="text-[#00082d] font-bold text-sm">100% Verified</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider">Trusted Personnel</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PURPOSE, MISSION & VISION */}
      <section className="py-24 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="w-full lg:w-1/2 lg:sticky lg:top-32"
            >
              <h2 className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Purpose</h2>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#00082d] tracking-tight mb-8 leading-tight">
                Transforming an unorganized sector into a <span className="italic text-slate-400">pillar of trust.</span>
              </h3>
              <div className="space-y-6 text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                <p>For too long, finding reliable domestic help, compassionate caretakers, or professional security has been a stressful and uncertain process for families and businesses alike. We created VR Dizi to change that narrative completely.</p>
                <p>We aren't just placing workers; we are restoring peace of mind. By heavily vetting our staff and enforcing strict quality standards, we achieve two vital things: giving you back your time and safety, while empowering skilled professionals with dignified, structured employment.</p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="w-full lg:w-1/2 flex flex-col gap-8"
            >
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-shadow duration-500 group">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-8 text-[#00082d] group-hover:text-[#be1622] group-hover:bg-red-50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                </div>
                <h4 className="text-2xl font-serif text-[#00082d] mb-4">Our Mission</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">To deliver highly verified, impeccably trained, and compassionate manpower solutions. We strive to seamlessly integrate reliable care and uncompromising security into the daily lives of our clients across Hyderabad.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#00082d] rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#be1622]/20 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-8 text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <h4 className="text-2xl font-serif text-white mb-4">Our Vision</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-light">To become the absolute gold standard for facility and domestic staffing in the region. We envision a future where hiring help is entirely devoid of risk, where hard-working professionals are respected, and where every home operates in total harmony.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Standards</h2>
            <p className="text-3xl sm:text-4xl font-serif text-[#00082d] tracking-tight">
              Built on a foundation of <br />
              <span className="italic font-light text-slate-400">absolute trust and care.</span>
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500">
              <span className="text-slate-200 font-serif italic text-4xl block mb-6">01</span>
              <h3 className="text-lg font-bold text-[#00082d] mb-4">Uncompromising Safety</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Inviting someone into your home or business requires absolute trust. We enforce a rigorous background verification process before anyone joins our roster.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500">
              <span className="text-[#be1622]/20 font-serif italic text-4xl block mb-6">02</span>
              <h3 className="text-lg font-bold text-[#00082d] mb-4">Specialized Excellence</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">From clinically trained nurses to experienced nannies and ex-servicemen security guards, we ensure our personnel have the exact training required.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500">
              <span className="text-slate-200 font-serif italic text-4xl block mb-6">03</span>
              <h3 className="text-lg font-bold text-[#00082d] mb-4">Reliability Guarantee</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">We understand that staffing disruptions are stressful. Our dedicated account managers provide a strict 48-hour replacement guarantee.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. SAFETY PROTOCOL */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Security First</h2>
            <p className="text-3xl sm:text-4xl font-serif text-[#00082d] tracking-tight">
              The VR Dizi <span className="italic font-light text-slate-500">7-Step Vetting Protocol</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
          >
            {['Identity Verification', 'Criminal Record Scan', 'Previous Employer Check', 'Medical Screening', 'Behavioral Interview', 'Skill Certification', 'Continuous Monitoring'].map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-slate-200 font-serif italic text-3xl block mb-3">0{index + 1}</span>
                <p className="text-[#00082d] text-sm font-medium">{step}</p>
              </motion.div>
            ))}
            
            <motion.div variants={fadeUp} className="bg-[#be1622] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-[0_10px_30px_rgba(190,22,34,0.2)] hover:-translate-y-1 transition-transform">
              <svg className="w-8 h-8 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <p className="text-white text-xs font-bold uppercase tracking-widest">100% Secure</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. LEADERSHIP */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full md:w-5/12"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Anuradha - Managing Partner" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="w-full md:w-7/12"
            >
              <motion.h2 variants={fadeUp} className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Leadership</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl font-serif text-[#00082d] font-bold mb-2">Anuradha</motion.h3>
              <motion.p variants={fadeUp} className="text-slate-400 text-[10px] tracking-widest uppercase mb-10 font-bold">Managing Partner, VR Dizi</motion.p>
              
              <motion.div variants={fadeUp} className="space-y-6 text-slate-500 text-sm sm:text-base leading-relaxed font-light mb-12">
                <p>"When we started VR Dizi, our goal was profoundly personal: to bring absolute peace of mind to your doorstep. The manpower industry is often fragmented, but we believed it needed a standard of uncompromising professionalism."</p>
                <p>"Whether it is caring for your aging parents, preparing your daily meals, nurturing your children, or securing your corporate office, we know that trust is the foundation of everything we do. We don't take shortcuts."</p>
                <p className="font-medium text-[#00082d] italic">"Your family's safety and your business's security are our highest priority."</p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-100">
                <a href="tel:+918688995438" className="px-8 py-3.5 bg-[#00082d] hover:bg-[#be1622] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Contact Directly
                </a>
                <a href="https://www.vrdizi.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#be1622] text-[10px] font-bold uppercase tracking-widest transition-colors">
                  Visit Website &rarr;
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="container mx-auto max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-[#00082d] mb-6 tracking-tight">
            Ready to find your perfect match?
          </h2>
          <p className="text-slate-500 text-base mb-10 leading-relaxed font-light">
            Connect with our resourcing team in Hyderabad to discuss your family or facility requirements today.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-[#be1622] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#00082d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Initiate Contact
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default AboutPage;