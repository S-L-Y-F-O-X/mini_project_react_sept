import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import {router} from "./router";
import {DarkModeProvider} from "./hoc/DarkModeProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <DarkModeProvider>
  <RouterProvider router={router}/>
    </DarkModeProvider>
);

