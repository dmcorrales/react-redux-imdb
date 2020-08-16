import axios from 'axios';
import * as config from '../config';

class MovieService {

    static getAll(page) {
        this.path = 'trending/movie/day'; //Default's query by popularity
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?page=${page}&api_key=${config.API_KEY}`);
    }

    static findByName(filter, page, type) {
        this.path = `search/${type}`; 
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&query=${filter}&page=${page}`);
    }

    static findById(id, type) {
        this.path = `${type}/${id}`; 
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&language=es-ES`);
    }

    static getSeasonById(tv_id, season_number) {
        this.path = `tv/${tv_id}/season/${season_number}`; 
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&language=es-ES`);
    }

    static getSeasonEpisodesById(tv_id,season_number,episode_number) {
        this.path = `tv/${tv_id}/season/${season_number}/episode/${episode_number}`; 
        return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&language=es-ES`);
    }

    static getListCredits(tv_id, type) {
        this.path = `${type}/${tv_id}/credits`; 
            return axios.get(`${config.HOST_URL}/${config.API_VERSION}/${this.path}?api_key=${config.API_KEY}&language=es-ES`);
    }

}

export default MovieService;