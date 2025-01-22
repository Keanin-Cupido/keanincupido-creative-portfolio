import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-dark-100 flex items-center justify-center relative py-4 md:h-[60vh] h-[75vh]">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Creative
            <span className="text-primary"> Portfolio</span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Exploring the intersection of art and technology through 3D modeling,
            illustration, and graphic design.
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;