import React from "react";
import data from "../data/info.json";
import Button from "./Button";
import Heading from "./Heading";
const About = () => {
  return (
    <section
      id="about"
      className="px-9 sm:px-12 md:px-28 lg:px-40 py-12 md:py-16 lg:py-24 min-h-fit lg:min-h-[90vh]  bg-gradient-to-br from-[#013c36] via-[#013e6c] to-black"
    >
      <Heading heading="About" reason="Full Stack Developer"/>
      <div className="grid grid-rows-[30%_66%] md:grid-rows-1 grid-cols-1 md:grid-cols-[66%_30%] justify-center items-center gap-4 md:gap-12">
      <div className="w-full md:order-1  order-2">
        <p className="text-lg md:text-xl">{data.About.Heading}</p>
        <div className="text-xl md:text-2xl font-semibold mt-3 md:mt-4">Skills Summary : </div>
        <ul className="text-lg md:text-xl mt-3 md:mt-5 mb-5 md:mb-10">
          <li className="my-1 md:my-3">
            <span className="font-semibold">Programming Languages : </span>
            {data.Skills_Summary.Programming_Languages}
          </li>
          <li className="my-1 md:my-3">
          <span className="font-semibold">Libraries and Frameworks : </span>
            {data.Skills_Summary.Libraries_and_Frameworks}
          </li>
          <li className="my-1 md:my-3">
          <span className="font-semibold">Databases : </span>
            {data.Skills_Summary.Databases}
          </li>
          <li className="my-1 md:my-3">
          <span className="font-semibold">Tools : </span>
            {data.Skills_Summary.Tools}
          </li>
          <li className="my-1 md:my-3">
          <span className="font-semibold">API Development : </span>
            {data.Skills_Summary.API_Development}
          </li>
        </ul>
        <a href="src/assets/document/resume.pdf" download><Button title="Download Resume"/></a>
      </div>
      <div className="w-full md:order-2 order-1">
        <img className="rounded-xl mx-auto shadow-[#013e6c] shadow-[15px_10px_2px_rgba(0,0,0,0.3)] transition-all hover:opacity-30 hover:rotate-3" src="src/assets/image/Yogita photo.jpg" alt="" />
      <div className="flex gap-x-5 justify-center mt-5">
        <a href="http://linkedin.com/in/yogita-gami257" target="blank"><img className="size-7" src="src/assets/image/linkedin-in.svg" alt="" /></a>
        <a href="http://github.com/YogitaGami" target="blank"><img className="size-7" src="src/assets/image/github.svg" alt="" /></a>
      </div>
      </div>
      </div>
    </section>
  );
};

export default About;
