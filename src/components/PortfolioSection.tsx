import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { X, Tag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  medium: string;
}

interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  id: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, subtitle, items, id }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breakpointCols = {
    default: 4,
    1100: 3,
    700: 2,
  };

  const uniqueCategories = ['all', ...new Set(items.map(item => item.medium))];

  const filteredItems = items.filter(item => 
    filter === 'all' ? true : item.medium === filter
  );

  return (
    <section id={id} className="w-full py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <h2 className="text-xl md:text-3xl font-poppins font-bold text-white mb-2 uppercase tracking-wide">{title}</h2>
          <p className="text-gray-300 font-poppins">{subtitle}</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-2 mb-8">
          {uniqueCategories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-5 py-[0.5em] font-poppins text-sm transition-colors duration-300
                ${filter === category 
                  ? 'bg-primary/80 text-white' 
                  : 'bg-dark-300 text-gray-300 hover:bg-accent3'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointCols}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4"
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-roboto font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-200 font-poppins text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Masonry>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-200 rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-auto rounded-t-lg"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;