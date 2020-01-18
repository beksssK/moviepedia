import axios from 'axios';

const axiosMovies = axios.create({
    baseURL: 'http://api.tvmaze.com/'
});

export default axiosMovies;
