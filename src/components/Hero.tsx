import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="pt-50 pb-30 flex flex-col justify-center items-center text-center px-8 md:px-20"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
        Hello, I'm <span className="text-teal-500">Almir</span>
      </h1>

      {/* Contact links */}
      <div className="max-w-full md:max-w-7xl mb-7 py-4 flex flex-wrap justify-center gap-4 md:gap-8">
        {/* Email */}
        <a
          href="mailto:almir.hysenaj@outlook.com"
          className="flex items-center space-x-2 text-white hover:text-teal-400"
        >
          <FaEnvelope className="w-5 h-5" />
          <span>Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Almir-Hysenaj"
          target="_blank"
          className="flex items-center space-x-2 text-white hover:text-teal-400"
        >
          <FaGithub className="w-5 h-5" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/almir-hysenaj-84b20629a/"
          target="_blank"
          className="flex items-center space-x-2 text-white hover:text-teal-400"
        >
          <FaLinkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>

        {/* CV */}
        <a
          href="/CV.pdf"
          target="_blank"
          className="flex items-center space-x-2 text-white hover:text-teal-400"
        >
          <span>CV</span>
        </a>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-300">Located in Leeds, UK</p>
    </div>
  );
};

export default Hero;
