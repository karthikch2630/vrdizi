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

const ContactPage: React.FC = () => {
  return (
    <main className="font-sans bg-white pt-32 pb-20 overflow-hidden min-h-screen">
      
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
          
          <motion.p variants={fadeUp} className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Whether you need compassionate care for a loved one or robust security for your business, our resourcing experts in Hyderabad are ready to help.
          </motion.p>
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
            <motion.a 
              href="tel:+918688995438" 
              variants={fadeUp}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#be1622]/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#00082d] group-hover:text-[#be1622] shadow-sm transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h3 className="text-sm font-bold text-[#00082d] mb-2 uppercase tracking-widest">Call Us</h3>
              <p className="text-slate-500 font-medium">+91 86889 95438</p>
              <p className="text-slate-400 text-xs mt-2">Mon-Sat, 9am to 6pm</p>
            </motion.a>

            {/* Email Card */}
            <motion.a 
              href="mailto:info@vrdizi.com" 
              variants={fadeUp}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#be1622]/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#00082d] group-hover:text-[#be1622] shadow-sm transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-sm font-bold text-[#00082d] mb-2 uppercase tracking-widest">Email Us</h3>
              <p className="text-slate-500 font-medium">info@vrdizi.com</p>
              <p className="text-slate-400 text-xs mt-2">Online Support 24/7</p>
            </motion.a>

            {/* Location Card */}
            <motion.div 
              variants={fadeUp}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#be1622]/30 hover:shadow-[0_10px_40px_rgba(190,22,34,0.05)] transition-all duration-300 group flex flex-col items-center text-center"
            >
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
            
            {/* Left: The Form */}
            <motion.div 
              className="w-full lg:w-3/5 p-8 sm:p-12 lg:p-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-[#00082d] mb-2 tracking-tight">Send an Inquiry</h3>
              <p className="text-slate-500 text-sm font-light mb-10">Fill out the form below and our placement specialists will get back to you within 2 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all"
                      placeholder="John"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Service Needed Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Service Required</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all"
                    >
                      <option value="" disabled selected>Select a category...</option>
                      <option value="maid">Maids & Housekeeping</option>
                      <option value="cook">Cooks & Chefs</option>
                      <option value="nanny">Nannies & Babysitters</option>
                      <option value="nurse">Home Nurses & Elder Care</option>
                      <option value="security">Security Guards & Watchmen</option>
                      <option value="corporate">Corporate Staffing</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Additional Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all resize-none"
                    placeholder="Tell us a bit about your specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="button" 
                    className="w-full sm:w-auto px-10 py-4 bg-[#be1622] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#00082d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Submit Request
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                  <p className="text-slate-400 text-[10px] mt-4 text-center sm:text-left">
                    By submitting this form, you agree to our <a href="#" className="underline hover:text-[#be1622]">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Right: The Image/Map Placard */}
            <motion.div 
              className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-full bg-slate-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Note: In a real project, this could be a Google Maps iframe. Using a premium architectural image for now. */}
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
  );
};

export default ContactPage;