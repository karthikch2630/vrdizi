import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts the current URL path (e.g., '/about', '/contact')
  const { pathname } = useLocation();

  // Whenever the pathname changes, run this effect
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to x: 0, y: 0
  }, [pathname]);

  // This component doesn't render any actual HTML
  return null;
};

export default ScrollToTop;