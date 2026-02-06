const Navbar = () => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className="fixed top-7 left-1/2 -translate-x-1/2 rounded-full overflow-hidden border-teal-800 border-[0.5px] bg-gray-950/50 backdrop-blur-sm shadow-md z-50 w-[calc(100%-2rem)] sm:w-auto px-6 sm:px-16">
      <div className="max-w-7xl mx-auto py-4 flex justify-center">
        <div className="flex space-x-10 md:space-x-20">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-teal-600 transition font-medium text-sm sm:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
