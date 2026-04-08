import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import LOGO from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  return (
    <>
      {/* Fixed wrapper */}
      <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 md:px-8 font-sans">
        
        <div className="flex items-center gap-3 w-full max-w-5xl">
          
          {/* Main Floating Pill (White Version) */}
          <nav className="relative flex-1 flex items-center justify-between bg-white px-4 py-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300">
            
            {/* Logo Section */}
            <Link to="/" className="cursor-pointer z-50">
              <img 
                src={LOGO}
                alt="VRDIZI Logo" 
                className="h-12 w-auto sm:h-10" 
              />
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
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </Link>

                {/* Light Mega Menu */}
                <div className="absolute left-0 top-[115%] w-full bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 overflow-hidden">
                  <div className="p-8 grid grid-cols-2 gap-x-10 gap-y-6">
                    {/* Items mapping - Updated to reflect Domestic/Facility Services */}
                    {[
                      { 
                        title: "Maids & Housekeeping", 
                        desc: "Immaculate homes, effortless living with verified domestic help.", 
                        icon: <><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M12 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></> 
                      },
                      { 
                        title: "Cooks & Culinary", 
                        desc: "Professional cooks tailoring nutritious meals to your family's taste.", 
                        icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></> 
                      },
                      { 
                        title: "Nannies & Childcare", 
                        desc: "Compassionate, trained nannies ensuring safe care for little ones.", 
                        icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> 
                      },
                      { 
                        title: "Nurses & Elder Care", 
                        desc: "Licensed professionals providing dignified medical support at home.", 
                        icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> 
                      },
                      { 
                        title: "Security Guards", 
                        desc: "Uncompromising protection for your residential and corporate assets.", 
                        icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></> 
                      }
                    ].map((item, idx) => (
                      <Link key={idx} to="/services" className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item">
                        <div className="bg-[#00082d]/5 p-2.5 rounded-md group-hover/item:bg-[#be1622]/10 transition-colors">
                          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00082d] group-hover/item:text-[#be1622]">{item.icon}</svg>
                        </div>
                        <div>
                          <h4 className="text-[#00082d] font-bold text-sm mb-1 group-hover/item:text-[#be1622] transition-colors">{item.title}</h4>
                          <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* Bottom Red Accent Line */}
                  <div className="w-full h-1 bg-[#be1622]"></div>
                </div>
              </div>
              
              <div className="w-px h-4 bg-slate-200"></div>
              
              <Link to="/contact" className="hover:text-[#be1622] transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 text-[#00082d] hover:text-[#be1622] transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                // Hamburger Icon
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              )}
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <Link to="/contact" className="hidden sm:flex items-center hover:bg-[#00082d] bg-[#be1622] transition-all duration-300 rounded-xl p-1.5 shadow-xl group cursor-pointer border border-[#00082d]/10">
            <span className="text-white font-semibold text-sm px-4 whitespace-nowrap">Get a Quote</span>
            <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* --- MOBILE FULL-SCREEN MENU OVERLAY (Light Theme) --- */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-10 overflow-y-auto">
          
          <div className="flex flex-col gap-6 text-xl font-semibold text-slate-800">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 hover:text-[#be1622] transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 hover:text-[#be1622] transition-colors">About</Link>
            
            {/* Mobile Services Accordion */}
            <div className="border-b border-slate-100 pb-4">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
                className="flex items-center justify-between w-full hover:text-[#be1622] transition-colors text-left"
              >
                Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              {/* Mobile Sub-menu items */}
              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-4 mt-4 pl-4 border-l-2 border-[#be1622]/50 ${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-slate-600 hover:text-[#00082d]">Maids & Housekeeping</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-slate-600 hover:text-[#00082d]">Cooks & Culinary</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-slate-600 hover:text-[#00082d]">Nannies & Childcare</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-slate-600 hover:text-[#00082d]">Nurses & Elder Care</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-slate-600 hover:text-[#00082d]">Security Guards</Link>
              </div>
            </div>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be1622] transition-colors">Contact</Link>
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-auto pt-10">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-center bg-[#00082d] hover:bg-[#be1622] transition-colors text-white py-4 rounded-xl font-bold text-lg shadow-lg">
              Get a Quote Today
            </Link>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;