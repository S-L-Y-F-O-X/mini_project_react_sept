export interface IMovie {
    id: number;
    title: string;
    poster_path: string;
    release_date: number;
    vote_average: number;
    movie: string;
}

export interface IGenre {
    id: number;
    name: string;
    genres: string;
}

export interface IGenreMov {
    id: number;
    name: string;
    genres: string;
}

export interface IMovieDetail {
    title: string;
    genres: string;
    homepage: string;
    overview: string;
    poster_path: string;
    release_date: string;
    movie: string;
    id: number
}

export interface IActor {
    id: number;
    name: string;
    character: string;
    profile_path: string;
}