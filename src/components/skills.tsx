import React from 'react';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  const skillsItems = [
    'HTML',
    'CSS',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind',
    'Sanity CMS',
    'MS Office',
    'Basic Computer',
    'Git',
    'GitHub',       // Added GitHub
    'Vercel',       // Added Vercel
    
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col" id="skills">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Welcome to My Skills Page
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A showcase of the technologies I work with and enjoy.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 pt-12" >


        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Technologies I Work With
          </motion.h2>

          <motion.p
            className="text-fuchsia-400 md:text-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            I specialize in modern web technologies that enhance both user experience and development efficiency.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-44"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsItems.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg  md:text-xl lg:text-2xl text-center">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default SkillsPage;
