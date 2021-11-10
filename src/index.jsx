//#region Imports

import ScreenLoader from 'components/ScreenLoader';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//#endregion

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<ScreenLoader />}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
