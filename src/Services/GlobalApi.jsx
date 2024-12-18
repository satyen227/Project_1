import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://disneyclone.com",
  params: {
    api_key: "a3da97f9a263f165b4788453da2eae7a",
  },
});

const getTrendingVideos = () => axiosInstance.get("/trending/all/day");

const getMovieByGenreId = (id) =>
  axiosInstance.get("/discover/movie", { params: { with_genres: id } });

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
