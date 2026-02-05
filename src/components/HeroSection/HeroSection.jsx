import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../pages/Home";

function HeroSection() {
  const navigater = useNavigate();
  return (
    <div
      className=' h-[100vh] w-full bg-cover bg-center relative
    bg-[url("https://png.pngtree.com/background/20250116/original/pngtree-wedding-backdrop-background-illustration-design-couple-in-love-marriage-bride-picture-image_15563848.jpg")]'
    >
      <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-3 text-cente ">
        <p className=" text-3xl font-bold text-pink-400 ">
          Play. Smile. Fall in Love Again.
        </p>
        <p className="max-w-xl text-center font-bold text-lg md:text-xl mt-3 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent p-3">
          Celebrate Valentine’s Day with fun games, cute challenges, and a
          little magic of love 💖
        </p>

        <button
          onClick={() => navigater("/home")}
          className="mt-15 px-6 py-3 font-bold bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 shadow-xl/30"
        >
          Start Celebrating
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
