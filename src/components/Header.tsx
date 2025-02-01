import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: '3d', label: '3D.' },
    { id: '2d', label: '2D.' },
    { id: 'graphics', label: 'Graphic Design.' },
    { id: 'about', label: 'About.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="pt-4 left-0 right-0 z-50">
      
      <nav className="w-full container mx-auto px-4 py-5">
        <div className="flex items-center justify-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/logo.png" alt="Logo" className="h-16 md:h-20" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={'font-poppins font-light uppercase tracking-wide text-base md:text-lg text-gray-300/80 hover:text-white transition-colors duration-300'}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;