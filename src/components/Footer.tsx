import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourhandle' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourprofile' },
  ];

  const footerLinks = [
    { title: 'Home', url: '#hero' },
    { title: 'Projects', url: '#projects' },
    { title: 'Skills', url: '#skills' },
    { title: 'Contact', url: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">Haroon Rasheed</h3>
            <p className="text-gray-300">
            Specializing in front-end development with expertise in JavaScript, React, Next.js, and Tailwind CSS.


            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="hover:text-blue-400 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-center space-x-2">
              <SiGmail className="text-blue-400" />
              <a href="itxharoonkhan@gmail.com" className="hover:text-blue-400">
                itxharoonkhan@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaFileDownload className="text-blue-400" />
              <a
                href="/img/My cv.pdf"
                download
                className="hover:text-blue-400 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 text-center text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Haroon Rasheed. All rights reserved.
            <span className="block sm:inline"> Crafted with  using Next.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
