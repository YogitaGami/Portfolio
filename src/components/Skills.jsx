import React from "react";
import Heading from "./Heading";
import data from "./info.json";

const Skills = () => {
  const skills = data.Skills;
  return (
    <section id="skills" className="skills-section relative min-h-[90vh] py-24 px-40">
      <div class="absolute inset-0 -z-10 h-full w-full bg-[#0180a7] bg-[linear-gradient(to_right,#1d7ba5_1px,transparent_1px),linear-gradient(to_bottom,#1d7ba5_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-44 -z-10 m-auto h-[580px] w-[950px] rounded-full bg-cyan-950 blur-[150px]"></div></div>
        <Heading heading="Skills" reason="Why Choose me" />
        <div className="flex flex-wrap gap-x-28 gap-y-10">
          {Object.entries(skills).map(([skill, percentage]) => (
            <div className="flex gap-1 items-center">
              <span className="w-24 pr-1 font-semibold">{skill}</span>
              <div className="relative w-[24rem] h-2 bg-cyan-900 rounded-xl">
                <div
                  className="absolute bg-cyan-500 h-2 rounded-l-xl"
                  style={{ width: `${percentage}` }}
                ></div>
              </div>
              <span className="text-cyan-500 pl-1">{percentage}</span>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Skills;

