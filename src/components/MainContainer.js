import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    
    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainmovie=movies[0];
    const{ original_title,overview ,id}=mainmovie;

  
    return (
        <div className="relative">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieid={id} />
        </div>
    )
}

export default MainContainer;