import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='container mx-auto pt-10 mr-32 '
    >
      <div className="flex justify-between items-end">
        {/* ✅ Brand Name with Smooth Appearance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='text-2xl font-medium'
        >
          Haroon Rasheed
        </motion.div>


        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='hidden md:flex gap-8 lg:gap-16 '
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#3b82f6" }} // Hover Animation
              transition={{ duration: 0.2 }}
              className='menuLink'
            >
              <a href={item.href} className='hover:text-blue-500'>{item.text}</a>
            </motion.li>
          ))}
        </motion.ul>


        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-xl"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.8 }}
        >
          <IoMenu size={30} />
        </motion.button>
      </div>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05, color: "#3b82f6" }}
                  transition={{ duration: 0.2 }}
                  className='menuLink'
                >
                  <a
                    href={item.href}
                    className='hover:text-blue-500 block py-2'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
