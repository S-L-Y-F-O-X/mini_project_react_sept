import {apiService} from "./apiService";
import {movies, moviesByGenre, moviesBySearch} from "../constants";


const movieService = {
    fetchMovies: async () => {
        const response = await apiService.get(movies, {});
        return response.data.results;
    },
    fetchMoviesByGenre: async (genreId: number, page: number) => {
        const response = await apiService.get(`${moviesByGenre}${genreId}&page=${page}`, {});
        return response.data.results;
    },
    searchMovies: async (query: string) => {
        const response = await apiService.get(`${movies}${moviesBySearch}${query}`, {});
        return response.data.results;
    }
};

export {
    movieService
};

// (`${movies}${moviesByGenre}${genreId}`, {})