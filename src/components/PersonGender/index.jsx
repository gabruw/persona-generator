//#region Imports

import React, { useMemo } from 'react';
import { Icon } from 'semantic-ui-react';

//#endregion

const PersonGender = ({ gender, size = 'small' }) => {
    const genderIcon = useMemo(() => (gender === 'Male' ? 'mars' : 'venus'), [gender]);
    return <Icon name={genderIcon} color='grey' size={size} />;
};

export default PersonGender;
