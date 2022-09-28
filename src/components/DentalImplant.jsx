import React from "react";
import Implant from "../assets/dental-implant.png";
import { AiOutlineInfoCircle } from "react-icons/ai";

const DentalImplant = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/jvP9xxc/gradbg2.png')] bg-no-repeat bg-right bg-cover w-full px-5 py-12 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1280px] w-full gap-[60px] md:gap-[120px]">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl text-[#333333] font-[600]">Dental Implant</h2>
          <p className="text-md text-[#888888] mt-3">
            A dental implant is a metal post that replaces the root portion of a missing tooth. An artificial tooth is
            placed on an extension of the post on the dental implant, giving you the look of a real tooth.
          </p>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <h3 className="text-md text-[#333333] font-[500] flex items-center gap-1">
                Material of crown <AiOutlineInfoCircle />
              </h3>
              <p>Titanium</p>
            </div>
            <div>
              <h3 className="text-md text-[#333333] font-[500] flex items-center gap-1">
                Installation time <AiOutlineInfoCircle />
              </h3>
              <p>1h 30min</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img src={Implant} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DentalImplant;
