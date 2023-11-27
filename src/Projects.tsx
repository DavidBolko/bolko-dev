import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col h-screen items-center">
      <h3 className="text-2xl mb-6">Projects</h3>
      <ul className="flex flex-col gap-2 p-6 pt-0 overflow-hidden w-full lg:w-1/2" id="projects">
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
      </ul>
    </section>
  );
};

export default Projects;
