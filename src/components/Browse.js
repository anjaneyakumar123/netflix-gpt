import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/usenowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;