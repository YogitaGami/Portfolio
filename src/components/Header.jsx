import React, {useState, useEffect} from 'react';

const Header = () => {

  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update active section based on scroll position
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-20 w-full flex justify-between items-center p-6 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd]">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
      {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 text-[#0ffbfd] hover:text-[#013c36] ${
                activeSection === section.id
                  ? "font-bold text-[#0180a7] border-b-2 border-black"
                  : ""
              }`}
            >
              {section.label}
            </button>
          ))}
      </nav>
    </header>
  );
};

export default Header;

