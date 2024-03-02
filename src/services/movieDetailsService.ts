import { apiService } from './apiService';

export interface MovieResponse {
    data: any;
}
const movieDetailsService = {
    fetchMovieDetails: async (movieId: number) => {
        const response = await apiService.get(`movie/${movieId}`, {});
        return response.data;
    },
};

export { movieDetailsService};