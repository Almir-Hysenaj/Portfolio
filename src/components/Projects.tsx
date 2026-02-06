import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="pt-10 pb-30 px-8 md:px-20">
      {/* Section title */}
      <h2 className="text-teal-500 text-center text-3xl md:text-4xl font-bold mb-15">
        Projects
      </h2>

      {/* Project grid (foreach project in projects.tsx) */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
