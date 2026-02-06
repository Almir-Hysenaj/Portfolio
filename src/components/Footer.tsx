import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-3 px-8 py-7 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-300 mb-4 md:mb-0">
        © {new Date().getFullYear()} Almir. All rights reserved.
      </p>

      {/* Contact links */}
      <div className="max-w-full md:max-w-7xl flex flex-wrap justify-center gap-4 md:gap-8">
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
    </div>
  );
};

export default Footer;
