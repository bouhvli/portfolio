import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

const Project: React.FC = () => {
  return (
    <div className="w-[90%] flex items-center justify-center flex-col gap-4">
          <HeroSection />
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-black text-[22px] font-bold leading-tight px-4 pb-3 pt-5">
          Featured projects
        </h2>
        <FeaturedProjects />
      </div>
      <Footer />
  </div>
  );
}
export default Project;