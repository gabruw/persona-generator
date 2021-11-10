//#region Imports

import CircularProgress from 'components/CircularProgress';
import React, { useCallback } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import usePersonService from 'services/person/usePersonService';
import usePersonContext from 'storages/person/context';
import personFormat from 'utils/formatters/person';
import useAvatar from 'utils/hooks/useAvatar';
import styles from './styles.module.css';

//#endregion

const PersonAddCard = () => {
    const { create } = useAvatar();

    const { addPerson } = usePersonContext();
    const { requestState, fetchPerson } = usePersonService();

    const fetchNewPerson = useCallback(async () => {
        const { data } = await fetchPerson();

        const image = create(data);
        const format = personFormat(data, image);

        addPerson(format);
    }, [fetchPerson, create, addPerson]);

    return (
        <Card className={styles.card}>
            <Card.Content className={styles.cardContent}>
                <div className={styles.iconContainer} onClick={() => !requestState.isLoading && fetchNewPerson()}>
                    {requestState.isLoading ? (
                        <CircularProgress />
                    ) : (
                        <Icon className={styles.icon} name='plus' size='huge' />
                    )}
                </div>

                <div className={styles.text}>Add new person</div>
            </Card.Content>
        </Card>
    );
};

export default PersonAddCard;
