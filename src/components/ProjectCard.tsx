interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  github,
  demo,
  image,
}) => {
  return (
    <div className="bg-gray-900/75 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-2xl mx-auto">
      {/* Image */}
      {image && (
        <div className="w-full aspect-video overflow-hidden rounded-md mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Title, description and tech used */}
      <h3 className="text-2xl font-semibold mb-2 text-teal-600">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-gray-400 mb-4">Tech: {tech.join(', ')}</p>

      {/* GitHub and Demo links */}
      <div className="flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            className="text-teal-700 hover:underline"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="text-teal-700 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
