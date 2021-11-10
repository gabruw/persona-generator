//#region Imports

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from './routes';

//#endregion

const Router = () => (
    <BrowserRouter>
        <Routes>
            {ROUTES.map(({ path, exact, component: Component }, index) => (
                <Route key={index} path={path} exact={exact} element={<Component />} />
            ))}
        </Routes>
    </BrowserRouter>
);

export default Router;
