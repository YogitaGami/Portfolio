import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-14">
      <h2 className="text-3xl font-bold">Contact Me</h2>
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
        <button
          type="submit"
          className="mt-8 px-6 py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointe"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
