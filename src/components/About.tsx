import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      className=' lg:mt-24 py-16 px-4 md:p-24 lg:p-36 flex items-center justify-center bg-black' // Updated background to black
      id='about'
      aria-label='About Section'
    >
      <div className='max-w-2xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120 }}
          className='relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-8'
        >
          <Image
            src="/img/IMG_20240927_193611.jpg"
            alt="Portrait of John Doe, Web Developer"
            className='rounded-full object-cover'
            fill
            sizes="(max-width: 768px) 128px, 192px"
            priority
          />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'> {/* Text color updated to white */}
            About Me
          </h2>

          <motion.p
            className='text-gray-300 md:text-lg leading-relaxed max-w-prose mx-auto mb-36'  // Text color updated to gray-300 for better contrast on black bg
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
          >
          I am a web developer specializing in React, Next.js, and Tailwind CSS to create responsive and user-friendly websites. I am currently undergoing AI and Web 3.0 training at the Governor House, which is helping me enhance my skills further. My focus is on performance and accessibility, ensuring that the applications I build are efficient and easy to use.
          </motion.p>
        </motion.article>
      </div>
    </section>
  );
}

export default About;
