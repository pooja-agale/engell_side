import React from 'react';
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

const App = () => {
  return (
    <div className="bg-watermark h-full">
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
    </div>
  )
}

export default App