
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDoNow from './components/WhatIDoNow';
import IdentityStats from './components/IdentityStats';
import About from './components/About';
import Family from './components/Family';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import EducationSkills from './components/EducationSkills';
import BlogSection from './components/BlogSection';
import SocialConnect from './components/SocialConnect';
import Contact from './components/Contact';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <WhatIDoNow />
        <IdentityStats />
        <About />
        <Family />
        <Gallery />
        <Experience />
        <EducationSkills />
        <BlogSection />
        <SocialConnect />
        <Contact />
      </main>

      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold text-blue-900">Sujon.</div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shahadat Hossain Sujon. Personal Introduction Website.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-slate-400 hover:text-blue-900 transition-colors">About</a>
            <a href="#gallery" className="text-slate-400 hover:text-blue-900 transition-colors">Gallery</a>
            <a href="#contact" className="text-slate-400 hover:text-blue-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
