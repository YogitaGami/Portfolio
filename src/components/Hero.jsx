import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="flex flex-row gap-28">
        <div className="w-1/2 pl-14">
          <h2 className="text-4xl md:text-6xl font-bold">
            Hi, I'm Yogita Gami
          </h2>
          <p className="text-3xl mt-4">
            An Aspiring MERN Stack Developer with a passion for creating
            innovative web applications.
          </p>
          <p className="text-xl mt-4">
            "I specialize in building full-stack applications using MongoDB,
            Express.js, React.js, and Node.js. My journey in tech is fueled by
            curiosity and a desire to solve real-world problems through code."
          </p>
          <div className="flex flex-row justify-center items-center gap-32 pt-14">
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
        <div className="w-1/2 flex flex-col items-center justify-center">
          <img className="rounded-xl" src="Yogita photo.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
