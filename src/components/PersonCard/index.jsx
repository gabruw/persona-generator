//#region Imports

import React, { useMemo } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import svgStringToUrl from 'utils/functions/svgStringToUrl';
import styles from './styles.module.css';

//#endregion

const PersonCard = ({ person: { personal, work } }) => {
    const imageUrl = useMemo(() => svgStringToUrl(personal[PERSON_FIELDS.IMAGE]), [personal]);
    const gender = useMemo(() => (personal[PERSON_FIELDS.GENDER] === 'Male' ? 'mars' : 'venus'), [personal]);

    return (
        <Card className={styles.card}>
            <Image className={styles.image} src={imageUrl} wrapped centered />

            <Card.Content>
                <Card.Header className={styles.header}>
                    <div>{`${personal[PERSON_FIELDS.NAME]}, ${personal[PERSON_FIELDS.AGE]}`}</div>

                    <Icon name={gender} color='grey' />
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
