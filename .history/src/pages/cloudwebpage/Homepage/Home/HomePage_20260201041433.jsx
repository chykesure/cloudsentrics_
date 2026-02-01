import React from 'react';
import CloudHeader from '../Header/CloudHeader';
import HeroSection from '../Herosection/HeroSection';
import MainBody from '../Mainbody/MainBody';
/* import CloudFooter from '../../Footer/CloudFooter'; */

const HomePage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <CloudHeader />
      
       <HeroSection />
      
      <MainBody /> 
      
      {/* Add more sections here as you build them */}
      
      {/* <CloudFooter /> */}
    </div>
  );
};

export default HomePage;