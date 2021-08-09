import axios from 'axios'

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export default class FetchApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.api_key = 'f992f54d2833387603d88ceb953812b4';
    
    }

   async fetchTrendingMovie(period) {
       return await axios.get(`trending/movie/${period}?api_key=${this.api_key}`);
    }

    async fetchMovieByName() {
    return await axios.get(`trending/movie/${period}?api_key=${this.api_key}`);
}

}
