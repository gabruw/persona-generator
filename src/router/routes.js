//#region Imports

import { lazy } from 'react';
import ROUTE_NAMES from './route-names';

//#endregion

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('views/Person'))
    },
    {
        path: ROUTE_NAMES.HOME,
        exact: true,
        component: lazy(() => import('views/Person'))
    },
    {
        path: ROUTE_NAMES.PERSON,
        exact: true,
        component: lazy(() => import('views/Person'))
    },
    {
        path: ROUTE_NAMES.PROFILE,
        exact: true,
        component: lazy(() => import('views/Profile'))
    },
    {
        path: '*',
        exact: true,
        component: lazy(() => import('views/Person'))
    }
];

export default ROUTES;
