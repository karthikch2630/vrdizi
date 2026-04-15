import { Suspense, lazy, useState } from 'react'; // Added useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import {type ContactFormData } from './components/ContactForm'; // Added toast imports

// Global Components (Loaded immediately)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Import your ContactModal
import ContactModal from './components/ContactModal';

// --- Lazy Loaded Pages ---
const Home = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// --- Minimal Studio-Grade Loader ---
const PageLoader = () => (
  <div className="w-full h-[60vh] flex items-center justify-center bg-white" aria-live="polite" aria-busy="true">
    <div className="flex flex-col items-center gap-4">
      <div className="w-3 h-3 bg-brand-red rounded-full animate-ping opacity-75"></div>
      <span className="font-poppins text-[#aaa] text-[11px] uppercase tracking-[0.3em] font-medium animate-pulse">
        Loading
      </span>
    </div>
  </div>
);

function App() {
  // 1. Setup the state to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white relative">

          {/* 2. Add the Toaster globally so notifications can appear anywhere */}
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                fontFamily: 'Inter, sans-serif',
                borderRadius: '10px',
                background: '#1e293b', // slate-800
                color: '#fff',
              },
            }}
          />

          <ScrollToTop />

          {/* 3. Pass the function to open the modal down to your Navbar */}
          <Navbar onOpenModal={() => setIsModalOpen(true)} />

          <WhatsAppButton />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />

          {/* 4. Place the Modal at the global level */}
          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDataReceived={(data: ContactFormData) => {   // <--- Added ": ContactFormData" here
              toast.success(`Thanks ${data.user_name}! Your request has been sent.`);
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;