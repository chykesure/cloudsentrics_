import React from 'react';
import CloudHeader from '../Header/CloudHeader';
import HeroSection from '../Herosection/HeroSection';
import MainBody from '../Mainbody/MainBody';
import CloudFooter from '../Footer/CloudFooter';

const HomePage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen relative">
      <CloudHeader />

      {/* Pull HeroSection up under the header */}
      <div className="-mt-20 pt-20">   {/* Adjust -mt-XX / pt-XX to match your header height */}
        <HeroSection />
      </div>

      <MainBody />
      <CloudFooter />
    </div>
  );
};

export default HomePage;