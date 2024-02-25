import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import css from './Movies.module.css'
import {Movie} from "../Movie";

interface IProps extends PropsWithChildren {
}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        const fetchData = async () => {
                const moviesData = await movieService.fetchMovies();
                setMovies(moviesData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div>Left bar</div>
        <div className={css.Movies}>
            {movies.map((movie: IMovie) =><Movie key={movie.id} movie={movie} />)}
        </div>
            <div>Right bar</div>
        </div>
    );
};

export {Movies};

