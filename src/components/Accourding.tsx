import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import teacherr from '../assets/hassan.jpg'

export function AccordionSection() {
  return (
    <Accordion type="single" collapsible className="w-[80%]">
      <AccordionItem value="item-1" >
        <AccordionTrigger className="bg-white hover:border-none">Who is the work supperviser?</AccordionTrigger>
        <AccordionContent className="flex flex-row mx-10">
        <img className="h-16  rounded-lg bg-cover" src={teacherr} alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">Hassan Rhinane</p>
            <p className="text-sm text-slate-500 truncate">Director of Research Center In GIS and Land Management, Hassan II University of Casablanca, Morocco</p>
            <p className="text-sm text-slate-500 truncate"><b>Email:</b> rhinanehassan@gmail.com</p>
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="bg-white hover:border-none">What is Master GISMT?</AccordionTrigger>
        <AccordionContent className="flex flex-col mx-10">
        <p className="text-sm text-slate-500">
            The <strong>Master in Geographic Information Systems and Territory Management (Master GISMT)</strong>
            is a graduate program designed to train versatile professionals in the fields<br/> of geography, cartography, and territorial management. The program emphasizes  the organization, processing, and management of geospatial data, including geological,<br/> geographical, and environmental data, using technologies like cartography, remote sensing, quantitative spatial analysis, and Geographic Information Systems (GIS).
        </p>

        <strong className="text-sm text-slate-500">Key Objectives</strong>
        <ul className="text-sm text-slate-500 ">
            <li>Train specialists in the use of geospatial technologies to manage and analyze environmental and territorial data.</li>
            <li>Equip students with skills to work in public institutions or private organizations in roles where cartography, digital geospatial information, IT, and new technologies are essential tools.</li>
        </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="bg-white hover:border-none">What is FS Ain choq?</AccordionTrigger>
        <AccordionContent className="flex flex-row mx-10">
        <p className="text-sm text-slate-500">The Faculty of Sciences Aïn-Chock of Casablanca (FSAC):<br/> is part of the Hassan II University of Casablanca. It was created in 1981 and includes five departments of teaching and research in the following fields:<br/> Mathematics, Computer Science, Physics, Chemistry, Biology, and Geology.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
