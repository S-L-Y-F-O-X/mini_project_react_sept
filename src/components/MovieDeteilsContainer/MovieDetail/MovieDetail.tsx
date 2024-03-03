import React, {useEffect, useState} from "react";
import {IActor, IGenre, IMovieDetail} from "../../../interfaces";
import css from './MovieDetail.module.css'
import {imageBaseURL} from "../../../constants";
import {movieDetailsService} from "../../../services/movieDetailsService";


interface IProps {
    movie: IMovieDetail;
}

const MovieDetail: React.FC<IProps> = ({ movie }) => {
    const { title, homepage, overview, poster_path, release_date, genres, id } = movie;
    const [actors, setActors] = useState<IActor[]>([]);

    useEffect(() => {
        movieDetailsService.fetchMovieDetails(id)
            .then((movieDetails) => {
                setActors(movieDetails.actors.slice(0, 7));
            })
    }, [id]);

    return (
        <div className={css.MovieDetail}>
            <img src={`${imageBaseURL}${poster_path}`} alt={title} />
            <div className={css.title_genre}>
                <h1>{title}</h1>
                <div className={css.genre}>
                    {Array.isArray(genres) && genres.map((genre: IGenre) => <p key={genre.id}>{genre.name}</p>)}
                </div>
                <hr/>
                <div className={css.info}>
                    {overview && <div>{overview}</div>}
                    <hr/>
                    {release_date && <div>Release date: {release_date}</div>}
                    {homepage && <a href={homepage}>{homepage} </a>}
                </div>

                <h2>Top 7 Actors:</h2>
                <div className={css.actors}>
                    {actors.map((actor: IActor) => (
                        <div className={css.actor} key={actor.id}>
                            <img src={`${imageBaseURL}${actor.profile_path}`} alt={actor.name}/>
                            <div>{actor.name} <br/>as <br/>{actor.character}</div>
                        </div>

                    ))}
                </div>


            </div>
        </div>
    );
};

export {MovieDetail};


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
