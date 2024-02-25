import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {Movie} from "../MoviesContainer";
import css from './MoviesByGenre.module.css'

interface IProps extends PropsWithChildren {

}

const MoviesByGenre: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {genreId} = useParams();

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            const page = 1;
            const movies = await movieService.fetchMoviesByGenre(Number(genreId), page);
            setMovies(movies);
        };

        fetchMoviesByGenre();
    }, [genreId]);

    return (
        <div className={css.MoviesByGenre}>
            {movies.map((movie: IMovie) =><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesByGenre};