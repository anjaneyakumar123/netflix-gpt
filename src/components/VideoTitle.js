import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-36 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl md:text-4xl font-extrabold max-w-2xl drop-shadow-lg">{title}</h1>
      <p className="py-6 text-base w md:text- max-w-xl text-gray-200 drop-shadow-sm">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white text-black text-lg md:text-2xl px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition flex items-center gap-2">
          ▶️ <span>Play</span>
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white text-lg md:text-xl px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
          More Info
        </button>
      </div>
    </div>
  );
};


export default VideoTitle