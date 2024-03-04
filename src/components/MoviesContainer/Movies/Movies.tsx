import React, {FC, useEffect, useState, useCallback} from "react";
import {useLocation, useParams} from "react-router-dom";

import css from './Movies.module.css';
import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {Genres, Pagination, Movie} from "../../../components";
import {useDarkMode} from "../../../hoc/DarkModeProvider";

const Movies: FC = () => {
    const {darkMode,} = useDarkMode();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const {genreId} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const fetchMovies = useCallback((pageNumber: number, selectedGenreId?: string, searchQuery?: string) => {
        let promise;
        if (selectedGenreId) {
            promise = movieService.fetchMoviesByGenre(Number(selectedGenreId), pageNumber);
        } else if (searchQuery) {
            promise = movieService.searchMovies(searchQuery, pageNumber);
        } else {
            promise = movieService.fetchMovies(pageNumber);
        }
        promise.then((data) => {
            setMovies(data);
            const url = new URL(window.location.href);
            url.searchParams.set('page', pageNumber.toString());
            if (selectedGenreId) {
                url.searchParams.set('genreId', selectedGenreId);
            }
            if (searchQuery) {
                url.searchParams.set('query', searchQuery);
            }
            window.history.replaceState(null, '', `${url.pathname}?${url.searchParams.toString()}`);
        });
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const pageParam = params.get('page');
        const pageNumber = pageParam ? parseInt(pageParam) : 1;
        setPage(pageNumber);
        fetchMovies(pageNumber, genreId, query);
    }, [genreId, query, fetchMovies]);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber === 0) {
            return;
        }
        setPage(pageNumber);
        fetchMovies(pageNumber, genreId, query);
    };

    return (
        <div>
            <div className={`${css.main} ${darkMode ? css.darkMode : ''}`}>
                <div className={css.leftBar}><Genres/></div>
                <div className={css.Movies}>
                    {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie}/>)}
                    {movies.length === 0 && query && <p>No movies found for '{query}'</p>}
                </div>
                <div className={css.rightBar}></div>
            </div>
            <Pagination currentPage={page} onPageChange={handlePageChange}/>
        </div>
    );
};

export {Movies};