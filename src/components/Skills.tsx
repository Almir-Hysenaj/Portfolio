const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind',
  'Python',
];

const Skills = () => {
  return (
    <div id="skills" className="pt-10 pb-30 px-8 md:px-20">
      {/* Section title */}
      <h2 className="text-teal-500 text-center text-3xl md:text-4xl font-bold mb-10">
        Technical Skills
      </h2>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-900/50 text-teal-600 rounded-full font-medium shadow-sm hover:shadow-md transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
