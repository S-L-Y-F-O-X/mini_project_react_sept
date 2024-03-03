// import React, { FC, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { movieDetailsService } from "../../../services/movieDetailsService";
// import { IMovie } from "../../../interfaces";
//
// const MovieDetails: FC = () => {
//     const { movieId } = useParams();
//     const [movie, setMovie] = useState<IMovie | null>(null);
//
//     useEffect(() => {
//         const fetchMovieData = async () => {
//             try {
//                 if (movieId) {
//                     const data = await movieDetailsService.fetchMovieDetails(Number(movieId));
//                     setMovie(data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching movie details:", error);
//             }
//         };
//         fetchMovieData();
//     }, [movieId]);
//
//     if (!movie) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div>
//             <h2>{movie.title}</h2>
//             <h2>{movie.title}</h2>
//             <h2>{movie.title}</h2>
//             <h2>{movie.title}</h2>
//             <h2>{movie.title}</h2>
//             <h2>{movie.title}</h2>
//
//         </div>
//     );
// };
//
// export { MovieDetails };


import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetailsService } from "../../../services/movieDetailsService";
import {IMovieDetail} from "../../../interfaces";
import {MovieDetail} from "../MovieDetail";
import css from './MovieDetails.module.css'
import {useDarkMode} from "../../../hoc/DarkModeProvider";
const MovieDetails: FC = () => {
    const { darkMode } = useDarkMode();
    const { movieId } = useParams();
    const [movie, setMovie] = useState<IMovieDetail | null>(null);

    useEffect(() => {
        movieDetailsService.fetchMovieDetails(Number(movieId)).then((data) => {setMovie(data)})

    }, [movieId]);



    return (
        <div className={`${css.MovieDetails} ${darkMode ? css.MovieDetailsDark : ''}`}>
            {movie && <MovieDetail movie={movie}/>}
        </div>
    );
};

export { MovieDetails };