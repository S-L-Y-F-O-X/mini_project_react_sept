import React from "react";
import {Movie} from "../../../interfaces";


const MovieDetail = ({ movie }: { movie: Movie }) => {
    const { id, title, poster_path, release_date, vote_average, movie: movieName } = movie;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Poster Path: {poster_path}</div>
            <div>Release Date: {release_date}</div>
            <div>Vote Average: {vote_average}</div>
            <div>Movie Name: {movieName}</div>
        </div>
    );
};

export { MovieDetail };