import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MoviesPage} from "./pages";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage";

const router = createBrowserRouter([
    {
        path: '', element:<MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'movie'}/>
            },
            {
               path:'movie', element:<MoviesPage/>
            },
            {
                path:'genres', element: <GenresPage/>
            },
            {
                path:'/genres/:genreId', element:<MoviesByGenrePage/>
            },
        ]
    }
]);

export {
    router
}