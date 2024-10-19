import React from 'react';

const ProjectCTA: React.FC = () => {
  return (
    <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[#0e1b1a] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Ready to start your decarbonization journey?
        </h1>
        <p className="text-[#0e1b1a] text-base font-normal leading-normal max-w-[720px]">
          Schedule a demo to see how EcoSense can help you achieve your sustainability goals
        </p>
      </div>
      <div className="flex flex-1 justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#19e6d2] text-[#0e1b1a] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
          <span className="truncate">Learn more about our technology</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCTA;
