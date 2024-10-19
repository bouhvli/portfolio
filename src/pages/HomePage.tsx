import React from 'react';

import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

import person from '../assets/Person.svg'
import arrow from '../assets/arrow.svg'
import arrowDown from '../assets/arrowDown.svg'
import aboutimg from '../assets/about.png'
import plang from '../assets/proramminglanguages.png'
import frameworks from '../assets/Frameworks.png'
import databases from '../assets/databases.png'
import gistool from '../assets/gistools.png'
import othertools from '../assets/othertools.png'
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';


const HomePage: React.FC = () => {
  const downloadResume = () => {
    const resumeUrl = 'https://drive.usercontent.google.com/u/0/uc?id=1nfWMx7luwn38NCvSCONLXCKsEcUz0uIy&export=download';
  
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Hamza_BOUHALI_CV.pdf';
  
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <section className=" text-black py-16 flex flex-row ">
        <div className="container mx-auto text-start flex flex-row items-center">
          <div className="mx-auto">
            <h1 className="text-5xl font-bold">Hamza Bouhali</h1>
            <p className="text-2xl mt-4">Full-Stack Developer & GIS Specialist</p>
            <p className="mt-6 max-w-2xl text-lg">
              I’m a passionate developer and geospatial analyst with experience in full-stack development, GIS, and machine learning. 
              I build innovative solutions that integrate technology and spatial data to solve real-world problems.
            </p>
            <div className="flex flex-row gap-4">
              <Button asChild className="mt-8 hover:bg-slate-400"><Link className="hover:text-white" key="project" to={'/project'}>Check our Work <img src={arrow} className="w-4 h-4 ml-2" /> </Link></Button>
              <Button className="mt-8" variant="secondary" onClick={downloadResume}>Download resume <img src={arrowDown} className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>  
          <img src={person} alt="me" />
          </div>
        
      </section>

      {/* About Me Section */}
      <section className="container mx-auto py-16 flex flex-row-reverse items-center justify-center gap-6">
        <div>
        <h2 className="text-4xl font-bold text-end">About Me</h2>
        <p className="text-lg mt-6 max-w-3xl mx-auto text-justify">
          I am a software engineer with expertise in full-stack development, GIS, and spatial data analysis.
          With a strong background in programming languages like Python, C, and JavaScript, I have built web and mobile applications 
          for various industries, including geographic information systems (GIS) and tourism.
        </p>
        </div>
        <div className="w-[45%]">
        <img src={aboutimg} alt="me" />
        </div>

      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center pb-2">Skills</h2>
          <div className="flex flex-wrap justify-center mx-auto my-11 gap-8 w-[100%]">
            <div className="flex flex-col items-center py-4 px-8">
              <h3 className="text-xl font-semibold pb-4">Programming Languages</h3>
              <img className="w-36" src={ plang } alt="programming laguages" />
            </div>
            <div className="flex flex-col items-center py-4 px-8">
              <h3 className="text-xl font-semibold pb-4">Frameworks & Libraries</h3>
              <img className="w-36" src={ frameworks } alt="frameworks" />
            </div>
            <div className="flex flex-col items-center py-4 px-8">
              <h3 className="text-xl font-semibold pb-4">GIS & Geospatial Tools</h3>
              <img className="w-36" src={ gistool } alt="gis tools" />
            </div>
            <div className="flex flex-col items-center py-4 px-8">
              <h3 className="text-xl font-semibold pb-4">Database Management</h3>
              <img className="w-36" src={ databases } alt="databases" />
            </div>
            <div className="flex flex-col items-center py-4 px-8">
              <h3 className="text-xl font-semibold pb-4">Other Tools</h3>
              <img className="w-36" src={ othertools } alt="programminglaguages" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Portfolio Section */}
      <section className="container mx-auto py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <FeaturedProjects />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default HomePage;
