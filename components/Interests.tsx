import React from "react";
import Image from "next/image";

const Interests: React.FC<{}> = () => {
  return (
    <section id="interests">
      <h1 className="text-white text-center font-semibold text-6xl pt-[40px] pr-0">
        Interests
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pt-[28px]">
        MY HOBBIES AND INTERESTS
      </p>
      <div className="flex flex-col justify-center items-center w-screen container mx-auto 2xl"
        style={{
          maxWidth: "1280px",
          paddingRight: "15rem",
          paddingLeft: "15rem" // This line corresponds to the padding-left property
        }}
      >
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Web App Development Intern </span>
          </p>
          <p className="text-gray-300">JUNE 2023 - JULY 2023, CHENNAI, INDIA</p>
        </div>
        <p className="text-gray-300 pt-6 text-center">
        ▪ Keeping track of the technological advancements done by each company and writing suggestions
        and product reviews to the tech companies.
        <br />
        ▪ Tweeting/ Posting the tech suggestions and features and high IQ inventions which can be life-
        changing on my Twitter/X handle.
        <br />
        ▪ Posting on Substack a journal of my mind.
        <br />
        ▪ I love to play tennis and chess. I am a distinguished athlete with many wins in tournaments at the
        regional level.
        <br />
        ▪ I love to try new things in my free time. I have been learning new languages like French
        and learning to play the electric keyboard on my own.
        <br />
        <br />
        </p>
        <div className="flex gap-2 flex-col animate-pulse">
          <div className="flex gap-8">
            <Image
              priority
              src="/tennis.png"
              height={50}
              width={130}
              alt="React"
            />
            <Image
              priority
              src="/twitter.svg"
              height={50}
              width={100}
              alt="React"
            />
            <Image
              priority
              src="/chess.png"
              height={50}
              width={100}
              alt="React"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
