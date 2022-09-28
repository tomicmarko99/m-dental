import React, { useState } from "react";
import Brand from "../assets/dental-m.png";
import {
  AiOutlineAlignRight,
  AiOutlineClose,
  AiFillPhone,
} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="flex justify-center px-5 py-5 absolute left-0 right-0 top-0">
      <div className="max-w-[1280px] w-full flex justify-between items-center">
        <img src={Brand} alt="" className="w-[160px]" />

        <div className="Menu md:flex hidden gap-6 text-md text-[#666666] font-[500] items-center">
          <a className="hover:underline" href="#">
            Home
          </a>
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            Dentists
          </a>
          <a className="hover:underline" href="#">
            Testimonial
          </a>
          <div className="userAccBtns flex items-center gap-6 ">
            <a href="#" className="text-[#ae8f7a]">
              Log In
            </a>
            <a
              href="tel:381"
              className="bg-photon-green hover:bg-photon-green-dark text-white px-8 py-2 rounded-full transition ease-in duration-150 flex items-center gap-1"
            >
              <AiFillPhone />
              Call Now
            </a>
          </div>
        </div>
        <div className="hamburger text-3xl text-[#666666] flex relative md:hidden">
          {active ? (
            <AiOutlineClose onClick={() => setActive(false)} />
          ) : (
            <AiOutlineAlignRight onClick={() => setActive(true)} />
          )}
        </div>

        <div
          className={`mobileMenu z-10 md:hidden fixed top-0 ${
            active ? "right-0" : "-right-[150%]"
          } w-[80vw] h-screen px-5 py-8 shadow-2xl bg-white flex flex-col list-none transition-all duration-[.3s] ease-linear`}
        >
          <li className="text-xl w-full my-2">
            <AiOutlineClose onClick={() => setActive(false)} />
          </li>
          <div className="flex flex-col mt-10 gap-5 text-xl">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Dentists</a>
            <a href="#">Testimonial</a>
            <div className="userAccBtns text-sm flex flex-col items-center gap-6 border-t-2 py-5">
              <a
                href="#"
                className="text-[#ae8f7a] px-8 py-2 w-full text-center rounded-full border-[2px] border-[#ae8f7a]"
              >
                Log In
              </a>
              <a
                href="tel:381"
                className="bg-photon-green hover:bg-photon-green-dark text-white px-8 py-2 w-full text-center rounded-full transition ease-in duration-150 flex gap-1 items-center justify-center"
              >
                <AiFillPhone />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
