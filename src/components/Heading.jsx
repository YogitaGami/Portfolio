import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{heading}</h2>
        <div className="mt-2 w-28 h-2 bg-[#0ffbfd] border-2 border-x-[#45aaaa] border-y-[#33aeae] shadow-[#45aaaa] shadow-[10px_0px_10px_rgba(0,0,0,0.3)]"></div>
        
    </div>
  )
}

export default Heading
