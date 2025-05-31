import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if (!movies || !Array.isArray(movies)) return null;
  return (
    <div className='px-6'>
        <h1 className='py-2 font-bold text-2xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
                  {movies.map(movie => <MovieCard key={movie.id} posterpath={movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;