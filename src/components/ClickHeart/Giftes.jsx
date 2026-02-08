import React, { useState } from "react";

function Giftes() {
  const [selectedGift, setSelectedGift] = useState(null);

  const gifs = [
    { id: 1, message: "You are my favorite person 💕", bg:"https://png.pngtree.com/background/20210715/original/pngtree-love-paper-cut-couple-plant-cloud-valentine-background-picture-image_1310876.jpg" },
    { id: 2, message: "I smile because of you 😊" , bg:"https://i.pinimg.com/originals/b9/0d/1d/b90d1dcba2dc9c250e7a1c0590a27d84.jpg"},
    { id: 3, message: "You have my heart 💖", bg:"https://lovepaper.org/wp-content/uploads/2023/01/Valentines-day.jpeg" },
    { id: 4, message: "Forever & Always 💍",  bg:"https://png.pngtree.com/png-clipart/20221030/ourlarge/pngtree-blank-paper-card-decorated-with-flowers-and-roses-png-image_6229546.png" },
    { id: 5, message: "My Valentine 💘", bg:"https://static.vecteezy.com/system/resources/previews/005/204/028/original/valentine-s-day-concept-background-illustration-3d-red-and-pink-paper-hearts-with-white-square-frame-cute-love-sale-banner-or-greeting-card-free-vector.jpg" },
    { id: 6, message: "Love you to the moon 🌙", bg:"https://png.pngtree.com/png-clipart/20231210/original/pngtree-old-playing-card-paper-with-three-red-photo-png-image_13809420.png" },
  ];

  const giftImg =
    "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Scrolls-PNG/Old_Scroll_PNG_Clipart_Image.png?m=1438973785";

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
  };

  return (
    <div className="h-[60vh] w-[60vh] flex flex-col items-center justify-center rounded-xl p-3">

      {/* Gifts Grid */}
      {!selectedGift && (
        <div className="grid grid-cols-3 gap-5">
          {gifs.map((gift) => (
            <img
              key={gift.id}
              src={giftImg}
              alt="gift"
              onClick={() => handleGiftClick(gift)}
              className="w-28 h-32 object-contain rounded-xl cursor-pointer
                         hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      )}

      {/* Opened Gift */}
      {selectedGift && (
        <div className={`text-center lg:h-[50vh]  h-[50vh]  lg:w-[70vh] w-[60vh] flex flex-col items-center justify-center bg-[url('https://png.pngtree.com/background/20210715/original/pngtree-love-paper-cut-couple-plant-cloud-valentine-background-picture-image_1310876.jpg')] bg-cover   rounded-xl`}>
          <p className="text-3xl mb-4"></p>
          <p className="text-2xl font-bold text-pink-500">
            {selectedGift.message}
          </p>

          <button
            onClick={() => setSelectedGift(null)}
            className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition font-bold shadow-xl animate-pulse hover:animate-none"
          >
            Open Another 🎁
          </button>
        </div>
      )}
    </div>
  );
}

export default Giftes;
