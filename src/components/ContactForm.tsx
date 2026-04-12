import React, { useState } from 'react';
import { X, ChevronDown, ArrowRight } from 'lucide-react'; // Using Lucide icons

interface ContactFormProps {
  inModal?: boolean;
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ inModal = false, onClose }) => {
  const [formType, setFormType] = useState<'hire' | 'work'>('hire');

  return (
    <div className={`w-full flex flex-col bg-white font-inter ${inModal ? 'p-6 sm:p-8' : 'p-8 sm:p-12 lg:p-16'}`}>
      
      {/* Modal Close Button & Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          {/* Form Header: Poppins | 1.3 Line-height | Semi-bold */}
          <h3 className="font-poppins text-2xl sm:text-3xl font-semibold text-brand-navy leading-[1.3] tracking-tight mb-2">
            {formType === 'hire' ? 'Send an Inquiry' : 'Apply Now'}
          </h3>
          {/* Form Description: Inter | 14px | 1.7 Line-height */}
          <p className="font-inter text-slate-500 text-[14px] sm:text-[16px] leading-[1.7] font-normal">
            {formType === 'hire' 
              ? 'Fill out the form below and our placement specialists will contact you.'
              : 'Join our verified network of premium professionals.'}
          </p>
        </div>
        {inModal && onClose && (
          <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors">
            <X size={20} />
          </button>
        )}
      </div>

      {/* --- Sliding Toggle --- */}
      <div className="relative flex bg-slate-100 p-1.5 rounded-xl mb-8 shadow-inner">
        {/* Toggle Buttons: Inter | 14px (No smaller!) | Semi-bold */}
        <button 
          type="button"
          onClick={() => setFormType('hire')}
          className={`font-inter flex-1 relative z-10 py-3 text-[14px] font-semibold uppercase tracking-widest rounded-lg transition-colors duration-300 ${formType === 'hire' ? 'text-white' : 'text-slate-500 hover:text-brand-navy'}`}
        >
          Hire Staff
        </button>
        <button 
          type="button"
          onClick={() => setFormType('work')}
          className={`font-inter flex-1 relative z-10 py-3 text-[14px] font-semibold uppercase tracking-widest rounded-lg transition-colors duration-300 ${formType === 'work' ? 'text-white' : 'text-slate-500 hover:text-brand-navy'}`}
        >
          Find a Job
        </button>
        {/* Animated Background Pill */}
        <div 
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-brand-red rounded-lg shadow-md transition-all duration-300 ease-out ${formType === 'hire' ? 'left-1.5' : 'left-[calc(50%+4px)]'}`}
        ></div>
      </div>
      
      {/* --- Form Fields --- */}
      <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2 sm:col-span-2">
            {/* Labels: Inter | 14px */}
            <label htmlFor="fullName" className="font-inter text-[14px] font-semibold uppercase tracking-widest text-slate-500">Full Name *</label>
            <input type="text" id="fullName" required className="font-inter w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[16px] text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all" placeholder="e.g. John Doe" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="font-inter text-[14px] font-semibold uppercase tracking-widest text-slate-500">Phone Number *</label>
            <input type="tel" id="phone" required className="font-inter w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[16px] text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all" placeholder="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-inter text-[14px] font-semibold uppercase tracking-widest text-slate-500">Email Address <span className="text-slate-400 font-normal capitalize tracking-normal">(Optional)</span></label>
            <input type="email" id="email" className="font-inter w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[16px] text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all" placeholder="john@example.com" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="font-inter text-[14px] font-semibold uppercase tracking-widest text-slate-500">
            {formType === 'hire' ? 'Service Required *' : 'Role Applying For *'}
          </label>
          <div className="relative">
            <select id="service" required defaultValue="" className="font-inter w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[16px] text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all">
              <option value="" disabled>Select a category...</option>
              <option value="maid">Maid & Housekeeping</option>
              <option value="cook">Cook & Chef</option>
              <option value="nanny">Nanny & Babysitter</option>
              <option value="nurse">Home Nurse & Elder Care</option>
              <option value="security">Security Guard</option>
              <option value="corporate">Corporate Staffing</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 mt-auto">
          {/* Button: Inter | 16px | Semi-bold (600) */}
          <button type="submit" className="font-inter w-full px-10 py-4 bg-brand-red text-white text-[16px] font-semibold uppercase tracking-[0.2em] rounded-xl hover:bg-brand-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
            {formType === 'hire' ? 'Submit Request' : 'Submit Application'}
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;