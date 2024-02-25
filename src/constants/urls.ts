const baseURL = 'https://api.themoviedb.org/3';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

const urls = {
    movies: {
        base: 'discover/movie',
        popular: '/movie/popular',
        topRated: '/movie/top_rated',
        details: (id: number): string => `discover/movie/${id}`,
        search: '/search/movie',
    }
};

export {
    baseURL,
    urls,
    imageBaseURL
};