import React, { useState } from "react";
import Giftes from "../ClickHeart/Giftes";

function LoveQuiz() {
  const [yes, setYes] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const noMessages = [
    " Do you love me? 💖",
    "Think again 💔",
    "Don’t break my heart 🥺",
    "Last chance 😳",
  ];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Question / Message */}
      {!yes && (
        <p className="text-3xl font-bold text-pink-500 mb-6 text-center">
          {noMessages[noCount] || (
            <img
              src="https://cdntc.mpanchang.com/mpnc/images/remedy/happy-maha-shivratri-wishes-images.jpg"
              className="w-94 h-64 object-contain rounded-3xl shadow-2xs "
            />
          )}
        </p>
      )}

      {/* Show Gifts AFTER too many No clicks */}
      {!yes && noCount >= 4 && <div className="mt-6"></div>}

      {/* Yes Result */}
      {yes && (
        <div className=" text-center">
          <Giftes />
        </div>
      )}

      {/* Buttons */}
      {!yes && (
        <div className="flex gap-10 mt-8">
          <button
            onClick={() => setYes(true)}
            className="px-8 py-3 cursor-pointer font-bold bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-xl"
          >
            Yes 💕
          </button>

          <button
            onClick={() => setNoCount(noCount + 1)}
            className="px-8 py-3 cursor-pointer font-bold bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-xl"
          >
            No 😅
          </button>
        </div>
      )}
    </div>
  );
}

export default LoveQuiz;
