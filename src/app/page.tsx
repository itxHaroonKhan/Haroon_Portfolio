"use client"; // This marks the file as a Client Component


import React, { useEffect } from 'react';
import Hero from "@/components/Hero";
import Skills from '@/components/skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import AOS from "aos";
import "aos/dist/aos.css"

export default function Home() {

  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      easing: "ease-in-back",     // Set easing function
      duration: 1200,             // Duration of animations
      delay: 100,                 // Delay before the animation starts
      mirror: true,               // Allow animation to happen when scrolling back
      anchorPlacement: "bottom-bottom", // Position when determining trigger point
      offset: 160,                // Offset to trigger the animation
    });

    AOS.refresh(); // Refresh AOS to ensure it is updated
  }, []);

  return (

    <>
    <main>
      <Navbar  />
      <hr  className='mt-7'/>
      <Hero  />
      <hr className='mt-11' />
<About/>
<hr />
<Projects/>
      <hr />

<Skills/>


<hr />

<Contact/>
<hr />
<Footer/>
    </main>
    </>
  );
}

import Footer from '@/components/Footer';
import Projects from '@/components/projects';import Navbar from '@/components/Navbar';

