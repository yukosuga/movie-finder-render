import {useEffect, useRef, useState} from "react";
import GlobalAPI from "../services/GlobalAPI";
import MovieCard from "./MovieCard";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

function MovieList({genreId}) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div>
      <HiChevronLeft
        className="text-4xl absolute left-0 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-4xl absolute right-0 mt-[150px] cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth px-3 py-5 rounded-lg"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
