'use client';
import React from 'react';
import HeaderSection from '../../_components/Header';
import Footer from '../../_components/Footer';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/aboutUs.css';

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderSection />
      <div className="about-container">
        <div className="profile-image">
          <Image
            src="/MunAi3.jpg"
            alt="Ghulam Muneer Uddin"
            width={300}
            height={300}
            className="image"
          />
        </div>

        <h1 className="title">ABOUT ME</h1>

        <div className="content-container">
          <p className="text-lg">
            I&apos;m Ghulam Muneer Uddin, I am a pharmacist turned web developer passionate about creating user-centric applications that blend functionality and design. Leveraging my healthcare expertise, I specialize in front-end development with skills in TypeScript, HTML, CSS, Next.js, and Figma. I thrive on solving challenges and delivering impactful solutions.
          </p>

          <h2 className="subtitle">My Journey</h2>
          <p className="text-lg">
            &quot;My web development journey began with mastering HTML, CSS, and TypeScript, progressing to dynamic websites with Next.js, all while integrating design and entrepreneurship.&quot;
          </p>

          <h2 className="subtitle">What Drives Me</h2>
          <p className="text-lg">
            I&apos;m passionate about creating impactful applications, and I&apos;m excited by the potential of AI and the Metaverse in shaping the future of technology.
          </p>

          <h2 className="subtitle">Looking Ahead</h2>
          <p className="text-lg">
            I&apos;m eager to collaborate on innovative projects that push technological boundaries, especially in AI, blockchain, and web development.
          </p>
        </div>

        <div className="top-button-container">
          <button onClick={scrollToTop} className="top-button">
            <FaArrowUp className="arrow-icon" /> Go to Top
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
