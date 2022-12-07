import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3';
const BY_TRENDING = `${API_URL}/trending/movie/week`;
const BY_FIND = `${API_URL}/search/movie`;
const BY_INFO = `${API_URL}/movie/`;
const API_KEY = 'f8abd1f245b12cc9c6dcca6fce2ddae9';
const poster = 'https://image.tmdb.org/t/p/w500';

const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BY_TRENDING}?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
}

const getFindMovie = async (movie) => {
    try {
        const response = await axios.get(`${BY_FIND}?api_key=${API_KEY}&query=${movie}`);
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
}

const getInfoMovie = async (id) => {
    try {
        const response = await axios.get(`${BY_INFO}${id}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

const getActorMovie = async (id) => {
    try {
        const response = await axios.get(`${BY_INFO}${id}/credits?api_key=${API_KEY}&language=en-US`);
        return response.data.cast;
    } catch (error) {
        console.log(error)
    }
}

const getReviewMovie = async (id) => {
    try {
        const response = await axios.get(`${BY_INFO}${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
}

export {getTrendingMovies, getInfoMovie, getFindMovie, getActorMovie, getReviewMovie, poster};