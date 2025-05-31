import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9e54426309507b176c239caaa978bcf0&page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    getTopRatedMovies();
  } , []);
};

export default useTopRatedMovies;