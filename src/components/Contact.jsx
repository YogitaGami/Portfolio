import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Heading from "./Heading";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async(data) =>{
    let r= await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data)})
    console.log(JSON.stringify(data));
    let res = await r.text()
  } 

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] bg-[#01393c] overflow-hidden"
    >
      <div class="absolute bottom-0 left-[-15%] right-0 top-[-25%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#076f7496,rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 -right-52 top-[-25%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#076f7496,rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 left-[-15%] right-0 top-[60%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#076f7496,rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 -right-52 top-[60%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#076f7496,rgba(255,255,255,0))]"></div>
      <div class="absolute h-full w-full bg-[radial-gradient(#06695f_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#013c36_70%,transparent_80%)]"></div>
      <div className="pt-24 pl-40">
        <Heading heading="Contact" reason="Get In Touch With Me" />
      </div>
      <div className="flex flex-row justify-center items-center w-3/5 mx-auto">
      {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white">Loading...</span>
          </div>
      )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-6 space-y-4 w-[60%]"
        >
          <div className="flex justify-center gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-transparent appearance-none w-1/2 focus:outline-none focus:ring-1 focus:ring-cyan-700 focus:border focus:border-cyan-400 placeholder-cyan-200"
              {...register("name", {
                required: { value: true, message: "Feild is required" },
                minLength: { value: 3, message: "Min length is 3" },
                maxLength: { value: 20, message: "Max length is 20" },
              })}
            />
            <div className="w-1/3">
              {errors.name && <div> {errors.name.message} </div>}
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-transparent w-1/2 focus:outline-none focus:ring-1 focus:ring-cyan-700 focus:border focus:border-cyan-400 placeholder-cyan-200"
              {...register("email", {
                required: { value: true, message: "Feild is required" },
                minLength: { value: 11, message: "Min length is 11" },
              })}
            />
            <div className="w-1/3">
              {errors.email && <div> {errors.email.message} </div>}
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg bg-transparent w-1/2 focus:outline-none focus:ring-1 focus:ring-cyan-700 focus:border focus:border-cyan-400 placeholder-cyan-200"
              {...register("message", {
                required: { value: true, message: "Feild is required" },
              })}
            />
            <div className="w-1/3">
              {errors.message && <div> {errors.message.message} </div>}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              disabled={isSubmitting}
              value="Send Message"
              className="mt-5 px-6 py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </form>
        <div className="relative w-[40%]">
          <div className="flex flex-row items-center gap-6 mb-4">
            <img className="icon size-9 p-1 border-[3px] rounded-full border-cyan-300" src="src/assets/image/location.svg"></img>
            <div className="content">
              <h3 className="heading text-2xl pb-1">Location</h3>
              <div className="info text-lg">Ujjain, Madhya Pradesh</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6 mb-4">
            <img className="icon size-9 p-1 border-[3px] rounded-full border-cyan-300" src="src/assets/image/phone.svg"></img>
            <div className="content">
              <h3 className="heading text-2xl pb-1">Phone Number</h3>
              <div className="info text-lg">&#40;+91&#41; 9340102726</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6 mb-4">
            <img className="icon size-9 p-1 border-[3px] rounded-full border-cyan-300" src="src/assets/image/mail.svg"></img>
            <div className="content">
              <h3 className="heading text-2xl pb-1">Email Address</h3>
              <div className="info text-lg">yogitagamimak@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
