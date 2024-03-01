import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MovieDetail } from "../MovieDetail";
import {Movie, MovieList} from "../../../interfaces";
import {movieDetailsService} from "../../../services/movieDetailsService";


const MovieDetails = () => {
    const [movie, setMovie] = useState<MovieList>([]);
    const { movieId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const id = Number(movieId);
        movieDetailsService.fetchMovieDetails(id).then((data: Movie) => {
            setMovie([data]);
        });
    }, [movieId]);

    const back = () => {
        navigate(-1);
    };

    return (
        <div>
            <button onClick={back}>Back</button>
            {movie.map((singleMovie) => (
                <MovieDetail key={singleMovie.id} movie={singleMovie} />
            ))}
        </div>
    );
};

export { MovieDetails };