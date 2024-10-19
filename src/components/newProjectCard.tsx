import * as React from "react"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"
import arrowRight from '../assets/arrowRight.svg'
import { Link } from "react-router-dom"

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  action: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category, description, action, link}) => {
  return (
    <Card className="w-[350px] flex flex-col gap-2">
      <CardHeader>
        <CardTitle className="h-16">{title}</CardTitle>
        <img className="rounded-lg" src={imageUrl} alt={title} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <CardDescription>{description}</CardDescription>
          <Badge variant="secondary" className="w-fit">{ category }</Badge>
        </div>
      </CardContent>
      <CardFooter className="h-16">
        <Button asChild variant="ghost"><Link key="project" to={link}>{action} <img src={arrowRight} alt="->" className="h-4 w-4"/></Link></Button>
      </CardFooter>
    </Card>
  )
}
export default ProjectCard