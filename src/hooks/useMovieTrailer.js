import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieid +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const trailers = json.results.filter((video) => video.type === "Trailer");
        const teasers = json.results.filter((video) => video.type === "Teaser");
        const trailer= trailers.length ?  trailers[trailers.length-1] : teasers[teasers.length-1]
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieVideos();
    },[]);
};

export default useMovieTrailer;