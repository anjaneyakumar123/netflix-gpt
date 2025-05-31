import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute w-full -z-10">
            <img className=" object-cover h-full" src={BG_URL} alt="logo" />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch;