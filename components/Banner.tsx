"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
   
      <div className="flex lg:flex-row flex-col justify-center  text-center gap-10 mt-36 px-5">
        <div className="justify-center flex">
          <Image
            priority
            src="/mee.png"
            height={300}
            width={300}
            alt="Snehan"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 mt-6 animate-pulse tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Snehan
          </div>
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I love creative {" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
              ideas
            </span>{" "}
            Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
              Chill
            </span>{" "}
          </p>
          <p className="text-md text-gray-200 my-5 max-w-[600px]">
            A Junior Computer Science undergrad Student.
            Passionate in Web, Mobile Application Development.
          </p>
          <div className="text-md flex justify-center">
            <button
              onClick={() => window.open("mailto:snehanbusiness@gmail.com")}
              className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

  );
};

export default Banner;
