import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[38px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap text-right max-w-[900px]">
        <h1 className="text-white font-semibold text-[65px]">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pt-[16px]">
          A LITTLE PEAK
        </p>
        <p className="text-gray-300 pt-1 text-[19px]">A Junior Computer Science Student</p>
        <p className="text-gray-300 text-right pt-6 text-[19px]">
        Aspiring Computer Science graduate with a strong passion for innovating transformative technologies. Proficient in tackling real-time project challenges.
        <br />  
        <br />    
        </p>
      </div>
    </section>
  );
};

export default About;
