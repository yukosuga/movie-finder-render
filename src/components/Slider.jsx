import {useEffect, useRef, useState} from "react";
import GlobalAPI from "../services/GlobalAPI";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = () => {
    const element = elementRef.current;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    element.scrollLeft = Math.min(element.scrollLeft + screenWidth, maxScrollLeft);
  };
  
  const sliderLeft = () => {
    const element = elementRef.current;
    element.scrollLeft = Math.max(element.scrollLeft - screenWidth, 0);
  };
  
  return (
    <div>
      <HiChevronLeft
        className="text-4xl absolute left-0 mt-[300px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-4xl absolute right-0 mt-[300px] cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[600px]
            object-cover object-left-top
            transition-all duration-500 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
