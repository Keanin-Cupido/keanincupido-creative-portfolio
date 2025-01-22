import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-start relative min-h-screen">
      <div className="w-full px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 text-left"
        >
          <h1 className="font-custom font-bold text-4xl text-white mb-16 mt-16 mx-auto md:mx-24 tracking-wide">
            <div className='text-[8rem] mb-28'> <span className="font-custom text-12xl text-red-500">. </span>KEANIN</div>
            <div className='text-[16rem]'>CUPIDO</div>
          </h1>
          <p className="font-poppins text-2xl md:text-4xl text-gray-300 max-w-3xl mx-auto mb-4">
            Exploring the intersection of art and technology through 3D modeling,
            illustration, and graphic design<span className="font-custom text-5xl text-red-500"> .</span>
          </p>
          <h1 className="font-custom opacity-5 md:opacity-25 text-right font-bold text-4xl text-white mb-4 md:mb-16 mx-auto md:mx-24 tracking-wide">
            <div className='text-[16rem]'>CREATIVE</div>
          </h1>
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