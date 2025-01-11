import React from 'react';
import Button from './Button';
import Heading from './Heading';

const Contact = () => {
  return (
    <section id="contact" className="relative p-14 min-h-screen">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_80%_10%,#0180a7_20%,#013c36_100%)]"> */}
      <Heading heading="Contact Me"/>
      <form className="mt-6 flex flex-col justify-center items-center space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-transparent w-1/2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-transparent w-1/2"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg bg-transparent w-1/2"
        />
        <Button title="Send Message"/>
      </form>
      {/* </div> */}
    </section>
  );
};

export default Contact;
