import {FC, useEffect, useState} from "react";
import { useParams} from "react-router-dom";

import css from './Movies.module.css';
import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {Genres} from "../../GenresContainer";
import {Pagination} from "../../Pagination";
import {Movie} from "../Movie";

import {useDarkMode} from "../../../hoc/DarkModeProvider";



const Movies: FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const { genreId } = useParams();

    const fetchMovies = (pageNumber: number, selectedGenreId?: string) => {
        let promise;
        if (selectedGenreId) {
            promise = movieService.fetchMoviesByGenre(Number(selectedGenreId), pageNumber);
        } else {
            promise = movieService.fetchMovies(pageNumber);
        }
        promise.then((data) => {
            setMovies(data);
            const url = new URL(window.location.href);
            url.searchParams.set('page', pageNumber.toString());
            window.history.replaceState(null, '', url.toString());
        });
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const pageParam = params.get('page');
        const pageNumber = pageParam ? parseInt(pageParam) : 1;
        setPage(pageNumber);
        fetchMovies(pageNumber, genreId);
    }, [genreId]);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
        fetchMovies(pageNumber, genreId);
    };

    return (
        <div>
            <div className={`${css.main} ${darkMode ? css.darkMode : ''}`}>
                <div className={css.leftBar}><Genres/></div>
                <div className={css.Movies}>
                    {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie}/>)}
                </div>
                <div className={css.rightBar}></div>
            </div>
            <Pagination currentPage={page} onPageChange={handlePageChange}/>
        </div>
    );
};

export { Movies };