import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    useEffect(() => {
        const toggleDarkMode = document.getElementById('toggleDarkMode') as HTMLInputElement | null;
        if (toggleDarkMode) {
            toggleDarkMode.addEventListener('change', function() {
                if (this.checked) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                }
            });
        }

        return () => {
            if (toggleDarkMode) {
                toggleDarkMode.removeEventListener('change', () => {
                    // Прибрати обробник подій при видаленні компоненту
                });
            }
        };
    }, []);

    return (
        <div className={css.Header}>
            <h1>FoxCinema</h1>
            <NavLink to={'movie'}><b>Movie</b></NavLink>
            <NavLink to={'genres'}><b>Genres</b></NavLink>
            <NavLink to={''}><b>Search</b></NavLink>
            <div className={css.rb}>
            <div className={css.buttonTheme}>
                <label className={`${css.header__selection} ${css.toggle}`}>
                    <input id="toggleDarkMode" className={css.toggle__input} aria-label="toggle dark mode"
                           type="checkbox"/>
                    <span className={css.toggle__fake}></span>
                </label>
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

