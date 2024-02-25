import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll:():IRes<IMovie[]> => apiService.get(urls.movies.base),
    getById:(id:number):IRes<IMovie> => apiService.get(urls.movies.details(id))
}

export {
    movieService
}