import React from "react";
import millonarire from "../assets/millonarire.jpg";
import outerRing from "../assets/OuterRing.svg";
import millionaire from "../assets/millionaire.svg";
import spinningGold from "../assets/SpinningGold.svg";

const Round1 = () => {
  return (
    <div className=" bg-gradient-to-b  from-black via-black to-emerald-950  p-[2rem] px-[4rem]">
      <h1
        className="text-white text-3xl sm:text-4xl lg:text-5xl  pl-6   font-bold mb-5 md:mb-5 "
        style={{ textShadow: "0 0 5px #fff, 0 0 3px #f39c12, 0 0 1px #f39c12" }}
      >
        Round 1 :{" "}
      </h1>
      <div className="lg:flex lg:gap-7 ">
        <div className=" justify-center  items-center flex text-white lg:w-[60%] ">
          <p className="text-[1.3rem] w-[35rem]">
            Get ready for Round One: Race to Glory! Your knowledge and reflexes
            are your superpowers. Beat the clock, beat the competition, and show
            everyone what you’re made of!
          </p>
        </div>

        {/* <div className="relative flex items-center justify-center "> */}
        <div className="relative flex items-center justify-center">
  {/* Rotating Container */}
  <div className="relative flex items-center justify-center animate-[spin_10s_linear_infinite]">
    {/* Outer Ring */}
    <img
      src={outerRing}
      alt="Outer Ring"
      className="w-[550px] sm:w-[400px] md:w-[500px] lg:w-[570px]"
    />

    {/* Spinning Gold */}
    <img
      src={spinningGold}
      alt="Spinning Gold"
      className="absolute w-[6rem] sm:w-[200px] md:w-[250px] lg:w-[270px]"
    />
  </div>

  {/* Static Millionaire Text */}
  <img
    src={millionaire}
    alt="Millionaire"
    className="absolute w-[9.5rem] sm:w-[18rem] md:w-[200px] lg:w-[26rem]"
  />
</div>
      </div>
    </div>
  );
};

export default Round1;
