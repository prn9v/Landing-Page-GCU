import React, { useState, useEffect } from "react";

const Round3 = () => {
  const [light, setLight] = useState("green");
  const [animation, setAnimation] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 277);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!animation) return;
      setLight((prevLight) => (prevLight === "green" ? "red" : "green"));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [animation]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(/frontman.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: isSmallScreen ? "1rem" : "1.5rem",
        fontFamily: "Arial, sans-serif",
        color: light,
        position: "relative",
        transition: "color 3s ease-in-out",
        backgroundColor: "black",
        overflow: isSmallScreen ? "auto" : "hidden", // ensure overflow here if content grows too large
      }}
    >
      <div
        className="logos-container"
        style={{
          overflow: "hidden",
          marginTop: "-1.8rem",
          marginBottom: "-3rem",
        }}
      >
        <div
          className="logos-slide"
          style={{
            display: "flex",
            animation: "slide 35s infinite linear",
          }}
        >
          {/* Icons can be rendered here */}
        </div>
      </div>
      <h1
        style={{
          justifyContent: "left",
          fontSize: isSmallScreen ? "1.5rem" : "3rem",
          marginTop: isSmallScreen ? "0rem" : "-6rem",
        }}
      >
        Red Light - Green Light
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          flexDirection: isSmallScreen ? "column" : "row", // Updated ternary operator
          position: "relative",
          top: "15rem",
        }}
      >
        <p
          style={{
            width: isSmallScreen ? "100%" : "30%", // Apply width based on screen size
            margin: "1rem",
          }}
        >
          Test your coding speed and focus in this thrilling competition!
        </p>
        <p
          style={{
            width: isSmallScreen ? "100%" : "30%", // Apply width based on screen size
            margin: "1rem",
          }}
        >
          Code furiously when the light is green, but freeze instantly when it
          turns red.
        </p>
        <p
          style={{
            width: isSmallScreen ? "100%" : "30%", // Apply width based on screen size
            margin: "1rem",
          }}
        >
          Can you outsmart the clock and emerge victorious?
        </p>
      </div>

      <div
        className="logos-container"
        style={{
          overflow: "hidden",
          marginBottom: "-1.8rem",
        }}
      >
        <div
          className="logos-slide"
          style={{
            display: "flex",
            animation: "slide 35s infinite linear",
          }}
        >
          {/* Icons can be rendered here */}
        </div>
      </div>
    </div>
  );
};

const RedLightGreenLightApp = () => {
  return (
    <>
      <h1
        className="text-white text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-10 lg:mb-20 font-bold"
        style={{
          textShadow: "0 0 5px #fff, 0 0 3px #f39c12, 0 0 1px #f39c12",
          backgroundColor: "black",
          marginBottom: "0",
          paddingLeft: "1rem",
          paddingTop: "1rem",
        }}
      >
        Round 3 :{" "}
      </h1>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Round3 />
      </div>
    </>
  );
};

export default RedLightGreenLightApp;
