import { motion } from 'framer-motion';
import { GoComment } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";
import Image from 'next/image';

const Contact = () => {
  const formFields = [
    {
      label: "Name",
      type: "text",
      placeholder: "Your Name",
      icon: null
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Your Email",
      icon: <SiMinutemailer className="inline-block mr-2" />
    },
    {
      label: "Message",
      type: "textarea",
      placeholder: "Your Message",
      icon: <GoComment className="inline-block mr-2" />
    }
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
    <section
      className="relative flex items-center justify-center min-h-screen w-full"
      id="contact"
      aria-label="Contact Section"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/originals/f3/d9/c2/f3d9c2149aacff30ea739ea54db67a83.gif"
          alt="Background animation"
          layout="fill"
          objectFit="cover"
          quality={50}
          className="opacity-50"
          priority
        />
      </div>

      <motion.div
        className="relative z-10 bg-black/60 backdrop-blur-lg p-6 rounded-xl shadow-2xl w-full max-w-2xl mx-4 lg:mx-0"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {formFields.map((field) => (
            <motion.div
              key={field.label}
              variants={itemVariants}
              className="space-y-2"
            >
              <label className="block text-gray-200 text-sm font-medium">
                {field.icon}
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  rows={4}
                  placeholder={field.placeholder}
                  required
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder={field.placeholder}
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            Send Message
            <SiMinutemailer className="text-lg" />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
