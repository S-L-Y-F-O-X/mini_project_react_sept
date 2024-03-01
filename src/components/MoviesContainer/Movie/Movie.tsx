import React, {FC, PropsWithChildren} from "react";
import ReactStars from "react-rating-stars-component";

import css from './Movie.module.css'
import {imageBaseURL} from "../../../constants";
import {IMovie} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, release_date, poster_path, vote_average, id} = movie;
    const releaseYear = (new Date(release_date)).getFullYear();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${id}`);
    };
    return (
        <div onClick={handleClick} className={css.Movie}>
            <img src={`${imageBaseURL}${poster_path}`} alt={title}/>
            <div className={css.stars}>
            <ReactStars
                count={10}
                value={vote_average}
                edit={false}
                size={24}
                activeColor="#f5d629"
            />
            </div>
            <h2>{title}</h2>
            <h3>{releaseYear}</h3>
        </div>
    );
};

export {Movie};