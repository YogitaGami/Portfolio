import React, {useRef} from "react";
import data from "./info.json";
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
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop(); // Pause autoplay on hover
    }
  };

  // Handle hover end to start autoplay again
  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start(); // Resume autoplay after hover
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-[120vh] p-40 bg-gradient-to-r from-[#0180a7] via-[#013c36] to-black"
    >
      <div className="container mx-auto px-6">
        <Heading heading="Projects" />

        {/* Major Projects Section */}
        <div className="all_projects py-20">
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
                delay: 4000, // Time between scrolls (in milliseconds)
                disableOnInteraction: false, // Keep autoplay active after manual interaction
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper_container"
              onMouseEnter={handleMouseEnter} // Pause autoplay on hover
              onMouseLeave={handleMouseLeave} // Resume autoplay when hover ends
            >
              {majorProjects.map((project, index) => {
                const projectName = Object.keys(project)[0];
                const projectDetails = project[projectName];
                return (
                  <SwiperSlide key={index} className="relative group">
                    <div className="relative w-full h-96">
                      <img
                        src={projectDetails.Image}
                        alt={projectName}
                        className="w-full h-full rounded-lg object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 rounded-lg flex flex-col items-center justify-center p-4"
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {projectName}
                        </h3>
                        <p className="text-sm mb-2">
                          <strong>Description:</strong>{" "}
                          {projectDetails.Description}
                        </p>
                        {projectDetails.Features && (
                          <p className="text-sm mb-2">
                            <strong>Features:</strong> {projectDetails.Features}
                          </p>
                        )}
                        <p className="text-sm mb-2">
                          <strong>Technologies Used:</strong>{" "}
                          {projectDetails["Technologies Used"]}
                        </p>
                        <p className="text-sm">
                          <strong>Role:</strong> {projectDetails.Role}
                        </p>
                        {projectDetails["GitHub Repo"] && (
                          <a
                            href={projectDetails["GitHub Repo"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline mt-2"
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
