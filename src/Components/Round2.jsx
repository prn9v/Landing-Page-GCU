import React, { useState } from "react";
import "./round2.css"; // Make sure to import your CSS file
import box from "../assets/cardbg.jpg";
import bg from "../assets/land.jpg";
import back from "../assets/back.jpg";

const Round2 = () => {
  return (
    // <div  className="bg-cover bg-center h-screen"
    // style={{ backgroundImage: url(${bg}) }}>
    <div className=" flex  flex-col   bg-gradient-to-b from-green-950 via-black to-black min-h-screen p-16">
      <div className="mb-20 ml-10 ">
        <h1
          className=" text-white  text-[3rem] font-bold "
          style={{
            textShadow: "0 0 5px #fff, 0 0 3px #f39c12, 0 0 1px #f39c12",
          }}
        >
          Round 2 :{" "}
        </h1>
        <div className="text-center mx-[7rem] p-4">
          <p className="text-emerald-600 text-[1.3rem]  ">
            Dive into a whirlwind of excitement where every challenge pushes the
            limits of your imagination and quick thinking.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-14">
        <div className="maincontianer">
          <div className="thecard">
            <div className="thefront">
              <img src={box} alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-950 text-[1.6rem] font-bold shadow-md">
                Round 2.1
              </div>
            </div>
            <div className="theback bg-stone-900">
              <img src={back} alt="" />
              <div class="absolute bottom-1 left-[7.5rem]  transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                <h1 className="text-yellow-950 text-[1.35rem] font-bold ">
                  Hyperlinks
                </h1>
                <p className="text-yellow-950 mt-4 font-semibold ">
                  Navigate a maze of interconnected clues where one link unlocks
                  the key to the next—can you find your way
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="maincontianer">
          <div className="thecard">
            <div className="thefront">
              <img src={box} alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-950 text-[1.6rem] font-bold shadow-md">
                Round 2.2
              </div>
            </div>
            <div className="theback">
              <img src={back} alt="" />
              <div class="absolute bottom-8 left-[8rem]  transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                <h1 className="text-yellow-950 text-[1.35rem] font-bold ">
                  TechPictionary{" "}
                </h1>
                <p className="text-yellow-950 mt-4 font-semibold ">
                  Unleash your imagination to decode cryptic tech sketches that
                  speak louder than words.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="maincontianer">
          <div className="thecard">
            <div className="thefront">
              <img src={box} alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-950 text-[1.6rem] font-bold shadow-md">
                Round 2.3
              </div>
            </div>
            <div className="theback">
              <img src={back} alt="" />
              <div class="absolute bottom-1 left-[7.5rem]  transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                <h1 className="text-yellow-950 text-[1.35rem] font-bold ">
                  Wrong Answers Only
                </h1>
                <p className="text-yellow-950 mt-4 font-semibold ">
                  The more ridiculous your response, the closer you are to
                  winning this brain-bending paradox.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="maincontianer">
          <div className="thecard">
            <div className="thefront">
              <img src={box} alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-950 text-[1.6rem] font-bold shadow-md">
                Round 2.4
              </div>
            </div>
            <div className="theback ">
              <img src={back} alt="" />
              <div class="absolute bottom-4 left-[7.5rem]  transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                <h1 className="text-yellow-950 text-[1.35rem] font-bold ">
                  Emoji to Code
                </h1>
                <p className="text-yellow-950 mt-4 font-semibold ">
                  Crack the code hidden in a cryptic string of emojis—where
                  every symbol has a secret to reveal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Round2;
