import React from "react";
import data from "./info.json";

const About = () => {
  return (
    <section
      id="about"
      className="p-40 flex flex-row justify-center items-center gap-12 min-h-screen bg-gradient-to-br from-[#013c36] via-[#013e6c] to-black"
    >
      <div className="w-4/5">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-2 w-28 h-2 bg-[#0ffbfd] border-2 border-x-[#45aaaa] border-y-[#33aeae] shadow-[#45aaaa] shadow-[10px_0px_10px_rgba(0,0,0,0.3)]"></div>
        <p className="mt-8 text-xl">{data.About.Heading}</p>
        <div className="text-2xl font-semibold mt-4">Skills Summary:</div>
        <ul className="text-xl mt-5">
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
        <button className="mt-8">
            <a
              href="#download"
              className="mt-8 px-6 py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointer"
            >
              Download Resume
            </a>
          </button>
      </div>
      <div className="w-1/3 ml-32">
        <img className="rounded-xl shadow-[#013e6c] shadow-[15px_10px_2px_rgba(0,0,0,0.3)]" src="Yogita photo.jpg" alt="" />
      </div>
    </section>
  );
};

export default About;
