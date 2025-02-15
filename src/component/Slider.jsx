import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos();
      setMovieList(resp.data.results);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / 4; // Each slide takes 1/4th of the screen
      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      let newScrollLeft =
        direction === "right"
          ? sliderRef.current.scrollLeft + slideWidth
          : sliderRef.current.scrollLeft - slideWidth;

      // Infinite loop effect
      if (newScrollLeft >= maxScroll) {
        newScrollLeft = 0; // Reset to beginning
      } else if (newScrollLeft <= 0) {
        newScrollLeft = maxScroll; // Jump to end
      }

      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <HiChevronLeft
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-3 rounded-full text-white text-4xl cursor-pointer hover:scale-110 transition"
        onClick={() => scrollSlider("left")}
      />

      {/* Right Arrow */}
      <HiChevronRight
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-3 rounded-full text-white text-4xl cursor-pointer hover:scale-110 transition"
        onClick={() => scrollSlider("right")}
      />

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex w-full overflow-x-auto scroll-smooth scrollbar-none space-x-4 px-10"
      >
        {movieList.map((movie, index) => (
          <div
            key={movie.id}
            className="flex-none w-1/4 h-[200px] md:h-[250px] lg:h-[300px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:z-10"
          >
            <img
              src={IMAGE_BASE_URL + movie.backdrop_path}
              alt={movie.title || "Movie Image"}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
