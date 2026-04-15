import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import LOGO from "../assets/logo.png";

// 1. Add the Props interface to accept the function from App.tsx
interface NavbarProps {
  onOpenModal?: () => void;
}

// --- Mobile Menu Animation Variants ---
const menuOverlayVariants: Variants = {
  closed: { opacity: 0, x: "100%" },
  open: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", bounce: 0, duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const menuItemVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// 2. Accept the prop here
const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // NOTE: Removed local `isModalOpen` state. It is now handled globally in App.tsx

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Services Data to map through (Keeps code clean)
  const servicesList = [
    {
      title: "Maids & Housekeeping",
      desc: "Immaculate homes, effortless living with verified domestic help.",
      icon: <><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M12 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /></>
    },
    {
      title: "Cooks & Culinary",
      desc: "Professional cooks tailoring nutritious meals to your taste.",
      icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>
    },
    {
      title: "Nannies & Childcare",
      desc: "Compassionate, trained nannies ensuring safe care for little ones.",
      icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>
    },
    {
      title: "Nurses & Elder Care",
      desc: "Licensed professionals providing dignified medical support.",
      icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>
    },
    {
      title: "Security Guards",
      desc: "Uncompromising protection for your assets and loved ones.",
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>
    }
  ];

  return (
    <>
      {/* Fixed wrapper */}
      <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 md:px-8 font-sans">
        <div className="flex items-center gap-3 w-full max-w-5xl">

          {/* Main Floating Pill */}
          <nav className="relative flex-1 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300">

            {/* Logo Section */}
            <Link to="/" className="cursor-pointer z-50">
              <img src={LOGO} alt="VRDIZI Logo" className="h-12 w-auto sm:h-10" />
            </Link>

            {/* --- DESKTOP CENTER LINKS --- */}
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-700">
              <Link to="/" className="hover:text-[#be1622] transition-colors">Home</Link>
              <div className="w-px h-4 bg-slate-200"></div>
              <Link to="/about" className="hover:text-[#be1622] transition-colors">About</Link>
              <div className="w-px h-4 bg-slate-200"></div>

              {/* Desktop Services Dropdown */}
              <div className="group py-2">
                <Link to="/services" className="flex items-center gap-1.5 hover:text-[#be1622] transition-colors cursor-pointer text-slate-700 group-hover:text-[#be1622]">
                  Services
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-300">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>

                {/* --- NEW PREMIUM MEGA MENU --- */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[120%] w-[750px] bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,8,45,0.12)] border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[110%] transition-all duration-300 overflow-hidden flex">
                  
                  {/* Left Accent Panel */}
                  <div className="w-1/3 bg-[#00082d] p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#be1622] rounded-full blur-[60px] opacity-40 -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <h4 className="text-white font-serif text-2xl mb-3 tracking-tight">Premium<br/><span className="text-[#be1622] italic font-light">Staffing.</span></h4>
                      <p className="text-white/60 text-xs leading-relaxed">Highly vetted, reliable professionals ready to secure your business and empower your home.</p>
                    </div>
                    <Link to="/services" className="relative z-10 inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:text-[#be1622] transition-colors group/link mt-6">
                      View All Services
                      <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>

                  {/* Right Links Grid */}
                  <div className="w-2/3 p-6 bg-white grid grid-cols-1 gap-2">
                    {servicesList.map((item, idx) => (
                      <Link key={idx} to="/services" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-[#be1622] transition-colors shadow-sm">
                          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00082d] group-hover/item:text-white transition-colors">{item.icon}</svg>
                        </div>
                        <div className="group-hover/item:translate-x-1 transition-transform duration-300">
                          <h4 className="text-[#00082d] font-bold text-sm mb-0.5">{item.title}</h4>
                          <p className="text-[11px] text-slate-500 font-normal leading-snug">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-px h-4 bg-slate-200"></div>
              <Link to="/contact" className="hover:text-[#be1622] transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-[#00082d] hover:text-[#be1622] transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            </button>
          </nav>

          {/* 3. Update Desktop CTA Button to trigger onOpenModal prop */}
          <button onClick={onOpenModal} className="hidden sm:flex items-center hover:bg-[#00082d] bg-[#be1622] transition-all duration-300 rounded-xl p-1.5 shadow-xl group cursor-pointer border border-[#00082d]/10">
            <span className="text-white font-semibold text-sm px-4 whitespace-nowrap">Get a Quote</span>
            <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* --- NEW CINEMATIC MOBILE FULL-SCREEN MENU (Dark Mode) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuOverlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#00082d] z-[100] lg:hidden overflow-y-auto"
          >
            {/* Dark Mode Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#be1622] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

            <div className="flex flex-col h-full px-6 pt-6 pb-12 relative z-10">
              
              {/* Header: Logo & Close Button */}
              <div className="flex items-center justify-between mb-12">
                <img src={LOGO} alt="VRDIZI Logo" className="h-10 w-auto brightness-0 invert" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-white/10 hover:bg-[#be1622] text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 text-3xl font-serif text-white flex-1 justify-center">
                <motion.div variants={menuItemVariants}>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be1622] transition-colors block">Home</Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be1622] transition-colors block">About Us</Link>
                </motion.div>
                
                {/* Mobile Services Accordion */}
                <motion.div variants={menuItemVariants} className="flex flex-col">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full hover:text-[#be1622] transition-colors text-left"
                  >
                    Services
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Mobile Sub-menu items */}
                  <div className={`overflow-hidden transition-all duration-500 flex flex-col gap-5 mt-4 font-sans ${isServicesOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    {servicesList.map((service, idx) => (
                      <Link key={idx} to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] text-white/70 hover:text-[#be1622] hover:translate-x-2 transition-all flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#be1622]"></span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={menuItemVariants}>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be1622] transition-colors block">Contact</Link>
                </motion.div>
              </div>

              {/* Mobile Footer / CTA */}
              <motion.div variants={menuItemVariants} className="mt-12 font-sans border-t border-white/10 pt-8">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Ready to start?</p>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // 4. Update Mobile CTA Button to trigger onOpenModal prop
                    setTimeout(() => {
                      if (onOpenModal) onOpenModal();
                    }, 300); // Slight delay for smooth transition
                  }} 
                  className="w-full flex items-center justify-center gap-2 bg-[#be1622] hover:bg-white hover:text-[#00082d] transition-all text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg group"
                >
                  Get a Quote Today
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;