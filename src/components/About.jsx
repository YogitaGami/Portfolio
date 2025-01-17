import React from "react";
import data from "./info.json";
import Button from "./Button";
import Heading from "./Heading";
const About = () => {
  return (
    <section
      id="about"
      className="px-40 py-24 flex flex-row justify-center items-center gap-12 min-h-[90vh] bg-gradient-to-br from-[#013c36] via-[#013e6c] to-black"
    >
      <div className="w-4/5">
        <Heading heading="About" reason="Full Stack Developer"/>
        <p className="text-xl">{data.About.Heading}</p>
        <div className="text-2xl font-semibold mt-4">Skills Summary:</div>
        <ul className="text-xl mt-5 mb-10">
          <li className="my-3">
            <b>Programming Languages : </b>
            {data.Skills_Summary.Programming_Languages}
          </li>
          <li className="my-3">
            <b>Libraries and Frameworks : </b>
            {data.Skills_Summary.Libraries_and_Frameworks}
          </li>
          <li className="my-3">
            <b>Databases : </b>
            {data.Skills_Summary.Databases}
          </li>
          <li className="my-3">
            <b>Tools : </b>
            {data.Skills_Summary.Tools}
          </li>
          <li className="my-3">
            <b>API Development : </b>
            {data.Skills_Summary.API_Development}
          </li>
        </ul>
        <Button title="Download Resume" link="" />
      </div>
      <div className="w-1/3 ml-32">
        <img className="rounded-xl shadow-[#013e6c] shadow-[15px_10px_2px_rgba(0,0,0,0.3)]" src="src/assets/image/Yogita photo.jpg" alt="" />
      </div>
    </section>
  );
};

export default About;
