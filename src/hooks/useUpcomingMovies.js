import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9e54426309507b176c239caaa978bcf0&page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  } , []);
};

export default useUpcomingMovies;