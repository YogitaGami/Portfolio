import React from "react";
import data from "./info.json";

const Hero = () => {
  return (
    <section className="relative">
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
          <button>
            <a
              href="#projects"
              className="mt-8 px-6 py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointer"
            >
              View Projects
            </a>
          </button>
          <button>
            <a
              href="#contact"
              className="mt-8 px-6 py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointer"
            >
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
