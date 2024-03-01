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
     genres : string;
 }

 export interface IGenreMov {
    id: number;
    name: string;
     genres : string;
 }

 export interface HeaderProps {
     darkMode: boolean;
     toggleDarkMode: () => void;
 }

 export interface MoviesProps {
     darkMode: boolean;
 }

 export type Movie = {
     id: number;
     title: string;
     poster_path: string;
     release_date: number;
     vote_average: number;
     movie: string;
 }

 export type MovieList = Movie[]; // Масив фільмів