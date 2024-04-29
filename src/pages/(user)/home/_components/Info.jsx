import React, { useState, useEffect } from "react";
import kitchen from "@/assets/img/cooker.jpg";

const TypewriterEffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

export default function Info() {
  const fontStyle = {
    backgroundImage: `url('${kitchen}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily: "Pacifico, cursive",
    opacity: 0.9,
  };
  const pasifico = {
    fontFamily: "Pacifico, cursive",
  };

  return (
    <div>
      <div className="mt-5 md:mt-20">
        <h1
          className="text-4xl lg:text-5xl xl:text-6xl text-center underline decoration-amber-400 mb-4"
          style={pasifico}
        >
          <TypewriterEffect
            text="Innovation on the Plate: Unveiling Our Journey"
            delay={50}
          />
        </h1>
        <div className="h-20"></div>
      </div>

      <div
        style={fontStyle}
        className="flex h-screen items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-white">
          <p
            className="text-lg lg:text-xl xl:text-2xl ps-5 pe-5"
            style={pasifico}
          >
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum"{" "}
            <a href="#" className="underline font-bold decoration-sky-500">
              by Cicero
            </a>{" "}
            are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation{" "}
            <a href="#" className="underline font-bold decoration-sky-500">
              by H. Rackam.
            </a>
          </p>
        </h2>
      </div>
    </div>
  );
}
