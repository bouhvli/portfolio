import React from 'react';

interface ProjectFeatureProps {
  title: string;
  description: string;
  icon: string | JSX.Element;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#e7e4d0] bg-[#fcfcf8] p-4 flex-col">
      <div className="text-[#0e1b1a] w-6">
      {typeof icon === 'string' ? (
          <img src={icon} alt="icon" />
        ) : (
          icon 
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#0e1b1a] text-base font-bold leading-tight">{title}</h2>
        <p className="text-[#97904e] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default ProjectFeature;
