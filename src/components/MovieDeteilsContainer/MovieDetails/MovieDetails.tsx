import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './MovieDetails.module.css'
import {movieDetailsService} from "../../../services/movieDetailsService";
import {IMovieDetail} from "../../../interfaces";
import {MovieDetail} from "../MovieDetail";
import {useDarkMode} from "../../../hoc/DarkModeProvider";

const MovieDetails: FC = () => {
    const {darkMode} = useDarkMode();
    const {movieId} = useParams();
    const [movie, setMovie] = useState<IMovieDetail | null>(null);

    useEffect(() => {
        movieDetailsService.fetchMovieDetails(Number(movieId)).then((data) => {
            setMovie(data)
        })
    }, [movieId]);

    return (
        <div className={`${css.MovieDetails} ${darkMode ? css.MovieDetailsDark : ''}`}>
            {movie && <MovieDetail movie={movie}/>}
        </div>
    );
};

export {MovieDetails};