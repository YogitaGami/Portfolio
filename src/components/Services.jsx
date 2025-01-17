import React from 'react'
import Heading from './Heading'

const Services = () => {
  return (
    <section id="services" className="px-40 items-center py-24 services-section relative min-h-[90vh]">
      <div className=" absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_80%_10%,#0180a7_20%,#013c36_100%)] pointer-events-none"></div>
        <Heading heading="Services" reason="What I do"/>
        <div className='relative m-auto grid grid-cols-3 grid-rows-12 gap-5 justify-center h-[31rem] w-[57rem] '>
          <div className='relative z-10 group w-72 h-[12rem] col-span-1 row-span-5'>
            <img className='absolute w-72 h-[12.3rem] object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-red-500' src="src/assets/image/image1.png" alt="" />
            <div className='absolute m-auto w-60 h-[10.4rem] inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex flex-col grow justify-center items-center'>Frontend Developer</div>
          </div>
          <div className='relative z-10 group w-72 h-[9.5rem] col-span-1 row-span-4 '>
            <img className='absolute w-72 h-[9.5rem] object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-red-500' src="src/assets/image/image2.jpg" alt="" />
            <div className='absolute m-auto w-60 h-[7.9rem] inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex justify-center items-center'>Frontend Developer</div>
          </div>
          <div className='relative z-10 group w-64 h-[15rem] col-span-1 row-span-6'>
            <img className='absolute w-64 h-[15rem] object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-red-500' src="src/assets/image/image3.jpg" alt="" />
            <div className='absolute m-auto w-52 h-[12.6rem] inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex justify-center items-center'>Frontend Developer</div>
          </div>
          <div className='relative z-10 group w-72 h-[20.4rem] col-span-1 row-span-3'>
            <img className='absolute w-72 h-[20.4rem] object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-red-500' src="src/assets/image/image4.jpg" alt="" />
            <div className='absolute m-auto w-60 h-[17.2rem] inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex justify-center items-center'>Frontend Developer</div>
          </div>
          <div className='relative z-10 group w-72 h-[17.6rem] col-span-1 row-span-2'>
            <img className='absolute w-72 h-[17.6rem] object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-red-500' src="src/assets/image/image5.png" alt="" />
            <div className='absolute m-auto w-60 h-[14.8rem] inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex justify-center items-center'>Frontend Developer</div>
          </div>
          <div className='relative z-10 group w-64 h-[15rem] col-span-1 row-span-1'>
            <img className='absolute w-64 h-[15rem] object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-red-500' src="src/assets/image/image6.png" alt="" />
            <div className='absolute m-auto w-52 h-[12.6rem] inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex justify-center items-center'>Frontend Developer</div>
          </div>   
        </div>
      
    </section>
  )
}

export default Services
