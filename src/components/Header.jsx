import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full flex justify-between items-center p-6 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd]">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4 gap-x-32">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
