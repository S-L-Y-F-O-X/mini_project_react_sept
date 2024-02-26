import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import css from './Movies.module.css'
import {Movie} from "../Movie";

import {Genres} from "../../GenresContainer";
import {Pagination} from "../../Pagination";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {


    const [movies, setMovies] = useState<IMovie[]>([])
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
                const moviesData = await movieService.fetchMovies(page);
                setMovies(moviesData);

        };
        fetchData();
    }, [page]);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };


    return (
        <div>
            <div className={css.main}>
            <div className={css.leftBar}><Genres/></div>
            <div className={css.Movies}>
                {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.rightBar}>Right bar</div>
            </div>
            <Pagination currentPage={page} totalPages={10} onPageChange={handlePageChange}/>
        </div>
    );
};

export {Movies};

