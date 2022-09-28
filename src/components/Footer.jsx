import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#333333] px-5 pt-12 flex flex-col items-center">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[70px] mb-12">
        <div className="flex flex-col">
          <h3 className="text-3xl md:text-4xl text-photon-green font-[600]">
            M-Dental
          </h3>
          <p className="text-md md:text-xl text-white mt-4">
            M-Dental is a dental clinic that will make you wear a smile with
            pride on your face.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col text-white">
            <h3 className="text-3xl md:text-4xl text-photon-green font-[600]">
              About Us
            </h3>
            <div className="flex flex-col gap-1 text-md md:text-xl mt-4">
              <div>
                <a href="#">Home</a>
              </div>
              <div>
                <a href="#">About</a>
              </div>
              <div>
                <a href="#">Dentists</a>
              </div>
              <div>
                <a href="#">Testimonial</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <h3 className="text-3xl md:text-4xl text-photon-green font-[600]">
              Follow
            </h3>
            <div className="flex gap-5 gap-1 text-xl md:text-2xl mt-4">
              <div>
                <a href="#">
                  <AiFillInstagram />
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillFacebook />
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillTwitterSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#222222] rounded-tl-2xl rounded-tr-2xl p-4 text-center text-md text-photon-green font-[500]">
        <p>Copyright © 2022 M-Dental. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
