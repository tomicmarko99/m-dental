import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full photon-green-glassmorphism px-5 py-12 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl text-[#333333] font-[600]">
          Get Ready
        </h2>
        <h3 className="text-xl md:text-2xl text-[#666666] font-[500] mt-2 mb-[30px]">
          - Something special waiting for you -
        </h3>
        <div className="w-full flex justify-center items-center py-5 gap-5">
          <input
            type="email"
            placeholder="Email adress"
            className=" text-md max-w-[320px] w-full px-5 py-2 rounded-tl-xl rounded-bl-xl outline-none shadow-md "
          />
          <div>
            <a
              href="#"
              className="text-md text-white px-5 py-2 flex bg-photon-green hover:bg-photon-green-dark rounded-tr-xl rounded-r-xl transition ease-in duration-150 shadow-md"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
