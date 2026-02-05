import React, { useState } from "react";
import LoveQuiz from "../components/LoveQuiz/LoveQuiz";

function Home() {
  const [emogi, setEmogi] = useState(true);

  return (
    <div className="bg-gradient-to-t from-pink-700/30 to-pink-400/80 min-h-screen relative flex flex-col items-center justify-center p-3 text-center">
      
      <div className="w-full h-[90vh] flex flex-col items-center justify-center bg-[url('http://clipart-library.com/images/8iAbR46BT.png')] bg-cover bg-center">
        
        <p className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          Play With Love...
        </p>

        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-10 shadow-xl w-[90%] max-w-xl h-[60%] mt-10 flex flex-col items-center justify-center gap-5">
          
          {emogi ? (
            <p className="text-[100px] animate-pulse">💖</p>
          ) : (
            <LoveQuiz />
          )}
        </div>

        {emogi && (
          <button
            onClick={() => setEmogi(false)}
            className="mt-10 px-8 py-3 font-bold bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 shadow-xl"
          >
            Start Game 💕
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
