import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import JapaneseJLPT from './component/JapaneseJLPT';
import GermanLevels from './component/GermanLevels';
import Testimonials from './component/Testimonials';
import Faculty from './component/Faculty';
import VideoTestimonials from './component/VideoTestimonials';
import GoalsSection from './component/GoalSections';
import ContactSection from './component/ContactSection';
import PhotoGallary from './component/PhotoGallary';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <GoalsSection />
      <GermanLevels />
      <JapaneseJLPT />
      <Testimonials />
      <Faculty />
      <PhotoGallary />
      <VideoTestimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App;
