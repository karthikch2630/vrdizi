import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'; // Using Lucide icons
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

      {/* Default Body Font: Inter */}
      <main className="font-inter bg-white pt-32 pb-20 overflow-hidden min-h-screen relative">
        
        {/* =========================================
            1. HEADER SECTION
        ========================================= */}
        <section className="px-4 sm:px-6 mb-20 lg:mb-24">
          <motion.div 
            className="container mx-auto max-w-4xl text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-red"></span>
              {/* Tag: Poppins | 14px (No smaller!) */}
              <span className="font-poppins text-brand-red font-semibold uppercase tracking-[0.3em] text-[14px]">Get in Touch</span>
              <span className="w-8 h-[2px] bg-brand-red"></span>
            </motion.div>
            
            {/* H1: Poppins | 44px | Line-height 1.3 */}
            <motion.h1 variants={fadeUp} className="font-poppins text-4xl sm:text-5xl md:text-[44px] font-semibold text-brand-navy leading-[1.3] tracking-tight mb-6">
              Let's build your <br className="hidden sm:block" />
              <span className="italic font-normal text-slate-400">trusted team.</span>
            </motion.h1>
            
            {/* Paragraph: Inter | 17px | Line-height 1.7 */}
            <motion.p variants={fadeUp} className="font-inter text-slate-500 text-[16px] md:text-[17px] max-w-2xl mx-auto leading-[1.7] font-normal mb-10">
              Whether you need compassionate care for a loved one, robust security for your business, or you are looking to join our verified team of professionals.
            </motion.p>

            {/* Button: Inter | 16px | Semi-bold (600) */}
            <motion.button 
              variants={fadeUp}
              onClick={() => setIsModalOpen(true)}
              className="font-inter inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-navy text-white text-[16px] font-semibold uppercase tracking-widest rounded-xl hover:bg-brand-red hover:-translate-y-1 transition-all duration-300 shadow-lg group"
            >
              Open Form in Modal
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
              <motion.a href="tel:+918688995438" variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-red/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-brand-navy group-hover:text-brand-red shadow-sm transition-colors">
                  <Phone size={20} />
                </div>
                {/* Card Tag: Poppins | 14px | Semi-bold */}
                <h3 className="font-poppins text-[14px] font-semibold text-brand-navy mb-2 uppercase tracking-widest">Call Us</h3>
                {/* Detail: Inter | 16px */}
                <p className="font-inter text-slate-500 font-medium text-[16px]">+91 86889 95438</p>
                <p className="font-inter text-slate-400 text-[14px] mt-2">Mon-Sat, 9am to 6pm</p>
              </motion.a>

              {/* Email Card */}
              <motion.a href="mailto:info@vrdizi.com" variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-red/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-brand-navy group-hover:text-brand-red shadow-sm transition-colors">
                  <Mail size={20} />
                </div>
                <h3 className="font-poppins text-[14px] font-semibold text-brand-navy mb-2 uppercase tracking-widest">Email Us</h3>
                <p className="font-inter text-slate-500 font-medium text-[16px]">info@vrdizi.com</p>
                <p className="font-inter text-slate-400 text-[14px] mt-2">Online Support 24/7</p>
              </motion.a>

              {/* Location Card */}
              <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-red/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center cursor-default">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-brand-navy group-hover:text-brand-red shadow-sm transition-colors">
                  <MapPin size={20} />
                </div>
                <h3 className="font-poppins text-[14px] font-semibold text-brand-navy mb-2 uppercase tracking-widest">Headquarters</h3>
                <p className="font-inter text-slate-500 font-medium text-[16px] leading-[1.7]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    {/* Overlay Title: Poppins | 20px | Semi-bold */}
                    <h4 className="font-poppins text-white font-semibold text-[20px] mb-2 leading-[1.3]">Corporate Office</h4>
                    {/* Overlay Address: Inter | 14px | Line-height 1.7 */}
                    <p className="font-inter text-white/70 text-[14px] leading-[1.7] font-normal">
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