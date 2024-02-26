import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate();


    const toSelectedGenre = () => {
        navigate(`/genres/${id}`);
    }


    return (
        <div onClick={toSelectedGenre}>
            <h1>{name}</h1>
        </div>
    );
};

export {Genre};

// import React from "react";
// import { IGenre } from "../../../interfaces";
//
// interface IGenresListProps {
//     genres: IGenre[];
//     handleGenreSelection: (genre: string) => void;
// }
//
// const Genre: React.FC<IGenresListProps> = ({ genres, handleGenreSelection }) => {
//     return (
//         <div>
//             {genres.map((genre: IGenre) => (
//                 <div key={genre.id} onClick={() => handleGenreSelection(genre.name)}>
//                     <h1>{genre.name}</h1>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export {Genre};
