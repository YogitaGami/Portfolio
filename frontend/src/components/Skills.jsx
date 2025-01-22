import React, { useState, useEffect, useRef} from "react";
import Heading from "./Heading";
import data from "../data/info.json";

const Skills = () => {
  const [inView, setInView] = useState(false)
  const skillsRef = useRef(null);
  const skills = data.Skills;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {threshold: 0.3} //Trigger when 50% of the component is visible
    )
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if(skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])
  
  return (
    <section id="skills" className="skills-section relative min-h-fit px-9 sm:px-12 md:px-28 lg:px-40 py-12 md:py-16 lg:py-24">
      <div class="absolute inset-0 -z-10 h-full w-full bg-[#0180a7] bg-[linear-gradient(to_right,#1d7ba5_1px,transparent_1px),linear-gradient(to_bottom,#1d7ba5_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-44 -z-10 m-auto h-[600px] sm:h-[680px] md:h-[790px] w-[320px] sm:w-[450px] md:w-[768px] rounded-full bg-cyan-950 blur-[150px]"></div></div>
        <Heading heading="Skills" reason="Why Choose me" />
        <div ref={skillsRef} className="flex flex-wrap justify-center gap-x-20 gap-y-4 md:gap-y-10">
          {Object.entries(skills).map(([skill, percentage]) => (
            <div className=" items-center group">
              <span className="w-24 pr-1 text-xl font-semibold">{skill}</span>
              <div className="relative w-[20rem]  md:w-[28rem] mt-2 h-1 bg-cyan-900 rounded-xl">
                <div
                  className="absolute bg-cyan-500 h-1 rounded-l-xl transition-all duration-700 ease-out "
                  style={{
                    boxShadow: "6px 0px 6px rgba(0, 0, 0, 0.3), 0px 0px 10px #70c4cf70",
                    width: inView ? percentage : "0%"}}
                ></div>
              
              <span className="absolute -top-5 left-0 text-xs font-semibold text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ left: `calc(${percentage} - 20px)` }}>{percentage}</span>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Skills;

