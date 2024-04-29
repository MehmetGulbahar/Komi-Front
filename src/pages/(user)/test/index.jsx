import React from "react";
import kitchen from "@/assets/img/cooker.jpg";

/* const Title = ({ fontStyle }) => (
  <h1
    className="text-4xl lg:text-5xl xl:text-6xl text-center underline decoration-amber-400 mb-4"
    style={fontStyle}
  >
    Innovation on the Plate: Unveiling Our Journey
  </h1>
);



const ImageWithText = ({ pasifico }) => (
  <div className="relative">
    <div className="w-full h-full overflow-hidden">
      <img
        className="z-0 object-center object-cover w-full h-full"
        src={kitchen}
        alt=""
      />
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 flex inline-block align-bottom text-center">
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
        <p className="text-lg lg:text-xl xl:text-2xl" style={pasifico}>
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
      </div>
    </div>
  </div>
);


const Info = () => {
  const fontStyle = {
    fontFamily: "Dancing Script",
  };
  const pasifico = {
    fontFamily: "Pacifico, cursive",
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-white to-gray-200 flex flex-wrap justify-center items-center">
      <div className="w-full lg:w-3/4 xl:w-2/3">
        <Title fontStyle={fontStyle} />
        <ImageWithText pasifico={pasifico} />
      </div>
    </div>
  );
}; */

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
      <div className="h-96"></div>

      <div
        style={fontStyle}
        className="flex h-screen items-center justify-center"
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

      <div className="h-96"></div>
    </div>
  );
}
