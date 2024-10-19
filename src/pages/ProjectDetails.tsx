import React from 'react';
import { Button } from '../components/ui/button';
import arrowDown from '../assets/arrowDown.svg'
import ProjectFeature from '../components/project/ProjectFeature';
import { useParams } from "react-router-dom";


import report from "../assets/repport.svg";
import wwtpMeth from "../assets/wwtp_methodology.jpg";
import scholMeth from '../assets/school_methodology.jpg';
import study from '../assets/studyarea.png';
import water from '../assets/water.svg';
import land from '../assets/land.svg';
import roads from '../assets/roads.svg'
import junction from '../assets/junction.png';
import buildings from '../assets/buildings.svg';
import flood from '../assets/floodzone.svg';
import powerlines from '../assets/powerlines.png';
import river from '../assets/river.svg';
import slope from '../assets/slope.png';
import existingSchool from '../assets/schools.svg';
import vacantland from '../assets/vacantland.png';
import resultwwtp from '../assets/wwtpResults.png';
import resultSchool from '../assets/school_result_map.png';

const schoolImgUrl = "https://nichehomes.com/wp-content/uploads/2022/09/School-Choice-Salt-Lake-County-High-School-Options-7-e1664374229810.jpg"
const wwtpImgUrl = "https://www.royalhaskoningdhv.com/-/media/images/websites/twinn/insights/blogs/automation-at-industrial-wastewater-treatment-plants.jpg?h=1080&iar=0&w=1920&hash=FA28DBD99450DA5602DD7E9EF0FDF299"

const projects = [
  {
    id: 1, name: "Finding a suitable site for building a WWTP",
    description: "By treating wastewater before release, this plant safeguards fragile ecosystems and addresses the health risks posed by increasing urban density and tourism. ",
    img: wwtpImgUrl,
    methodologyDesc: "detailed breakdown of the individual steps and progress at each stage. Throughout this study, three key sets of data – environmental, geological, and economic criteria – alongside multiple parameters, will be utilised to identify an optimal site for constructing a wastewater treatment plant ",
    methodologyImg: wwtpMeth,
    factors: [
      {
        title: 'Water Ways',
        description: 'Natural or man-made water bodies such as rivers, streams, and canals that impact land use, infrastructure planning, and flood management.',
        icon: (water)
      },
      {
        title: 'Lowland',
        description: 'Geographical areas with low elevation, often prone to water accumulation and flooding, requiring careful planning for drainage and flood prevention.',
        icon: (land)
      },
      {
        title: 'Roads',
        description: 'Existing transportation networks providing crucial access and connectivity for development, essential for urban planning and logistics.',
        icon: (roads)
      },
      {
        title: 'Junction Point',
        description: 'Critical points in infrastructure, such as wastewater or utility junctions, serving as hubs for water or electricity distribution.',
        icon: (junction)
      },
      {
        title: 'Buildings',
        description: 'Current structures, including residential, commercial, or public facilities, which influence zoning, development, and land-use decisions.',
        icon: (buildings)
      },
      {
        title: 'Flood Zone',
        description: 'Designated areas at high risk of flooding, where special measures are required for construction, insurance, and land management.',
        icon: (flood)
      }
      
    ],
    resultMap: resultwwtp,
    resultDiscution: `This comprehensive map fuses essential points obtained from the intensive analysis conducted on QGIS. It encapsulates a wealth of information highlighting the ideal area for the wastewater treatment plant, while adhering to the criteria outlined in this report.<br><br>

                      <b>Spatial Relationships and Patterns:</b><br>
                      The first map is a crucial reference point, illustrating the research area's position concerning road networks and the digital elevation model (DEM). Our analysis focused on parcels within 50 meters of roads, meeting our accessibility criterion. Simultaneously, the DEM helped assess elevation, ensuring selected areas are below 80 meters, aligning with our elevation criterion.<br><br>

                      <b>Parcel Suitability and Highlights:</b><br>
                      The second map strategically highlights relevant parcels based on a comprehensive suitability assessment. These parcels not only meet proximity criteria to the river (within 5000 meters) but also consider distance from the junction point and the presence of vacant land (within 500 and 2500 meters). This map effectively narrows down the selection to areas aligning closely with the project's criteria.<br><br>

                      <b>External Factors and Influences:</b><br>
                      The third map, presenting the union of the road buffer and flood zone, offers a clear representation of external factors influencing parcel suitability. Prioritizing parcels outside the flood zone ensures resilience against potential environmental challenges. The analysis also considers parcels within vacant land, aligning with our criteria for appropriate land use.<br><br>

                      In all three maps, a comparative analysis ensures that selected parcels not only meet individual criteria but also form a well-rounded choice. Prioritizing areas exceeding 150 meters from residences and parks contributes to a balanced selection, considering both project-specific needs and community considerations.
                      `,
    repport: 'https://drive.google.com/file/d/11mkH_z2_J1eSC16Bsf5GlFhjZBpr2sCo/view?usp=sharing',
    repportName: 'Rapport_WWTP.pdf',
  },
  {
    id: 2, name: "Finding a suitable site for building a high school",
    description: "create dynamic and active educational structures that not only respond to the existing population but also contribute to the cultural sustainability and overall development of Essaouira.",
    img: schoolImgUrl,
    methodologyDesc: "detailed breakdown of the individual steps and progress at each stage. Throughout this study, three key sets of data – environmental, geological, and economic criteria – alongside multiple parameters, will be utilised to identify an optimal site for constructing a wastewater treatment plant ",
    methodologyImg: scholMeth,
    factors: [
      {
        title: 'High-Voltage Power Transmission Lines',
        description: 'Natural or man-made water bodies such as rivers, streams, and canals that impact land use, infrastructure planning, and flood management.',
        icon: (powerlines)
      },
      {
        title: 'Existing High Schools',
        description: 'Geographical areas with low elevation, often prone to water accumulation and flooding, requiring careful planning for drainage and flood prevention.',
        icon: (existingSchool)
      },
      {
        title: 'Roads',
        description: 'Existing transportation networks providing crucial access and connectivity for development, essential for urban planning and logistics.',
        icon: (roads)
      },
      {
        title: 'River',
        description: 'Critical points in infrastructure, such as wastewater or utility junctions, serving as hubs for water or electricity distribution.',
        icon: (river)
      },
      {
        title: 'Vacant Land',
        description: 'Current structures, including residential, commercial, or public facilities, which influence zoning, development, and land-use decisions.',
        icon: (vacantland)
      },
      {
        title: 'Slope',
        description: 'Designated areas at high risk of flooding, where special measures are required for construction, insurance, and land management.',
        icon: (slope)
      }
      
    ],
    resultMap: resultSchool,
    resultDiscution: `Our comprehensive analysis, supported by Geographic Information Systems (GIS), Multi-Criteria Analysis (MCA), and the Analytical Hierarchy Process (AHP), is visually depicted in the map illustrating the identified suitable sites for constructing a new school.<br> 
                        By meticulously evaluating various criteria and applying the vacant land constraint, we have successfully delineated areas that harmonize with our objectives of enhancing accessibility, ensuring safety, and enhancing the resilience of infrastructure.<br>
                        This map serves as a tangible representation of our efforts to identify optimal locations, demonstrating our commitment to informed decision-making and strategic planning in healthcare facility development.
                        <br><br>

                      <b>Parcel Suitability and Highlights:</b><br>
                      Our study identified three locations that meet our criteria, each exceeding 2.2 hectares, suitable for schools with an average of 24 to 32 classrooms, and conveniently located near the city.<br>One site, located in the east adjacent to National Road R207, spans 5 hectares. Another site, also in the east, is situated right next to Av. Attaîf and covers 20 hectares.<br>The third site, with a surface area of 3 hectares, is positioned in the south of the city along Road Number P2201. <br>These findings demonstrate the effectiveness of our approach in identifying viable school site locations based on scientific analysis and criteria.<br><br>`,
    repport: 'https://drive.google.com/file/d/199O2QtFiX0wRGamPchnAZ-IFXztksZmf/view?usp=sharing',
    repportName: 'Repport_of_School_project.pdf',

  },
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id!));

  if (!project) {
    return <h2>Project not found</h2>;
  }
  const downloadfile = () => {
    const resumeUrl = project.repport;
  
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = project.repportName;
  
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div
          className="flex min-h-[480px] flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${project.img})`,
          }}
          >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              {project.name}
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            {project.description}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-start pl-4">
          <h1 className="text-[#0e1b1a] tracking-light text-[32px] font-bold leading-tight pt-12 @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Study Area
          </h1>
          <div className="flex flex-row-reverse items-center gap-4">
            <p className="text-[#0e1b1a] text-base font-normal leading-normal">
            The late-18th-centry town in the eastern Morocco, Essaouira is rugged terrain on the western slopes of the high Atlas Mountains meets the Atlantic Ocean on the west, bounded by Essaouira Province to north, Agadir Province to the south, and Chichaoua Province to the east.Essaouira, known for its unique charm and historical significance, has become a key tourist destination in Morocco. In 2023, the city saw a significant increase in tourism, welcoming 667,629 visitors, up from 510,574 visitors in 2018 and 484,181in 2022. This growth reflects a broader trend in Morocco, where tourism overall increased by 34% in 2023 compared to 2022.
            </p>
            <img src={study} className="w-80 " />
          </div> 
        </div>

        <div className="flex flex-col gap-2 text-start pl-4">
          <h1 className="text-[#0e1b1a] tracking-light text-[32px] font-bold leading-tight pt-12 @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Criterion Used
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {project.factors!.map((feature, index) => (
            <ProjectFeature key={index} {...feature} />
          ))}
        </div>
        <div className="flex flex-col gap-2 text-start pl-4">
          <h1 className="text-[#0e1b1a] tracking-light text-[32px] font-bold leading-tight pt-12 @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Methodology
          </h1>
          <p className="text-[#0e1b1a] text-base font-normal leading-normal">
          {project.methodologyDesc}
          </p>
          <img src={project.methodologyImg} />
        </div>
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-[#0e1b1a] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              Results of the Analysis
            </h1>
            <div dangerouslySetInnerHTML={{ __html: project.resultDiscution }} />
            <img src={project.resultMap} alt='' />
          </div>
          
        </div>
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-[#0e1b1a] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              Download The project Full Repport
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <img src={report} alt='' className="w-16" />
              <div>
                <h3 className="text-[#7c7c7c] font-bold leading-normal w-[400px] text-sm">{ project.name }</h3>
                <p className="text-[#7c7c7c] font-normal leading-normal w-[400px] text-xs">
                  To see the results of the analysis download the report 
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={downloadfile}
              className="flex flex-row cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 w-30 px-4 @[480px]:h-12 @[480px]:px-5  text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Save </span><img src={arrowDown} className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
