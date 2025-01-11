import React from "react";
import data from "./info.json";
import Button from "./Button";

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
      <div className="relative  min-h-screen flex flex-col justify-center items-center text-center mx-80 ">
        <h2 className="text-4xl md:text-6xl font-bold">{data.Hero.Title}</h2>
        <p className="text-3xl mt-8">{data.Hero.Tagline}</p>
        <p className="text-xl mt-6">{data.Hero.Introduction}</p>
        <div className="flex flex-row justify-center items-center gap-32 pt-20">
          <Button title="Veiw Projects" link="#projects" />
          <Button title="Hire Me" link="#contact" />
          <Button title="Download Resume" link="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
