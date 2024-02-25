 export interface IMovie {
    id: number;
    title: string;
     poster_path: string;
     release_date: number;
     vote_average: number
 }
 export interface IMovieResponse {
     results: IMovie[];
 }