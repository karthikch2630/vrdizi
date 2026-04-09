import React, { useState } from 'react';

interface ContactFormProps {
  inModal?: boolean;
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ inModal = false, onClose }) => {
  const [formType, setFormType] = useState<'hire' | 'work'>('hire');

  return (
    <div className={`w-full flex flex-col bg-white ${inModal ? 'p-6 sm:p-8' : 'p-8 sm:p-12 lg:p-16'}`}>
      
      {/* Modal Close Button & Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#00082d] tracking-tight mb-2">
            {formType === 'hire' ? 'Send an Inquiry' : 'Apply Now'}
          </h3>
          <p className="text-slate-500 text-sm font-light">
            {formType === 'hire' 
              ? 'Fill out the form below and our placement specialists will contact you.'
              : 'Join our verified network of premium professionals.'}
          </p>
        </div>
        {inModal && onClose && (
          <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        )}
      </div>

      {/* --- Sliding Toggle --- */}
      <div className="relative flex bg-slate-100 p-1.5 rounded-xl mb-8 shadow-inner">
        <button 
          type="button"
          onClick={() => setFormType('hire')}
          className={`flex-1 relative z-10 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors duration-300 ${formType === 'hire' ? 'text-white' : 'text-slate-500 hover:text-[#00082d]'}`}
        >
          Hire Staff
        </button>
        <button 
          type="button"
          onClick={() => setFormType('work')}
          className={`flex-1 relative z-10 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors duration-300 ${formType === 'work' ? 'text-white' : 'text-slate-500 hover:text-[#00082d]'}`}
        >
          Find a Job
        </button>
        {/* Animated Background Pill */}
        <div 
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#be1622] rounded-lg shadow-md transition-all duration-300 ease-out ${formType === 'hire' ? 'left-1.5' : 'left-[calc(50%+4px)]'}`}
        ></div>
      </div>
      
      {/* --- Form Fields --- */}
      <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="fullName" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Full Name *</label>
            <input type="text" id="fullName" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all" placeholder="e.g. John Doe" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Phone Number *</label>
            <input type="tel" id="phone" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all" placeholder="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Email Address <span className="text-slate-400 font-normal lowercase">(Optional)</span></label>
            <input type="email" id="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#00082d] focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all" placeholder="john@example.com" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            {formType === 'hire' ? 'Service Required *' : 'Role Applying For *'}
          </label>
          <div className="relative">
            <select id="service" required defaultValue="" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#be1622]/20 focus:border-[#be1622] transition-all">
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 mt-auto">
          <button type="submit" className="w-full px-10 py-4 bg-[#be1622] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#00082d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
            {formType === 'hire' ? 'Submit Request' : 'Submit Application'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;