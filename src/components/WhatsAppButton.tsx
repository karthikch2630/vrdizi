import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber?: string; // Format: 911234567890 (no + or -)
  message?: string;    // Optional pre-filled message
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = "918688995438", 
  message = "Hello! I am interested in VR Dizi's staffing solutions. Could you provide more information?" 
}) => {
  
  // Encode the message for the URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center group font-sans">
      
      {/* --- Premium Hover Tooltip --- */}
      <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <div className="bg-white text-[#00082d] text-[10px] font-bold uppercase tracking-widest px-4 py-3 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-slate-100 whitespace-nowrap flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
          </span>
          Chat with our team
        </div>
      </div>

      {/* --- Animated WhatsApp Button --- */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 hover:bg-[#20ba59]"
      >
        
        {/* Continuous Radar Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{ 
            scale: [1, 1.6, 2.2], 
            opacity: [0.6, 0, 0] 
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        
        {/* Official WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="h-7 w-7 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.54 4.189 1.577 6.06L0 24l6.117-1.605a11.845 11.845 0 005.925 1.585h.005c6.635 0 12.032-5.396 12.035-12.03a11.799 11.799 0 00-3.417-8.467z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;