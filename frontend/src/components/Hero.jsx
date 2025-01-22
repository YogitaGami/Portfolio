import React from "react";
import data from "../data/info.json";
import Button from "./Button";
import resume from "../assets/document/resume.pdf"

const Hero = () => {
  return (
    <section id="hero" className="relative">
      {/* Background image container */}
      <div
        className="absolute bg-cover bg-center inset-0"
        style={{ backgroundImage: 'url("/Portfolio Background.png")' }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center mx-10 md:mx-20 lg:mx-80 ">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">{data.Hero.Title}</h2>
        <p className="text-xl md:text-2xl lg:text-3xl mt-6 md:mt-8">{data.Hero.Tagline}</p>
        <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6">{data.Hero.Introduction}</p>
        <div className="flex flex-row  flex-wrap justify-center items-center gap-14 md:gap-20 lg:gap-32 pt-10 md:pt-20">
          <Button title="Veiw Projects" link="#projects" />
          <Button title="Hire Me" link="#contact" />
          <a href={resume} download><Button title="Download Resume"/></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
