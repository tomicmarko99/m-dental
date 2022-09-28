import React from "react";
import Dental from "../assets/dental-care.png";

const DentalCare = () => {
  return (
    <div className="w-full bg-[#fefefe] px-5 py-12 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1280px] w-full gap-[30px] md:gap-[120px]">
        <div className="flex items-center">
          <img src={Dental} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl text-[#333333] font-[600]">
            Best Dental Care
          </h2>
          <p className="text-md text-[#888888] mt-3 mb-7">
            Our clinic stand out for the excellent team it form. Our founder Dr.
            John Doe, from his humility and closeness to patients, has
            surrounded himself with an excellent group of specialists, who will
            put at your disposal all their experience and knowledge to meet your
            needs. Unlike other clinics, you will always be looked after by your
            trusted team. We face for you !
          </p>
          <div>
            <a
              href="#"
              className="text-md text-white px-12 py-2 bg-photon-green hover:bg-photon-green-dark rounded-full transition ease-in duration-150"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
