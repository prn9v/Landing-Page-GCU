import React, { useState, useEffect } from "react";

const IntroScreen = ({ onComplete }) => {
  const [light, setLight] = useState("red");
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLight("green");
      setTimeout(() => {
        handleSkip();
      }, 3000);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSkip = () => {
    setSlideUp(true);
    setTimeout(onComplete, 2000);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        position: "absolute",
        top: slideUp ? "-100%" : "0",
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 10,
        transition: "top 1s ease",
      }}
    >
      <div
        style={{
          height: "50%",
          width: "95%",
          overflow: "hidden",
          position: "relative",
          backgroundColor: light === "red" ? "#ff4d4d" : "#4caf50",
          transition: "background-color 4s ease",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={light === "red" ? "/open-eyes-doll.jpg" : "/close-eyes-doll.jpg"}
          alt={light === "red" ? "Open Eyes Doll" : "Closed Eyes Doll"}
          style={{
            width: "auto",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            right: -30,
          }}
        />
        <h1
          style={{
            color: light === "red" ? "white" : "black",
            fontSize: "5rem",
            textAlign: light === "green" ? "left" : "center", // Align left for green light
            transform: light === "green" ? "translateX(-10%)" : "none", // Move slightly left
          }}
        >
          {light === "red" ? "Red Light: Stop!" : "Green Light: Go!"}
        </h1>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "20px",
          backgroundColor: "transparent",
          border: "1px solid white",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        onClick={handleSkip}
      >
        Skip Intro
      </button>
    </div>
  );
};

const Round3 = () => {
  const [light, setLight] = useState("green");
  const [animation, setAnimation] = useState(true);

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "2rem",
        fontFamily: "Arial, sans-serif",
        color: light,
        position: "relative",
        transition: "color 3s ease-in-out",
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
          {/* {Array.from({ length: 20 }).map((_, index) => (
            <img
              key={index}
              src="/icons.jpg"
              alt="Game Icons"
              style={{ width: "5.1rem", height: "5.1rem" }}
            />
          ))} */}
        </div>
      </div>
      <h1 style={{ justifyContent: "left" }}>Red Light - Green Light</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <p style={{ width: "30%" }}>
          Test your coding speed and focus in this thrilling competition! <br />
          <br />
          Code furiously when the light is green, but freeze instantly when it
          turns red.
        </p>
        <p style={{ width: "30%" }}>
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
          {/* {Array.from({ length: 20 }).map((_, index) => (
            <img
              key={index}
              src="/icons.jpg"
              alt="Game Icons"
              style={{ width: "5.1rem", height: "5.1rem" }}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

const RedLightGreenLightApp = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <h1
        className=" bg-black text-white  text-[3rem] font-bold pl-24"
        style={{ textShadow: "0 0 5px #fff, 0 0 3px #f39c12, 0 0 1px #f39c12" }}
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
        {!introComplete && (
          <IntroScreen onComplete={() => setIntroComplete(true)} />
        )}
        {introComplete && <Round3 />}
      </div>
    </>
  );
};

export default RedLightGreenLightApp;
