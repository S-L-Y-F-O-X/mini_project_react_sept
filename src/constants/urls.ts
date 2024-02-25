const baseURL = 'https://api.themoviedb.org/3';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
const movies =  '/discover/movie';
const genres = '/genre/movie/list';
const moviesByGenre =  `${movies}?with_genres=`;
const moviesBySearch = 'search/movie?query=';


export {
    baseURL,
    imageBaseURL,
    movies,
    genres,
    moviesByGenre,
    moviesBySearch
};