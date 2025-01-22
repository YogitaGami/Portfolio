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
    <header className="fixed z-20 w-full flex sm:justify-between max-sm:justify-around justify-normal items-center p-2 md:p-4 lg:p-6 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd]">
      <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-[#3ac0c3]">My Portfolio</h1>
      <nav>
      {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-1 md:px-2 lg:px-4 py-0.5 md:py-1 lg:py-2 text-xs md:text-sm lg:text-base text-[#3cb1b3] hover:text-[#0ffbfd] ${
                activeSection === section.id
                  ? "font-bold text-xs md:text-sm lg:text-base text-[#0180a7] border-b-[1px] lg:border-b-2 border-black"
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

