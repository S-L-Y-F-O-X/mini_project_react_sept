import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {apiService} from "../../services";
import {Movie} from "./Movie";
import {urls} from "../../constants";

import css from './Movies.module.css'

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        const fetchData = async () => {
                const response = await apiService.get(urls.movies.base, {
                });
                setMovies(response.data.results);
        };
        fetchData();
    }, []);
    return (
        <div className={css.Movies}>
            {movies.map((movie: IMovie) =><Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export {Movies};

