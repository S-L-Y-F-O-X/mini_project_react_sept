import React, {useState, useEffect, PropsWithChildren, FC} from 'react';

import {genreService} from "../../../services";
import {Genre} from "../Genre";
import {IGenre} from "../../../interfaces";

interface IProps extends PropsWithChildren {
}

const Genres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
                const data = await genreService.getGenres();
                setGenres(data);
        };
        fetchGenres();
    }, []);


    return (
        <div>
            {genres.map((genre: IGenre) =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
}
