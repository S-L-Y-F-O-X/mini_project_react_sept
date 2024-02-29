
import { NavLink } from "react-router-dom";

import css from './Header.module.css';
import {UISwitch} from "../SwitchComponent/Switch";
import React from "react";
import {useDarkMode} from "../../hoc/DarkModeProvider";


const Header: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
// const Header: React.FC<HeaderProps> = () => {
//     const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={css.Header}>
            <h1>FoxCinema</h1>
            <NavLink to={'movie'}><b>Movie</b></NavLink>
            <NavLink to={''}><b>Search</b></NavLink>
            <div className={css.rb}>
            <div className={css.buttonTheme}>
                <UISwitch onChange={toggleDarkMode} checked={darkMode}/>
            </div>
            <div className={css.image}>
                <img src="https://i.postimg.cc/3JC9yvx9/photo-2024-02-27-12-56-29-removebg-preview.png" alt="Sly Fox" />
                <p>Sly Fox</p>
            </div>
            </div>
        </div>
    );
};

export {Header};

