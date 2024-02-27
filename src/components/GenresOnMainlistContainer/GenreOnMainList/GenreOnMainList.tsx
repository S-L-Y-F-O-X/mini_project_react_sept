import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import css from './GenreOnMainList.module.css'

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreOnMainList: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate();

    const toSelectedGenre = () => {
        navigate(`/genres/${id}`);
    }

        return (
            <div onClick={toSelectedGenre} className={css.Genre}>
                <p><span>&#127909;</span>{name}</p>

            </div>

        );

};
export {GenreOnMainList};
