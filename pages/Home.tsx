import React from 'react';
import Hero from '../components/Hero';
import ProgramBar from '../components/ProgramBar';
import ValueProp from '../components/ValueProp';
import Portfolio from '../components/Portfolio';
import GeminiAdvisor from '../components/GeminiAdvisor';
import FinalCTA from '../components/FinalCTA';
import AlumniSpeak from '../components/AlumniSpeak';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* Substantial gap between Hero and ProgramBar for smooth entry */}
      <div className="py-12 md:py-20 lg:py-24">
        <ProgramBar />
      </div>
      
      {/* Balanced gap between Reality and Showcase */}
      <div className="pt-12 pb-8 md:pt-20 md:pb-12">
        <ValueProp />
      </div>
      <div className="py-8 md:py-12">
        <Portfolio />
      </div>
      
      {/* Balanced gap between AI Oracle and Alumni Speak */}
      <div className="pt-12 pb-8 md:pt-20 md:pb-12">
        <GeminiAdvisor />
      </div>
      <div className="py-8 md:py-12">
        <AlumniSpeak />
      </div>
      
      <FinalCTA />
    </>
  );
};

export default Home;