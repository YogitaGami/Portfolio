import React from "react";
import data from "./info.json";

const Projects = () => {
  const projects = data.Projects || [];

  const majorProjects =
    projects.find((item) => item.Major_projects)?.Major_projects || [];
  const minorProjects =
    projects.find((item) => item["Minor Projects"])?.["Minor Projects"] || {};

  return (
    <section className=" projects-section relative min-h-[120vh]">
      <div className="px-40 absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_80%_10%,#0180a7_20%,#013c36_100%)]">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="major-projects">
          <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">Major Projects</h2>
            {majorProjects.length > 0 ? (
              majorProjects.map((project, index) => {
                const projectName = Object.keys(project)[0]; 
                const projectDetails = project[projectName]; 
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black p-4 rounded-lg m-6"
                  >
                    <h3 className="text-xl font-semibold">{projectName}</h3>
                    <p>
                      <strong>Description:</strong> {projectDetails.Description}
                    </p>
                    {projectDetails.Features && (
                      <p>
                        <strong>Features:</strong> {projectDetails.Features}
                      </p>
                    )}
                    <p>
                      <strong>Technologies Used:</strong>{" "}
                      {projectDetails["Technologies Used"]}
                    </p>
                    <p>
                      <strong>Role:</strong> {projectDetails.Role}
                    </p>
                    {projectDetails["GitHub Repo"] && (
                      <a
                        href={projectDetails["GitHub Repo"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#013e6c] underline"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No major projects available.</p>
            )}
        </div>
      <div className="minor-projects mt-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Minor Projects</h2>
        {Object.keys(minorProjects).length > 0 ? (
          <ul className="list-disc ml-6">
            {Object.entries(minorProjects).map(([key, value], index) => (
              <li key={index}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        ) : (
          <p>No minor projects available.</p>
        )}
      </div>
      </div>

      
    </section>
  );
};

export default Projects;
