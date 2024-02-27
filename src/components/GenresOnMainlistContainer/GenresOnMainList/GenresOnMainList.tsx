import React, {useState, useEffect, PropsWithChildren, FC} from 'react';

import {genreService} from "../../../services";
import css from './Genres.module.css'
import {IGenreMov} from "../../../interfaces";
import {GenreOnMainList} from "../GenreOnMainList";

interface IProps extends PropsWithChildren {
}

const GenresOnMainList: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenreMov[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
                const data = await genreService.getGenres();
                setGenres(data);
        };
        fetchGenres();
    }, []);


    return (
        <div className={css.Genres}>
            <h1>Genres</h1>
            {genres.map((genre: IGenreMov) => <GenreOnMainList key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    GenresOnMainList
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
