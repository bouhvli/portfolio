import React from "react";
import ProjectCard from "./newProjectCard";

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id:1,
      imageUrl: 'https://www.hydrotech-group.com/files/ckeditor/cisticka.jpg',
      title: 'Sustainable Wastewater Management',
      category: 'GIS, OSM, QGIS, Google Earth Engine',
      action: 'Visit Project page',
      link:'/projectDetails/1',
      description: 'This project focuses on the construction of a modern wastewater treatment plant (WWTP) in Essaouira. Utilizing GIS technologies, the plant will efficiently treat wastewater to prevent environmental contamination, safeguarding local water resources and public health.'
    },
    {
      id:2,
      imageUrl: 'https://nichehomes.com/wp-content/uploads/2022/09/School-Choice-Salt-Lake-County-High-School-Options-7-e1664374229810.jpg',
      title: 'Modern Educational Infrastructure',
      category: 'GIS, OSM, QGIS, ArcScene, SketchUp',
      action: 'Visit Project page',
      link:'/projectDetails/2',
      description: 'The initiative aims to build a new school in Essaouira that provides a safe and contemporary learning environment. By incorporating GIS tools for site selection and design, the project will enhance the educational experience for students and support cultural sustainability in the region.',
    },
    {
      id:3,
      imageUrl: 'https://f2.hespress.com/wp-content/uploads/2023/08/essaouira-tourisme.jpg',
      title: 'Cultural and Natural Heritage Circuit',
      category: 'GMaps, HTML, CSS, JavaScript, Leaflet',
      action: 'Visit Web site',
      link:'https://essaouira-s-way.vercel.app/',
      description: 'This project involves the development of a tourist circuit showcasing Essaouira\'s unique attractions, including historical sites and natural parks. Leveraging GIS and remote sensing technologies, featuring detailed maps and multimedia to enhance visitor experiences and promote tourism in the city.',
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 p-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          category={project.category}
          action={project.action}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;
