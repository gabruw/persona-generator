//#region Imports

import { createAvatar } from '@dicebear/avatars';
import * as maleStyles from '@dicebear/avatars-female-sprites';
import * as femaleStyles from '@dicebear/avatars-male-sprites';
import { useCallback } from 'react';
import PERSON_FIELDS from 'utils/constants/fields/person';

//#endregion

const useAvatar = () => {
    const create = useCallback((person) => {
        const style =
            person[PERSON_FIELDS.PERSON][PERSON_FIELDS.PERSONAL][PERSON_FIELDS.GENDER] === 'MALE'
                ? maleStyles
                : femaleStyles;
        return createAvatar(style, { seed: person[PERSON_FIELDS.PERSON][PERSON_FIELDS.PERSONAL][PERSON_FIELDS.NAME] });
    }, []);

    return {
        create
    };
};

export default useAvatar;
