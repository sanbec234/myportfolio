import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="w-screen ">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://sc.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/sclogo1.jpeg"
                height={150}
                width={150}
                alt="SC Hackathon Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Standard Chartered</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r text-[12px] from-yellow-500 to-orange-400"
                style={(
                  {
                    width: "250px"
                  }
                )}>
                  Developed a Cheque clearing system for verifying the authenticity of the attributes of the cheque and identifying any potential frauds.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://wanderease.intellx.in/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/WandereaseLogo.jpg"
                height={150}
                width={150}
                alt="WanderEase"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WanderEase</p>
                <p className="text-[12px] text-transparent bg-clip-text bg-gradient-to-r text-[12px] from-yellow-500 to-orange-400"
                style={(
                  {
                    width: "250px"
                  }
                )}>
                  Developed a web application that plans extensive tour with geospatial awarness and proximity site locators using google API.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/best10.jpeg"
                height={150}
                width={150}
                alt="Best10"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Best10
                </p>
                <p className="text-[12px] text-transparent bg-clip-text bg-gradient-to-r text-[12px] from-yellow-500 to-orange-400"
                 style={(
                  {
                    width: "250px"
                  }
                )}>
                  Developed the Best10 Mobile, Web Application using Flutter and React. This keeps gives the best 10 products in the niche and keeps our favourite products price in watch.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Pole-Logo.png"
                height={150}
                width={150}
                alt="Polectors"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl ">Polectors</p>
                <p className="text-[12px] text-transparent bg-clip-text bg-gradient-to-r  from-yellow-500 to-orange-400"
                style={(
                  {
                    width: "250px"
                  }
                )}>
                A machine learning,Image recognition website that can Identify any image that has poles in it. Developed using YOLO, LabelImg, and Darknet CNN.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
