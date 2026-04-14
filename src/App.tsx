import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Components (Loaded immediately)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// --- Lazy Loaded Pages (Code Splitting for Performance) ---
// These are only downloaded by the browser when the user clicks the link
const Home = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// --- Minimal Studio-Grade Loader ---
// This displays silently while the page chunks are downloading
const PageLoader = () => (
  <div className="w-full h-[60vh] flex items-center justify-center bg-white" aria-live="polite" aria-busy="true">
    <div className="flex flex-col items-center gap-4">
      {/* Calm pulsating dot */}
      <div className="w-3 h-3 bg-brand-red rounded-full animate-ping opacity-75"></div>
      <span className="font-poppins text-[#aaa] text-[11px] uppercase tracking-[0.3em] font-medium animate-pulse">
        Loading
      </span>
    </div>
  </div>
);

function App() {
  return (
    // HelmetProvider is required for the SEO tags in your pages to inject into the <head>
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <ScrollToTop />
          <Navbar />
          <WhatsAppButton />
          
          {/* Main Content Area changed to <main> for better semantic accessibility */}
          <main className="flex-grow">
            {/* Suspense handles the transition while lazy-loaded components are fetched */}
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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;