import React from "react";

const Heading = ({ heading, reason }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font">{heading}</h2>
      <div className="my-2 w-44 h-2 bg-[#0ffbfd] border-2 border-x-[#45aaaa] border-y-[#33aeae] shadow-[#45aaaa] shadow-[10px_0px_10px_rgba(0,0,0,0.3)]"></div>
      <h2 className="text-3xl font-bold">{reason}</h2>
    </div>
  );
};

export default Heading;
