import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";


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
                path:'/genres/:genreId', element:<MoviesPage/>
            },
        ]
    }
]);

export {
    router
}