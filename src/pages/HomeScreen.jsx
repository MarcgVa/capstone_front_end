import video from "../assets/video.mp4";
import { PhoneIcon, PhoneXMarkIcon } from "@heroicons/react/24/outline";
import remmi from "../assets/remmi.png";
import React from "react";

import { useNavigate } from "react-router-dom";

 const handleClick = async () => {
   console.log("handleClick on Landing Page.");
 };

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <>
      {/* TOP WAVE */}
      <div className="custom-shape-divider-bottom-1745623779 grass z-1">
        <div className="banner ml-10">
          <p
            className="font-normal md:font-extrabold text-black text-shadow-lg text-shadow-blue-200 
            text-4xl sm:text-2xl md:text-6xl lg:text-6xl xl:text-8xl whitespace-pre-wrap"
          >
            Safer Lawn Care{" "}
            <span className="text-blue-800 text-shadow-blue-200 text-shadow-lg ">
              and
            </span>{" "}
            <br />A team you can rely on.
          </p>
        </div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* BOTTOM WAVE */}
      <div className="custom-shape-divider-top-1745677716 grass-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Consultation badge */}
      <div
        className="absolute z-10 top-55 right-30 flex flex-col justify-start items-center size-100
            border-2 border-l-amber-200 border-t-amber-200 border-b-0 border-r-0
            bg-yellow-500 rounded-full drop-shadow-xl/75
            scale-50 sm:scale-75 md:scale-80
      "
      >
        <p className="mt-10 text-3xl font-bold text-white text-shadow-black text-shadow-md tracking-wider">
          Want more Information?
        </p>
        <button
          className="bg-blue-600 px-2 py-1 mt-5 rounded-md text-white drop-shadow-xl/50 border border-t-0 border-l-0 border-b-blue-300 justify-self-end-end hover:bg-blue-900 hover:text-blue-300"
          onClick={handleClick}
        >
          Request Consultation
        </button>
        <p className="text-lg text-center mt-5 mb-2 mx-10 text-black text-shadow-blue-300 text-shadow-2xl">
          You will receive a callback with in 24 hours or you first cut is on us.
          Our consultations are onsite so we can walk the site and discuss our
          observations with you.
        </p>

        <p className="my-2 font-extrabold text-xl text-shadow-sm text-shadow-blue-600 tracking-widest">
          OR
        </p>
        <div className="flex flex-row items-center">
          <PhoneIcon className="h-4 mt-2 mx-4 fill-blue-600 text-blue-600 inline-flex" />
          <p className=" inline-flex text-lg text-blue-600  text-shadow-blue-200 text-shadow-sm mt-2">
            (800) 555-6789
          </p>
        </div>
      </div>

      {/* Left paragraph */}
      <div className="mission absolute bottom-100 left-3 bg-white z-20">
        <p className=" m-10 whitespace-pre-wrap  text-green-600 text-3xl font-bold text-shadow-xs text-shadow-amber-950">
          It is our mission to provide the best organic-based lawn care service
          and help our customers understand the importance of environmentally
          friendly lawn care techniques that don't rely on unnecessary or
          irresponsible pesticide use.
        </p>
      </div>

      <div className="footer">
        <p className=" mb-3 text-4xl text-black text-shadow-sky-50 text-shadow-sm
                  justify-center
        ">Our products are pet safe.</p>
      </div>
    </>
  );
}
