//#region Imports

import CircularProgress from 'components/CircularProgress';
import React from 'react';
import { Dimmer } from 'semantic-ui-react';

//#endregion

const ScreenLoader = () => (
    <Dimmer active>
        <CircularProgress />
    </Dimmer>
);

export default ScreenLoader;
