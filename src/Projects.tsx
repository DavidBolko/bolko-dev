import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { getProjectsData } from "./util";
import { Project } from "./types";


const Projects = () => {
  const [projects, setProjects] = useState<Project[]>();
  useEffect(()=>{
    async function fetchProjects(){
      const data = await getProjectsData();
      if(data){
        setProjects(data);
      }
    }
    fetchProjects()
  }, [])
  if(projects){
    return (
      <section className="flex flex-col items-center">
        <h3 className="text-2xl mb-6">Projects</h3>
        <ul className="flex flex-col pr-6 pl-6 md:grid grid-cols-2 lg:grid-cols-3 gap-8 md:pr-36 md:pl-36 w-full" id="projects">
  
          {projects.map((project) => {     
            return(
              <li>
                <ProjectCard desc={project.desc} title={project.name} img={project.img} demoLink={project.demo} sourceLink={project.source}/>
              </li>
            )
          })}
        </ul>
      </section>
    );
  }
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl mb-6">Projects</h3>
      <ul className="flex flex-col pr-6 pl-6 md:grid grid-cols-2 lg:grid-cols-3 gap-8 md:pr-36 md:pl-36 w-full" id="projects">
      </ul>
    </section>
  );
};

export default Projects;
