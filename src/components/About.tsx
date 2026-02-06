const About = () => {
  return (
    <div
      id="about"
      className="py-30 flex flex-col justify-center items-center text-center px-8 md:px-20"
    >
      <h2 className="text-teal-500 text-3xl md:text-4xl font-bold mb-8">
        About Me
      </h2>

      <p className="text-lg text-gray-300 w-[85%] max-w-3xl leading-relaxed mb-3">
        I'm a first-year Computer Science student at the The University of
        Leeds, passionate about web development and building practical
        applications.
      </p>
      <p className="text-lg text-gray-300 w-[85%] max-w-3xl leading-relaxed mb-3">
        I love problem solving and am always eager to learn new technologies and
        improve my skills. In my free time, I enjoy working on personal
        projects, exploring new programming languages.
      </p>
      <p className="text-lg text-gray-300 w-[85%] max-w-3xl leading-relaxed">
        I am planning to expand my knowledge to backend development. Learning
        Node.js, Express, and databases to build full-stack applications.
      </p>
    </div>
  );
};

export default About;
