import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import ContactModal from '../components/ContactModal';

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

const ContactPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* The Reusable Modal Component */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main className="font-sans bg-white pt-32 pb-20 overflow-hidden min-h-screen relative">
        
        {/* =========================================
            1. HEADER SECTION
        ========================================= */}
        <section className="px-4 sm:px-6 mb-16 lg:mb-24">
          <motion.div 
            className="container mx-auto max-w-4xl text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#be1622]"></span>
              <span className="text-[#be1622] font-bold uppercase tracking-[0.3em] text-[10px]">Get in Touch</span>
              <span className="w-8 h-[2px] bg-[#be1622]"></span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#00082d] leading-[1.1] tracking-tight mb-6">
              Let's build your <br className="hidden sm:block" />
              <span className="italic font-light text-slate-400">trusted team.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-8">
              Whether you need compassionate care for a loved one, robust security for your business, or you are looking to join our verified team of professionals.
            </motion.p>

            {/* Button to open form as Modal */}
            <motion.button 
              variants={fadeUp}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00082d] text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#be1622] hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Open Form in Modal
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            </motion.button>
          </motion.div>
        </section>

        {/* =========================================
            2. CONTACT INFO CARDS
        ========================================= */}
        <section className="px-4 sm:px-6 mb-24">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Phone Card */}
              <motion.a href="tel:+918688995438" variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#be1622]/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#00082d] group-hover:text-[#be1622] shadow-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-[#00082d] mb-2 uppercase tracking-widest">Call Us</h3>
                <p className="text-slate-500 font-medium">+91 86889 95438</p>
                <p className="text-slate-400 text-xs mt-2">Mon-Sat, 9am to 6pm</p>
              </motion.a>

              {/* Email Card */}
              <motion.a href="mailto:info@vrdizi.com" variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#be1622]/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#00082d] group-hover:text-[#be1622] shadow-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-[#00082d] mb-2 uppercase tracking-widest">Email Us</h3>
                <p className="text-slate-500 font-medium">info@vrdizi.com</p>
                <p className="text-slate-400 text-xs mt-2">Online Support 24/7</p>
              </motion.a>

              {/* Location Card */}
              <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#be1622]/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#00082d] group-hover:text-[#be1622] shadow-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-[#00082d] mb-2 uppercase tracking-widest">Headquarters</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  Maa Nilayam, 3rd Floor, 1-98/9/3/20<br />
                  Madhapur, Hyderabad 500081
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            3. CONTACT FORM & IMAGE SPLIT
        ========================================= */}
        <section className="px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row">
              
              {/* Left: Reusable Contact Form component */}
              <motion.div 
                className="w-full lg:w-3/5 flex flex-col bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ContactForm />
              </motion.div>

              {/* Right: The Image/Map Placard */}
              <motion.div 
                className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-full bg-slate-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="VR Dizi Headquarters" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00082d] via-[#00082d]/40 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <h4 className="text-white font-bold text-lg mb-1">Corporate Office</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Maa Nilayam, 3rd Floor, 1-98/9/3/20<br/>
                      Sy No 71, Madhapur, Serilingampally<br/>
                      Hyderabad, Telangana 500081
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ContactPage;