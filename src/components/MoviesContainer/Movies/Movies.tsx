import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import css from './Movies.module.css';
import { Movie } from "../Movie";
import { Pagination } from "../../Pagination";
import { useParams } from "react-router-dom";
import {GenresOnMainList} from "../../GenresOnMainlistContainer";


interface IProps extends PropsWithChildren {

}
const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const { genreId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let moviesData: IMovie[];
            if (genreId) {
                moviesData = await movieService.fetchMoviesByGenre(Number(genreId), page);
            } else {
                moviesData = await movieService.fetchMovies(page);
            }
            setMovies(moviesData);
        };
        fetchData();
    }, [genreId, page]);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };

    return (
        <div>
            <div className={css.main}>
                <div className={css.leftBar}><GenresOnMainList/></div>
                <div className={css.Movies}>
                    {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie} />)}
                </div>
                <div className={css.rightBar}></div>
            </div>
            <Pagination currentPage={page}  onPageChange={handlePageChange}/>
        </div>
    );
};

export { Movies };