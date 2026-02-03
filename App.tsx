
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramBar from './components/ProgramBar';
import About from './components/About';
import ValueProp from './components/ValueProp';
import Courses from './components/Courses';
import Mentors from './components/Mentors';
import GeminiAdvisor from './components/GeminiAdvisor';
import Portfolio from './components/Portfolio';
import AlumniSpeak from './components/AlumniSpeak';
import Community from './components/Community';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF0000] selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProgramBar />
        <About />
        <ValueProp />
        <Courses />
        <Mentors />
        <GeminiAdvisor />
        <Portfolio />
        <AlumniSpeak />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
