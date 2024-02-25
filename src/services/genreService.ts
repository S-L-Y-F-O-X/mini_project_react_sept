import {apiService} from "./apiService";
import {genres} from "../constants";

const genreService = {
    getGenres: async () => {
        const response = await apiService.get(genres, {});
        return response.data.genres;
    }
};

export {
    genreService
};