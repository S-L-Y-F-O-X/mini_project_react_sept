import {Genres} from "../components";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
        </div>
    );
};

export {GenresPage};
//
// import React from "react";
// import { useSelectedGenre } from "../components/hoc/GenreContext";
// import {Genres} from "../components";
//
//
// const GenresPage: React.FC = () => {
//     const { setSelectedGenre } = useSelectedGenre();
//
//     const handleGenreSelection = (genre: string) => {
//         setSelectedGenre(genre);
//     }
//
//     return (
//         <div>
//             <Genres handleGenreSelection={handleGenreSelection} />
//         </div>
//     );
// };
//
// export {GenresPage};
//
// rscc