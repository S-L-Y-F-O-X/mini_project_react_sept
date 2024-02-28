import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'
import {IGenre} from "../../../interfaces";
import {genreService} from "../../../services";
import {Badge} from "reactstrap";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

// const Genre: FC<IProps> = ({genre}) => {
//     const {id, name} = genre;
//     const navigate = useNavigate();
//
//     const toSelectedGenre = () => {
//         navigate(`/genres/${id}`);
//     }
//
//         return (
//             <div onClick={toSelectedGenre} className={css.Genre}>
//                 <p><span>&#127909;</span>{name}</p>
//
//             </div>
//         );
// };





const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const [movieCount, setMovieCount] = useState(0); // Додали стейт для збереження кількості фільмів
    const navigate = useNavigate();

    const toSelectedGenre = () => {
        navigate(`/genres/${id}`);
    }

    useEffect(() => {
        genreService.getMoviesCountByGenre(id,1)
            .then((count) => {
                setMovieCount(count);
            })

    }, [id]);

    return (
        <div  className={css.Genre}>
            <p onClick={toSelectedGenre}><b>{name}</b></p>
            <Badge className={css.badge}>{movieCount}</Badge>

        </div>
    );
};
export {Genre};
