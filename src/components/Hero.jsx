import React from "react";
import Dentist from "../assets/dentist.png";
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/gPBzzwj/dentist-background.png')] bg-no-repeat bg-right bg-cover w-full min-h-screen px-5 py-5 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1280px] w-full mt-[70px] gap-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl text-[#333333] font-[600]">Check Your Dental Health Today</h1>
          <p className="text-md md:text-xl text-[#888888] mt-4">
            Let's check how your dental health is by our professionals with complete and modern facilities services only
            at our clinic
          </p>

          <div className="flex gap-6 mt-7 items-center">
            <a
              href="#"
              className="text-md text-white px-12 py-2 bg-photon-green hover:bg-photon-green-dark rounded-full transition ease-in duration-150"
            >
              Book online
            </a>
            <a href="#" className="text-md font-[500] text-[#333333] flex items-center gap-2">
              Contact Us <AiOutlineRight />
            </a>
          </div>
        </div>
        <div className="flex items-center relative">
          <img src={Dentist} alt="" />
          <div className="grid grid-cols-3 absolute photon-green-glassmorphism gap-5 p-5 bottom-[10%] md:bottom-[20%] w-full rounded-xl shadow shadow-white ">
            <div className="text-center">
              <h2 className="text-xl text-white font-[700] mb-0 md:mb-2">12+</h2>
              <p className="text-md text-white font-[400]">years of experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl text-white font-[700] mb-0 md:mb-2">10K</h2>
              <p className="text-md text-white font-[400] ">installed implants</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl text-white font-[700] mb-0 md:mb-2">7</h2>
              <p className="text-md text-white font-[400]">certified specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
