// import { NavLink } from "react-router-dom";
//
// import css from './Header.module.css';
// import React, {useState} from "react";
// import {useDarkMode} from "../../hoc/DarkModeProvider";
// import {movieService} from "../../services";
// import {SearchComponent} from "../SearchContainer";
// import {UISwitch} from "../SwitchContainer";
//
//
//
// const Header: React.FC = () => {
//     const { darkMode, toggleDarkMode } = useDarkMode();
//     const [searchVisible, setSearchVisible] = useState(false);
//     const [searchResults, setSearchResults] = useState([]);
//     const handleSearchClick = () => {
//         setSearchVisible(!searchVisible);
//     };
//
//     const handleSearch = async (query: string) => {
//         const searchResults = await movieService.searchMovies(query);
//         setSearchResults(searchResults);
//
//     };
//
//     return (
//         <div className={css.Header}>
//             <h1>FoxCinema</h1>
//             <NavLink to={'movie'}><b>Movie</b></NavLink>
//
//             <NavLink to={""} onClick={handleSearchClick}><b>Search</b></NavLink>
//             {searchVisible && <SearchComponent onSearch={handleSearch} />}
//
//             <div className={css.rb}>
//             <div className={css.buttonTheme}>
//                 <UISwitch onChange={toggleDarkMode} checked={darkMode}/>
//             </div>
//             <div className={css.image}>
//                 <img src="https://i.postimg.cc/3JC9yvx9/photo-2024-02-27-12-56-29-removebg-preview.png" alt="Sly Fox" />
//                 <p>Sly Fox</p>
//             </div>
//             </div>
//         </div>
//     );
// };
//
// export {Header};

import { useState } from "react";
import { useDarkMode } from "../../hoc/DarkModeProvider";
import { movieService } from "../../services";
import { SearchComponent } from "../SearchContainer";
import { UISwitch } from "../SwitchContainer";
import css from './Header.module.css';

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearch = async (query: string) => {
        const results = await movieService.searchMovies(query);
        setSearchResults(results);
    };

    return (
        <div className={css.Header}>
            <h1>FoxCinema</h1>
            <a href="/movie"><b>Movie</b></a>
            <div className={css.rb}>
            <div className={css.buttonSearch}>
                <button onClick={handleSearchClick}><b>&#128269;</b></button>
                {searchVisible && <SearchComponent onSearch={handleSearch} />}
            </div>
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

