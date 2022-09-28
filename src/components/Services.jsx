import React from "react";
import Dent1 from "../assets/dent-1.png";
import Dent2 from "../assets/dent-2.png";
import Dent3 from "../assets/dent-3.png";
import Dent4 from "../assets/dent-4.png";
import Dent5 from "../assets/dent-5.png";
import Dent6 from "../assets/dent-6.png";

const Services = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/pQr58tX/dbg.png')] bg-no-repeat bg-right bg-cover w-full px-5 py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-photon-green font-[600]">Our Professional Services</h2>
      <h3 className="text-[#333333] font-[500] mb-9">
        M-Dental Clinic uses the most advanced and proven technology to help you maintain that beautiful smile!
      </h3>
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-3 gap-7 ">
        <div className="p-5 photon-green-glassmorphism shadow-md rounded-xl hover:shadow-xl transition ease-in duration-150">
          <div className="flex w-[80px]">
            <img src={Dent1} alt="" />
          </div>
          <h3 className="text-xl text-[#333333] font-[500] mt-3 mb-2">General Dentistry</h3>
          <p className="text-[#333333]">
            At M-Dental Clinic, we seek to cater to all of your dental needs. We provide dental services specialized to
            you.
          </p>
        </div>
        <div className="p-5 photon-green-glassmorphism shadow-md rounded-xl hover:shadow-xl transition ease-in duration-150">
          <div className="flex w-[80px]">
            <img src={Dent2} alt="" />
          </div>
          <h3 className="text-xl text-[#333333] font-[500] mt-3 mb-2">Cosmetic Dentistry</h3>
          <p className="text-[#333333]">
            Everyone deserves a beautiful smile! Cosmetic dental treatments can dramatically improve yours. Start to
            smile with confidence!
          </p>
        </div>
        <div className="p-5 photon-green-glassmorphism shadow-md rounded-xl hover:shadow-xl transition ease-in duration-150">
          <div className="flex w-[80px]">
            <img src={Dent3} alt="" />
          </div>
          <h3 className="text-xl text-[#333333] font-[500] mt-3 mb-2">Dental Implants</h3>
          <p className="text-[#333333]">
            If you have missing teeth or want to stabilize your dentures, dental implants are the closest things to
            permanent and natural teeth.
          </p>
        </div>
        <div className="p-5 photon-green-glassmorphism shadow-md rounded-xl hover:shadow-xl transition ease-in duration-150">
          <div className="flex w-[80px]">
            <img src={Dent4} alt="" />
          </div>
          <h3 className="text-xl text-[#333333] font-[500] mt-3 mb-2">Orthodontics</h3>
          <p className="text-[#333333]">
            Orthodontic treatments are all designed to align the teeth and jaws. We can address all of your orthodontic
            needs.
          </p>
        </div>
        <div className="p-5 photon-green-glassmorphism shadow-md rounded-xl hover:shadow-xl transition ease-in duration-150">
          <div className="flex w-[80px]">
            <img src={Dent5} alt="" />
          </div>
          <h3 className="text-xl text-[#333333] font-[500] mt-3 mb-2">Sedation Dentistry</h3>
          <p className="text-[#333333]">
            Whether you are undergoing an extensive procedure or get anxiety at the dentist, sedation can help maximize
            personal comfort.
          </p>
        </div>
        <div className="p-5 photon-green-glassmorphism shadow-md rounded-xl hover:shadow-xl transition ease-in duration-150">
          <div className="flex w-[80px]">
            <img src={Dent6} alt="" />
          </div>
          <h3 className="text-xl text-[#333333] font-[500] mt-3 mb-2">Restorative Dentistry</h3>
          <p className="text-[#333333]">
            We provide comprehensive treatments for restorative dental procedures. We perform implants and full dental
            reconstruction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
