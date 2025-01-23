import React, {useRef} from "react";
import data from "../data/info.json";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  const swiperRef = useRef(null); // Create a reference to Swiper
  const projects = data.Projects || [];

  const majorProjects =
    projects.find((item) => item.Major_projects)?.Major_projects || [];

    // Handle hover to stop autoplay
  const handleMouseEnter = () => {
    if (swiperRef.current  && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop(); // Pause autoplay on hover
    }
  };

  // Handle hover end to start autoplay again
  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start(); // Resume autoplay after hover
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-fit px-9 sm:px-12 md:px-28 lg:px-40 py-12 md:py-16 lg:py-24 bg-gradient-to-r from-[#0180a7] via-[#013c36] to-black"
    >
      <div className="container mx-auto px-1">
        <Heading heading="Projects" reason="Check My Wonderful Works" />

        {/* Major Projects Section */}
        <div className="all_projects">
          {majorProjects.length > 0 ? (
            <Swiper
              ref={swiperRef}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              autoplay={{
                delay: 3000, // Time between scrolls (in milliseconds)
                disableOnInteraction: false, // Keep autoplay active after manual interaction
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper_container"
              onSwiper={(swiper) => {
                swiperRef.current.swiper = swiper; // Set swiper instance on ref
              }}
              
            >
              {majorProjects.map((project, index) => {
                const projectName = Object.keys(project)[0];
                const projectDetails = project[projectName];
                const Image = new URL(`${projectDetails.Image}`, import.meta.url).href;
                console.log(Image)
                return (
                  <SwiperSlide key={index} className="relative group"
                  onMouseEnter={handleMouseEnter} // Pause autoplay on hover
                  onMouseLeave={handleMouseLeave}>
                     {/* Resume autoplay when hover ends */}
                    <div className="relative w-full h-96">
                      <img
                        src={Image}
                        alt={projectName}
                        className="w-full h-full rounded-lg object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-black bg-opacity-80 text-[#0180a7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 rounded-lg flex flex-col items-center justify-center p-4"
                      >
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-0.5 md:mb-1 lg:mb-2">
                          {projectName}
                        </h3>
                        <p className="text-sm mb-2">
                          <strong>Description:</strong>{" "}
                          {projectDetails.Description}
                        </p>
                        {projectDetails.Features && (
                          <p className="text-sm mb-0.5 md:mb-1 lg:mb-2">
                            <strong>Features:</strong> {projectDetails.Features}
                          </p>
                        )}
                        <p className="text-sm mb-0.5 md:mb-1 lg:mb-2">
                          <strong>Technologies Used:</strong>{" "}
                          {projectDetails["Technologies Used"]}
                        </p>
                        <p className="text-sm">
                          <strong>Role:</strong> {projectDetails.Role}
                        </p>
                        {projectDetails["GitHub Repo"] && (
                          <a
                            href={projectDetails["GitHub Repo"]}
                            target="blank"
                            rel="noopener noreferrer"
                            className="text-[#0180a7] underline mt-0.5 mt:mb-1 lg:mt-2"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <p className="text-white text-center">
              No major projects available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;