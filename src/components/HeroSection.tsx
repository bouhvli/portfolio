import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full flex-1">
        <div className="@container">
          <div className="flex flex-row items-center gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-col">
            <div
              className="w-full h-[270px] bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
              style={{
                backgroundImage:
                  "url('https://amprius.com/wp-content/uploads/2023/11/amp-gis-terrain-topography-1200w.jpg')",
              }}
            ></div>
            <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-black text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Our Work
                </h1>
                <h2 className="text-black text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Leveraging the power of GIS, MCA, and web development, these projects aim to transform Essaouira into a thriving hub of sustainability, education, and tourism. From building a wastewater treatment plant that protects the city's natural water sources to developing an innovative educational facility that nurtures cultural growth, each initiative is designed to enhance the city's livability. Additionally, an interactive tourist circuit showcases Essaouira's vibrant attractions, offering visitors an immersive experience through optimized maps and rich multimedia. Together, these efforts work towards a vision of sustainable growth and a flourishing Essaouira.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
