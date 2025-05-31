import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black bg-opacity-70 p-6 rounded-xl shadow-lg flex items-center gap-4 w-full max-w-3xl">
        <input
          type="text"
          className="flex-grow p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-3 px-6 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition duration-200 shadow-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
