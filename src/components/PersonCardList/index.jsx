//#region Imports

import PersonCard from 'components/PersonCard';
import PersonAddCard from 'containers/PersonAddCard';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import usePersonContext from 'storages/person/context';
import styles from './styles.module.css';

//#endregion

const PersonCardList = () => {
    const { people } = usePersonContext();

    return (
        <Grid className={styles.grid} centered>
            <Grid.Row columns={6}>
                {people.map((person, index) => (
                    <Grid.Column key={index} className={styles.column}>
                        <PersonCard person={person} />
                    </Grid.Column>
                ))}

                <Grid.Column className={styles.column}>
                    <PersonAddCard />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default PersonCardList;
