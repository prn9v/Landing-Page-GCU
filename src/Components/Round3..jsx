import React, { useState, useEffect } from "react";

const Round3 = () => {
  const [light, setLight] = useState("text-green-500");
  const [animation, setAnimation] = useState(true);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!animation) return;
      setLight((prevLight) =>
        prevLight === "text-green-500" ? "text-red-500" : "text-green-500"
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [animation]);

  return (
    <div
      className={`min-h-screen w-screen bg-black bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center font-sans ${light} transition-colors duration-300`}
      style={{
        backgroundImage: "url(/frontman.jpg)",
        width: "100vw", // Ensures background width is exactly 100vw
        overflowX: "hidden", // Prevents any horizontal overflow
      }}
    >
      {/* Title */}
      <h1 className="text-xl sm:text-3xl lg:text-5xl mt-4 px-4 w-full text-center">
        Red Light - Green Light
      </h1>

      {/* Content Container: Flex with Centered and Positioned P Tags */}
      <div className="flex-grow flex flex-col justify-end items-center gap-4 pb-8 w-full sm:w-4/5">
        {/* Add padding between <p> and the title on small screens */}
        <div className="flex flex-col sm:flex-row justify-between sm:justify-evenly items-center gap-4 w-full mt-8 sm:mt-0">
        <p
        className="flex items-center justify-center w-40 h-40 sm:w-1/3 sm:h-56 text-center bg-red-800 text-white rounded-md p-4 transition-all duration-300 hover:bg-green-800 hover:text-white"
        style={{
          boxShadow: "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(243, 156, 18), 0 0 15px rgb(243, 156, 18)",
        }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        {isHovered1
          ? "Test your coding speed and focus in this thrilling competition!"
          : "Red Light: Stop!"}
      </p>
      <p
        className="flex items-center justify-center w-40 h-40 sm:w-1/3 sm:h-56 text-center bg-red-800 text-white rounded-md p-4 transition-all duration-300 hover:bg-green-800 hover:text-white"
        style={{
          boxShadow: "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(243, 156, 18), 0 0 15px rgb(243, 156, 18)",
        }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        {isHovered2
          ? "Code furiously when the light is green, but freeze instantly when it turns red."
          : "Red Light: Stop!"}
      </p>
      <p
        className="flex items-center justify-center w-40 h-40 sm:w-1/3 sm:h-56 text-center bg-red-800 text-white rounded-md p-4 transition-all duration-300 hover:bg-green-800 hover:text-white"
        style={{
          boxShadow: "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(243, 156, 18), 0 0 15px rgb(243, 156, 18)",
        }}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        {isHovered3
          ? "Can you outsmart the clock and emerge victorious?"
          : "Red Light: Stop!"}
      </p>
        </div>
      </div>
    </div>
  );
};

const RedLightGreenLightApp = () => {
  return (
    <div
      className="flex flex-col justify-start items-center bg-black min-h-screen overflow-x-hidden" // Added overflow-x-hidden
    >
      {/* Title Section: Centered */}
      <h1
        className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold px-4 w-full pt-4 text-center"
        style={{
          textShadow: "0 0 5px #fff, 0 0 3px #f39c12, 0 0 1px #f39c12",
        }}
      >
        Round 3:
      </h1>

      {/* Round 3 Section */}
      <div className="w-full flex-grow">
        <Round3 />
      </div>
    </div>
  );
};

export default RedLightGreenLightApp;
