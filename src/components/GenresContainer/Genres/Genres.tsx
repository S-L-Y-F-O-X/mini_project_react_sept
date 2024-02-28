import React, {useState, useEffect, PropsWithChildren, FC} from 'react';

import css from './Genres.module.css'
import {genreService} from "../../../services";
import {IGenreMov} from "../../../interfaces";
import {Genre} from "../Genre";

interface IProps extends PropsWithChildren {
}

// const Genres: FC<IProps> = () => {
//     const [genres, setGenres] = useState<IGenreMov[]>([]);
//
//     useEffect(() => {
//         const fetchGenres = () => {
//             genreService.getGenres().then((data) => {setGenres(data);})
//         };
//
//         fetchGenres();
//     }, []);
//
//     return (
//         <div className={css.Genres}>
//             <h1>Genres</h1>
//             {genres.map((genre: IGenreMov) => <Genre key={genre.id} genre={genre}/>)}
//         </div>
//     );
// };







const Genres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenreMov[]>([]);

    useEffect(() => {
        const fetchGenres = () => {
            genreService.getGenres()
                .then((data) => {
                    setGenres(data);
                })
        };

        fetchGenres();
    }, []);

    return (
        <div className={css.Genres}>
            <h1>Genres</h1>
            {genres.map((genre: IGenreMov) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
}