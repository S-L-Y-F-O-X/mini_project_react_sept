import {NavLink} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    return (

            <div className={css.Header}>
            <NavLink to={'movie'}>Movie</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            </div>

    );
};

export {Header};