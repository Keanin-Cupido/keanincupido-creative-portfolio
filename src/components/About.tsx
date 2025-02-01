import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Monitor } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: '3D Modeling',
      description: 'Amateur in Blender.'
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: 'Digital Art',
      description: 'Love illustration using industry-standard tools.'
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces with a focus on user experience.'
    },
  ];

  return (
    <section id="about" className="w-full py-20 px-4">
      <div className="w-full container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto text-left mb-16"
        >
          <h2 className="text-xl md:text-3xl font-poppins font-bold text-white mb-6 uppercase tracking-wide">About Me</h2>
          <p className="text-gray-300 font-poppins text-base leading-relaxed max-w-3xl">
            I'm a hobbyist creative with a passion for digital art and design. 
            My interests include 3D modeling, digital illustration, and exploring graphic design, always seeking to express 
            my creativity in new and exciting ways.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;