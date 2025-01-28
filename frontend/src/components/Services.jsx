import React from 'react';
import Heading from './Heading';

const Services = () => {
  const servicesData =[
    {
      "id": 1,
      "image": "/image1.png",
      "title": "Frontend Developer",
      "styles": {
        "container": "lg:w-72 lg:h-[12.5rem] md:w-48 md:h-[7rem]",
        "text": "lg:w-60 md:w-40 lg:h-[10.4rem] md:h-[6.3rem]"
      }
    },
    {
      "id": 2,
      "image": "/image2.jpg",
      "title": "Full Stack Developer",
      "styles": {
        "container": "lg:w-72 lg:h-[9.5rem] md:w-44 md:h-[5.5rem]",
        "text": "lg:w-60 md:w-40  lg:h-[7.9rem] md:h-[4.5rem]"
      }
    },
    {
      "id": 3,
      "image": "/image3.jpg",
      "title": "React Developer",
      "styles": {
        "container": "lg:w-64 lg:h-[15rem] md:w-44 md:h-[9rem]",
        "text": "lg:w-52 md:w-36 lg:h-[12.6rem] md:h-[7.5rem]"
      }
    },
    {
      "id": 4,
      "image": "/image4.jpg",
      "title": "Node Developer",
      "styles": {
        "container": "lg:w-72 md:w-48 lg:h-[17.7rem] md:h-[12.6rem] md:row-start-3",
        "text": "lg:w-60 md:w-36 lg:h-[14.9rem] md:h-[10.5rem]"
      }
    },
    {
      "id": 5,
      "image": "/image5.png",
      "title": "Web Designer",
      "styles": {
        "container": "lg:w-72 md:w-48 lg:h-[20.7rem] md:h-[14.4rem] md:col-start-2 md:row-start-2",
        "text": "lg:w-60 md:w-40 lg:h-[17.4rem] md:h-[11.8rem]"
      }
    },
    {
      "id": 6,
      "image": "/image6.png",
      "title": "Backend Developer",
      "styles": {
        "container": "lg:w-64 lg:h-[15rem] md:w-44 md:h-[11rem] md:col-start-3 md:row-start-5",
        "text": "lg:w-52 md:w-36 lg:h-[12.6rem] md:h-[9rem]"
      }
    }
  ]
  

  return (
    <section
      id="services"
      className="px-9 sm:px-12 md:px-28 lg:px-40 py-12 md:py-16 lg:py-24 items-center services-section relative min-h-fit"
    >
      <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_80%_10%,#0180a7_20%,#013c36_100%)] pointer-events-none"></div>
      <Heading heading="Services" reason="What I do" />
      <div className="relative m-auto grid grid-cols-2 md:grid-cols-custom grid-rows-3 md:grid-rows-custom lg:gap-5 md:gap-2 gap-4 sm:w-[22.8rem] max-sm:w-[16rem] justify-center">
        {servicesData.map((service) => {
          const imageUrl = `${service.image}`;

          return (
          <div
            key={service.id}
            className={`relative z-10 group w-28 h-[5rem] sm:w-40 sm:h-[8rem] ${service.styles.container}`}
          >
            <img
              className={`absolute w-full h-full object-fill rounded-lg object-top transition-transform duration-500 group-hover:scale-105 hover:border hover:border-cyan-500 m-auto`}
              src={imageUrl}
              alt={service.title}
            />
            <div
              className={`absolute text-[10px] md:text-base w-[5.8rem] h-[4.1rem] sm:w-32 sm:h-[6.4rem] m-auto inset-0 bg-black bg-opacity-70 text-cyan-300 opacity-0 group-hover:opacity-100 transition-transform duration-500 delay-0 group-hover:scale-125 rounded-lg flex justify-center items-center ${service.styles.text}`}
            >
              {service.title}
            </div>
          </div>
          )
        })}
      </div>
    </section>
  );
};

export default Services;
