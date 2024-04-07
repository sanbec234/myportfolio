import React from "react";
import Image from "next/image";

const Experience: React.FC<{}> = () => {
  return (
    <section
      id="experience"
      className="w-screen flex flex-col  justify-center items-center"
    >
      <h1 className="text-white font-semibold text-5xl lg:text-6xl pt-[80px]  ">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pt-[28px]">
        EXPLORE NOW
      </p>
      <div
        
      >
        <div className="w-screen flex  flex-col  justify-center p-10">
          
          <div className="w-full flex flex-col justify-center items-center">
          <p className="text-gray-300 ">
            <span className="font-semibold text-center text-2xl ">Web App Development Intern </span>
          </p>
          <p className="text-gray-300 text-xs text-left mt-2">JUNE 2023 - JULY 2023, CHENNAI, INDIA</p>
            </div>
            
         

          <p className="text-gray-300 pt-6 gap-5 text-center lg:px-20">
            ▪ Obtained the accurate necessities from the client’s problem
            statement, and suggested the best features that solved client
            requirements, which were included in the project.
            <br/>
            ▪ Developed Web Applications for the client using React, Javascript,
            PHP, and Laravel Framework, Github.
            <br />
            ▪ Increased client satisfaction with the final product. w<br />
            ▪ Acquired skills in React, GitHub and JavaScript within the first
            week of joining and was part of the actual development team.
            <br />
            
          </p>
        </div>
        <div className="flex gap-2 flex-col animate-pulse  items-center w-full pt-20">
          <div className="flex flex-col lg:flex-row gap-8 ">
            <Image
              priority
              src="/reactlogo.png"
              height={50}
              width={130}
              alt="React"
            />
            <Image
              priority
              src="/flutterlogo.png"
              height={50}
              width={130}
              alt="React"
            />
            <Image
              priority
              src="/javalogo.png"
              height={50}
              width={100}
              alt="React"
            />
            <Image
              priority
              src="/npmlogo.png"
              height={50}
              width={130}
              alt="React"
            />
          </div>
          <div className="flex animate-pulse lg:flex-row flex-col">
            <Image
              priority
              src="/pythonlogo.png"
              height={50}
              width={160}
              alt="React"
            />
            <Image
              priority
              src="/mysqllogo.png"
              height={50}
              width={200}
              alt="React"
            />
            <Image
              priority
              src="/htmllogo.png"
              height={50}
              width={240}
              alt="React"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
