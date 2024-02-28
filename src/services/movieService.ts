import {apiService} from "./apiService";
import {movie, moviesByGenre, moviesBySearch} from "../constants";


const movieService = {
    fetchMovies: async (page: number = 1) => {
        const response = await apiService.get(movie, {params:{page}});
        return response.data.results;
    },
    fetchMoviesByGenre: async (genreId: number, page: number = 1) => {
        const response = await apiService.get(`${moviesByGenre}${genreId}&page=${page}`, {});
        return response.data.results;
    },
    searchMovies: async (query: string) => {
        const response = await apiService.get(`${movie}${moviesBySearch}${query}`, {});
        return response.data.results;
    }
};

export {
    movieService
};
