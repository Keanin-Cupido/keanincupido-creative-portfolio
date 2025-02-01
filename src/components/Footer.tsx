import { motion } from 'framer-motion';
import { Link2Icon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Link2Icon className="w-5 h-5" />, href: 'https://www.artstation.com/keanincupido', label: 'Artstation' }
  ];

  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <img src="/logo-sm.png" alt="Keanin Cupido Creative Portfolio Logo" className="h-16 md:h-20" />
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-dark-200 p-3 rounded-full text-gray-300 hover:text-primary hover:bg-dark-100 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-dark-100 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-poppins text-xs">
            © {currentYear} Keanin Cupido Creative Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;