import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-14">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black p-4 rounded-lg">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p className="mt-2">Description of Project 1</p>
        </div>
        <div className="bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black p-4 rounded-lg">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p className="mt-2">Description of Project 2</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
