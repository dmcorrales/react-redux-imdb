import axios from 'axios';
import * as config from '../config';
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?api_key=b2907782d07859a652052d3bae537475
class MovieService {

    static getAll(page) {
        this.path = 'trending/all/day'; //Default's query by popularity
        console.log()
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?page=${page}&api_key=${config.API_KEY}`);
    }

    static findByName(filter, page) {
        console.log("llegué"+page)
        this.path = 'search/movie'; 
        console.log(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&query=${filter}&page=${page}`)
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&query=${filter}&page=${page}`);
    }
}

export default MovieService;