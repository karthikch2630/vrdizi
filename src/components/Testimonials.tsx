import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

// --- Types ---
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string | null;
  initials: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    quote: "We struggled for months to find a reliable nanny. VR Dizi not only found us the perfect match within 48 hours, but their background check process gave us complete peace of mind.",
    name: "Sarah Jenkins",
    role: "Hired a Nanny",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    initials: "SJ"
  },
  {
    quote: "The level of professionalism is unmatched. We contracted a security team and two executive assistants for our new corporate office. The deployment was seamless.",
    name: "Marcus Reed",
    role: "Operations Director",
    image: null,
    initials: "MR"
  },
  {
    quote: "After my mother's surgery, we urgently needed an experienced home nurse. VR Dizi provided a licensed professional the very next day. Highly recommended.",
    name: "David M.",
    role: "Hired a Nurse",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    initials: "DM"
  },
  {
    quote: "Finding a trustworthy cook who understands complex dietary needs was impossible until we found VR Dizi. The chef they provided is an absolute lifesaver.",
    name: "Priya Sharma",
    role: "Hired a Cook",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    initials: "PS"
  },
  {
    quote: "Their strict 7-step vetting process is exactly what we needed for our gated community. The security personnel are polite, alert, and incredibly well-trained.",
    name: "Anand Verma",
    role: "Housing Society Pres.",
    image: null,
    initials: "AV"
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerCenter, setContainerCenter] = useState(0);
  
  // Create a motion value for the X position of the track
  const baseX = useMotionValue(0);

  // Update center point on resize
  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerCenter(rect.left + rect.width / 2);
      }
    };
    
    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, []);

  // Use animation frame to smoothly scroll the track
  const direction = -1;
  const speed = 1.5; 

  useAnimationFrame((_t, delta) => {
    const moveBy = direction * speed * (delta / 16);
    // Assuming card width ~400px + 32px gap = 432px per item.
    const resetPoint = -(testimonials.length * 432); 

    if (baseX.get() <= resetPoint) {
      baseX.set(0);
    } else {
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    /* SECTION PADDING: 80px (py-20) | Default Body: Inter */
    <section className="py-20 bg-white font-inter relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full" ref={containerRef}>
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 px-4">
          {/* Subheading: Poppins | 14px (No smaller than 14px!) */}
          <h2 className="font-poppins text-brand-red font-semibold uppercase tracking-[0.4em] text-[14px] mb-4">
            Verified Reviews
          </h2>
          {/* H2 Title: Poppins | 44px | Line-height 1.3 */}
          <p className="font-poppins text-3xl md:text-[44px] font-semibold text-brand-navy leading-[1.3] tracking-tight">
            Trusted by Families & <br className="hidden sm:block" />
            <span className="italic font-normal text-slate-500">Leading Corporations.</span>
          </p>
        </div>

        {/* --- INFINITE SLIDING CAROUSEL --- */}
        <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] pt-8 pb-12">
          <motion.div 
            className="flex gap-8 px-4"
            style={{ x: baseX }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
              <TestimonialCard 
                key={idx} 
                testimonial={testimonial} 
                containerCenter={containerCenter} 
              />
            ))}
          </motion.div>
        </div>

        {/* --- GLOBAL STATS FOOTER --- */}
        <div className="mt-10 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-10 sm:gap-20 mx-4 max-w-7xl xl:mx-auto">
          <div className="text-center">
            {/* Stat Number: Poppins | 44px */}
            <h4 className="font-poppins text-4xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy mb-2">500+</h4>
            {/* Stat Label: Inter | 14px */}
            <p className="font-inter text-brand-red text-[14px] uppercase tracking-widest font-semibold">Happy Families</p>
          </div>
          <div className="text-center">
            <h4 className="font-poppins text-4xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy mb-2">100%</h4>
            <p className="font-inter text-brand-red text-[14px] uppercase tracking-widest font-semibold">Vetted Staff</p>
          </div>
          <div className="text-center">
            <h4 className="font-poppins text-4xl md:text-[44px] font-semibold leading-[1.3] text-brand-navy mb-2">48hr</h4>
            <p className="font-inter text-brand-red text-[14px] uppercase tracking-widest font-semibold">Replacement</p>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- INDIVIDUAL CARD COMPONENT ---
const TestimonialCard: React.FC<{ testimonial: Testimonial, containerCenter: number }> = ({ testimonial, containerCenter }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const checkPosition = () => {
      if (cardRef.current && containerCenter > 0) {
        const rect = cardRef.current.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        
        // If the card's center is within +/- 200px of the screen's center, highlight it
        const distanceFromCenter = Math.abs(containerCenter - cardCenter);
        setIsCenter(distanceFromCenter < 200);
      }
      animationFrameId = requestAnimationFrame(checkPosition);
    };

    checkPosition();
    return () => cancelAnimationFrame(animationFrameId);
  }, [containerCenter]);

  return (
    <div 
      ref={cardRef}
      className={`relative w-[320px] sm:w-[400px] shrink-0 rounded-3xl p-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${isCenter 
          ? 'bg-brand-red shadow-[0_20px_40px_rgba(190,22,34,0.3)] scale-105 z-10 -translate-y-4' 
          : 'bg-white border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] scale-95 opacity-60 z-0'
        }
      `}
    >
      {/* Quote Icon Graphic */}
      <div className={`absolute top-6 right-6 transition-colors duration-700 ${isCenter ? 'text-white/20' : 'text-slate-100'}`}>
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
      </div>
      
      {/* Stars */}
      <div className={`flex gap-1 mb-6 transition-colors duration-700 ${isCenter ? 'text-white' : 'text-brand-red'}`}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
      </div>

      {/* Quote: Inter | 16px | Line-height 1.7 */}
      <p className={`font-inter text-[16px] leading-[1.7] mb-8 relative z-10 transition-colors duration-700 ${isCenter ? 'text-white font-medium' : 'text-slate-500 font-normal'}`}>
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4">
        {testimonial.image ? (
          <div className={`w-12 h-12 rounded-full border-2 overflow-hidden transition-colors duration-700 ${isCenter ? 'border-white/30' : 'border-slate-200'}`}>
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={`font-inter w-12 h-12 rounded-full flex items-center justify-center font-semibold text-[14px] transition-colors duration-700 ${isCenter ? 'bg-white/10 border border-white/30 text-white' : 'bg-slate-100 border border-slate-200 text-brand-navy'}`}>
            {testimonial.initials}
          </div>
        )}
        <div>
          {/* Reviewer Name: Poppins | 16px | Semi-bold */}
          <h5 className={`font-poppins font-semibold text-[16px] transition-colors duration-700 ${isCenter ? 'text-white' : 'text-brand-navy'}`}>
            {testimonial.name}
          </h5>
          {/* Reviewer Role: Inter | 14px */}
          <p className={`font-inter text-[14px] uppercase tracking-widest font-medium transition-colors duration-700 ${isCenter ? 'text-white/70' : 'text-slate-400'}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;