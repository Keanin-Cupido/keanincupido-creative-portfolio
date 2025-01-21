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
    <section id="about" className="py-20 px-4 bg-dark-100">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-roboto font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 font-poppins text-lg leading-relaxed">
            I'm a hobbyist creative with a passion for digital art and design. 
            My interests include 3D modeling, digital illustration, and exploring graphic design, always seeking to express 
            my creativity in new and exciting ways.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-200 p-6 rounded-lg"
            >
              <div className="bg-dark-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-roboto font-bold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-300 font-poppins">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;