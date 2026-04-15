import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ContactForm, {type ContactFormData } from './ContactForm'; // Make sure ContactFormData is imported!

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  // ADD THIS LINE BELOW:
  onDataReceived?: (data: ContactFormData) => void; 
}



const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Backdrop using brand-navy */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* The form component already contains your Premium Typography System */}
            <ContactForm inModal={true} onClose={onClose} />
          </motion.div>
          
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;