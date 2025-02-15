import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;

const movieBaseUrl = "https://api.themoviedb.org/3";

if (!api_key) {
  console.error(
    "API key is missing. Please set REACT_APP_API_KEY in your .env file."
  );
}

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideos = () =>
  axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
