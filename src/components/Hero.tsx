import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";


export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">



      {/* ✅ Hero Section (Center aligned) */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto px-8 sm:px-4 flex-grow">

        {/* ✅ Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-6" // Center text on mobile
        >


<h1 className=" font-bold pb-3">
  <p className="heding text-2xl lg:text-3xl">Friend & Developer </p>
</h1>


          {/* ✅ VIP Description */}
          <p className="text-lg md:text-base sm:text-sm text-gray-300 leading-relaxed mt-6">
            A <span className="text-yellow-400 font-semibold">passionate web developer</span> with expertise in crafting interactive and dynamic web applications.
            I love transforming complex problems into elegant solutions and creating stunning user experiences.
          </p>

          <p className="text-lg md:text-base sm:text-sm text-gray-300 leading-relaxed mt-4">
            With a strong foundation in <span className="text-yellow-400 font-semibold">Next.js, TypeScript, and Tailwind CSS</span>,
            I focus on building <strong>fast, modern, and scalable web apps</strong> with <strong>premium UI/UX</strong>.
          </p>

          <p className="text-lg md:text-base sm:text-sm text-gray-300 leading-relaxed mt-4">
            Currently, I am <strong>expanding my skills</strong> in backend development with <strong>Python & SQL</strong>,
            aiming to become a <strong>full-stack developer</strong> and build <strong>powerful digital solutions</strong>.
          </p>


          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16"
          >
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black text-lg font-semibold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-[0px_4px_15px_rgba(255,215,0,0.7)]">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* ✅ Right Side - Hero Image (Hidden on Mobile) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[500px]">
            <Image
              src="/img/1727446536304.jpg"
              alt="Hero Image"
              width={600} // Image width
              height={400} // Image height
              className="w-full h-full  rounded-e-full object-cover  shadow-[0px_0px_30px_rgba(255,215,0,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
