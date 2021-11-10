//#region Imports

import PersonGender from 'components/PersonGender';
import PersonImage from 'components/PersonImage';
import React from 'react';
import { useNavigate } from 'react-router';
import ROUTE_NAMES from 'router/route-names';
import { Card, Icon } from 'semantic-ui-react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import styles from './styles.module.css';

//#endregion

const PersonCard = ({ person }) => {
    const navigate = useNavigate();
    const { personal, work } = person;

    return (
        <Card className={styles.card} onClick={() => navigate(ROUTE_NAMES.PROFILE, { state: person })}>
            <PersonImage svgString={personal[PERSON_FIELDS.IMAGE]} />

            <Card.Content>
                <Card.Header className={styles.header}>
                    <div>{`${personal[PERSON_FIELDS.NAME]}, ${personal[PERSON_FIELDS.AGE]}`}</div>

                    <PersonGender gender={personal[PERSON_FIELDS.GENDER]} />
                </Card.Header>

                <Card.Meta>{`${work[PERSON_FIELDS.POSITION]} - ${work[PERSON_FIELDS.COUNTRY_CODE]}`}</Card.Meta>
            </Card.Content>

            <Card.Content extra>
                <Icon name='id card outline' color='grey' size='large' />
                {personal[PERSON_FIELDS.NATIONAL_CODE]}
            </Card.Content>
        </Card>
    );
};

export default PersonCard;
