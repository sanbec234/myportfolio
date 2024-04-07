import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden text-center pt-[38px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around   max-w-[900px]">
        <h1 className="text-white font-semibold text-[65px]">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pt-[16px]">
          A LITTLE PEAK
        </p>
        <p className="text-gray-300 pt-1 text-[19px]">A Junior Computer Science Student</p>
        <p className="text-gray-300 text-center pt-6 text-[19px]">
        I am a third-year undergraduate student majoring in Computer Science seeking Summer Internships. I'm eager to gain experience and learn from professionals in the field during my time at the organization. I love working on real-time projects that are challenging.
          <br />
          <br />
        I am passionate about creative ideas and thrive on finding innovative solutions. My strength lies in crafting unique and effective strategies that bring ideas to life. I have a knack for learning quickly, which fuels my love for developing new things and witnessing them evolve into tangible results. Turning concepts into reality is not just a job for me—it's a fulfilling journey that I eagerly embrace
        </p>
      </div>
    </section>
  );
};

export default About;
