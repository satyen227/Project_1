import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 top-1/2 transform -translate-y-1/2 cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 top-1/2 transform -translate-y-1/2 cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 gap-4
    scrollbar-none scroll-smooth"
        ref={elementRef}
        style={{ height: "410px" }}
      >
        {movieList.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0"
            style={{ height: "100%" }}
          >
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="w-full h-full object-cover
              object-left-top mr-5 rounded-md hover:border-[4px]
              border-gray-400 transition-all duration-100 ease-in"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
