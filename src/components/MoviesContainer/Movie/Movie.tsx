import css from './Movie.module.css'
import {imageBaseURL} from "../../../constants";
import {IMovie} from "../../../interfaces";
import React, {FC, PropsWithChildren} from "react";
import ReactStars from "react-rating-stars-component";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, release_date, poster_path, vote_average} = movie;

    const imageURL = `${imageBaseURL}${poster_path}`;

    return (
        <div className={css.Movie}>
            {/*<div className={css.MovieImage}>*/}
            {/*    <h1 className={css.MovieTitle}>{title}</h1>*/}
            {/*    <img src={imageURL} alt={title}/>*/}
            {/*</div>*/}
            <img src={`${imageBaseURL}${poster_path}`} alt={title}/>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <ReactStars
                count={10}
                value={vote_average}
                edit={false}
                size={24}
                activeColor="#f5d629"
            />
        </div>
    );
};

export {Movie};