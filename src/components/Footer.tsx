import React from 'react';
import LOGO from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    /* SECTION PADDING: 80px (py-20) | Default Body: Inter */
    <footer className="bg-white py-20 px-4 sm:px-6 font-inter relative overflow-hidden border-t border-slate-100">
      
      {/* --- PREMIUM COLOR WASH WAVES --- */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute bottom-[-100px] left-1/4 w-[500px] h-[300px] bg-brand-navy/5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-1/4 w-[400px] h-[300px] bg-brand-red/5 blur-[80px] rounded-full"></div>
        
        {/* Layered Smooth Waves */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32 md:h-48 opacity-80">
          <path 
            fill="url(#navy-gradient)" 
            d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,224C672,213,768,171,864,170.7C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path 
            fill="url(#red-gradient)" 
            d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="navy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-brand-navy)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="var(--color-brand-navy)" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-brand-red)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--color-brand-red)" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- TOP HALF: Logo, Links & Address --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start pr-8">
            <a href="/" className="group inline-flex flex-col items-start cursor-pointer">
              <img src={LOGO} alt="VR Dizi Logo" className="h-14 sm:h-16 w-auto mb-4 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Slogan: Inter | 14px | Line-height 1.7 */}
              <span className="font-inter text-slate-500 text-[14px] tracking-[0.15em] uppercase font-semibold max-w-xs leading-[1.7]">
                A premium global IT staffing and services company
              </span>
            </a>
            
            {/* Social Media SVG Icons */}
            <div className="flex gap-4 mt-8">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.078z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Core Navigation Links */}
          <div className="md:col-span-6 lg:col-span-3 pt-2 lg:pt-0">
            {/* Heading: Poppins | 14px | Semi-bold (600) */}
            <h4 className="font-poppins text-[14px] font-semibold text-brand-red mb-5 uppercase tracking-widest leading-[1.3]">
              Navigation
            </h4>
            {/* Links: Inter | 16px | Medium (500) */}
            <ul className="font-inter space-y-4 text-[16px] font-medium text-slate-600">
              <li>
                <a href="/" className="inline-flex items-center text-brand-navy group">
                  <span className="relative pb-1">
                    Home
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-navy transition-all duration-300 group-hover:bg-brand-red"></span>
                  </span>
                </a>
              </li>
              <li><a href="/about" className="hover:text-brand-red hover:translate-x-1 transition-all duration-300 inline-block">About</a></li>
              <li><a href="/services" className="hover:text-brand-red hover:translate-x-1 transition-all duration-300 inline-block">Services</a></li>
              <li><a href="/contact" className="hover:text-brand-red hover:translate-x-1 transition-all duration-300 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Company Address */}
          <div className="md:col-span-6 lg:col-span-4 pt-2 lg:pt-0">
            {/* Heading: Poppins | 14px | Semi-bold (600) */}
            <h4 className="font-poppins text-[14px] font-semibold text-brand-red mb-5 uppercase tracking-widest leading-[1.3]">
              Headquarters
            </h4>
            
            {/* Address: Inter | 16px | Line-height 1.7 */}
            <address className="font-inter not-italic text-[16px] font-normal text-slate-600 space-y-2 leading-[1.7]">
              {/* Highlight Name: Poppins | Semi-bold */}
              <p className="font-poppins text-brand-navy font-semibold text-[16px]">VR Dizi</p>
              <p>
                HNO-5-101/162/163/2D 2ND Floor<br />
                Balaji Nagar , Tripura Contructions<br />
                PupplaGuda,Hyderabad, Telangana 500089
              </p>
              <div className="pt-3 flex flex-col gap-1">
                <a href="tel:+918688995438" className="hover:text-brand-red font-medium transition-colors inline-flex items-center gap-2">
                  {/* Phone SVG Icon */}
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +91 99598 52748
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* --- BOTTOM HALF: Legal & Copyright --- */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200/60">
          
          {/* Left Side: Copyright Text | Inter | 14px */}
          <div className="font-inter text-[14px] text-slate-500 font-normal w-full text-center md:text-left leading-[1.7]">
            <p>Copyright © {new Date().getFullYear()} VR Dizi. All rights reserved.</p>
          </div>

          {/* Right Side: Legal Links | Inter | 14px */}
          <div className="font-inter flex flex-wrap justify-center md:justify-end items-center gap-6 text-[14px] text-slate-500 font-medium uppercase tracking-widest w-full">
            <a href="#" className="hover:text-brand-red transition-colors">Legal</a>
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
            <span className="text-slate-400 font-normal normal-case tracking-normal">© VR Dizi {new Date().getFullYear()}</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;