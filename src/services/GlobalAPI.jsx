import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = "d5d99311c6994b6f295131d3a521e287"

const movieByGenreBaseURL = movieBaseURL + "/discover/movie?api_key=" + api_key

const getTrendingVideos = axios.get(movieBaseURL + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)


export default {
    getTrendingVideos,
    getMovieByGenreId
}
