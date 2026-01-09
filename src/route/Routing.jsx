// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

// Dummy pages
const Home = () => <div className="p-8">Home Page</div>;
const About = () => <div className="p-8">About Us Page</div>;
const German = () => <div className="p-8">German Courses</div>;
const Japanese = () => <div className="p-8">Japanese Courses</div>;
const WhyLearn = () => <div className="p-8">Why Learn Page</div>;
const Contact = () => <div className="p-8">Contact Us Page</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/german" element={<German />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/why-learn" element={<WhyLearn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
