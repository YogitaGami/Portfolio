import React from "react";

const Heading = ({ heading, reason }) => {
  return (
    <div className="mb-10 sm:mb-12 mb:mb-14 lg:mb-16">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font">{heading}</h2>
      <div className="my-1 md:my-2 w-36 md:w-44 h-1 md:h-2 bg-[#0ffbfd] border-[1px] md:border-2 border-x-[#45aaaa] border-y-[#33aeae] shadow-[#45aaaa] shadow-[10px_0px_10px_rgba(0,0,0,0.3)]"></div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{reason}</h2>
    </div>
  );
};

export default Heading;
