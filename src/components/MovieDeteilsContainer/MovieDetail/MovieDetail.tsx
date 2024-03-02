import React from "react";
import {IGenre, IMovieDetail} from "../../../interfaces";
import css from './MovieDetail.module.css'
import {imageBaseURL} from "../../../constants";


interface IProps {
    movie: IMovieDetail;
}

const MovieDetail: React.FC<IProps> = ({ movie }) => {
    const { title, homepage, overview, poster_path, release_date, genres } = movie;
    const fullPosterPath = `${imageBaseURL}${poster_path}`;

    return (
        <div className={css.MovieDetail}>
            {poster_path && <img src={fullPosterPath} alt="Movie Poster" />}
            <div>
            <h2>{title}</h2>
            <h1>Genres</h1>
            <ul>
                {Array.isArray(genres) && genres.map((genre: IGenre) => <li key={genre.id}>{genre.name}</li>)}
            </ul>
            {homepage && <a href={homepage}>{homepage} </a>}
            {overview && <div>Overview: {overview}</div>}

            {release_date && <div>Release Date: {release_date}</div>}
            </div>
        </div>
    );
};

export { MovieDetail };



// const MovieDetail = ({ movie }: { movie: Movie }) => {
//     const { id, title, poster_path, release_date, vote_average, movie: movieName } = movie;
//     return (
//         <div className={css.MovieDetail}>
//
//             <div>Title: {title}</div>
//             <div>Poster Path: {poster_path}</div>
//             <div>Release Date: {release_date}</div>
//             <div>Vote Average: {vote_average}</div>
//         </div>
