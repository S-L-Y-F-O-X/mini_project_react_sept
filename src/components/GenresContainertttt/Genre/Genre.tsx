import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'

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
            <div onClick={toSelectedGenre} className={css.Genre}>
                <h1>{name}</h1>
            </div>

        );

};
export {Genre};
