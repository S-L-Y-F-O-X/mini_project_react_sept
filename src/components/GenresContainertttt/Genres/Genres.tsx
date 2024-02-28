// import React, {useState, useEffect, PropsWithChildren, FC} from 'react';
// import {genreService} from "../../../services";
// import {Genre} from "../Genre";
// import {IGenreMov} from "../../../interfaces";
// import css from './Genres.module.css'
//
//
// interface IProps extends PropsWithChildren {
// }
//
// const Genres: FC<IProps> = () => {
//     const [genres, setGenres] = useState<IGenreMov[]>([]);
//
//     useEffect(() => {
//         const fetchGenres = async () => {
//                 const data = await genreService.getGenres();
//                 setGenres(data);
//         }
//         fetchGenres();
//     }, []);
//
//
//     return (
//         <div className={css.Genres}>
//             {genres.map((genre: IGenreMov) =><Genre key={genre.id} genre={genre}/>)}
//         </div>
//     );
// };
//
// export {
//     Genres
// }







import React, {useState, useEffect, PropsWithChildren, FC} from 'react';
import {genreService} from "../../../services";
import {Genre} from "../Genre";
import {IGenreMov} from "../../../interfaces";
import css from './Genres.module.css'

interface IProps extends PropsWithChildren {}

const Genres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenreMov[]>([]);

    useEffect(() => {
        genreService.getGenres().then((data) => setGenres(data))
    }, []);

    return (
        <div className={css.Genres}>
            {genres.map((genre: IGenreMov) =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
}


















// import React, { useEffect, useState } from "react";
// import { genreService } from "../../../services";
//
// import { IGenre } from "../../../interfaces";
// import {Genre} from "../Genre";
//
// interface IGenresProps {
//     handleGenreSelection: (genre: string) => void;
// }
//
// const Genres: React.FC<IGenresProps> = ({ handleGenreSelection }) => {
//     const [genres, setGenres] = useState<IGenre[]>([]);
//
//     useEffect(() => {
//         const fetchGenres = async () => {
//             const data = await genreService.getGenres();
//             setGenres(data);
//         };
//         fetchGenres();
//     }, []);
//
//     return (
//         <div>
//             <Genre genres={genres} handleGenreSelection={handleGenreSelection} />
//         </div>
//     );
// };
//
// export {Genres};
