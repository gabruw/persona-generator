//#region Imports

import { Grid } from 'semantic-ui-react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import ProfileInfoText from '../ProfileInfoText';
import styles from './styles.module.css';

//#endregion

const ProfileStepInfo = ({ personal, local, work }) => (
    <Grid className={styles.grid} columns={2} divided>
        <Grid.Row>
            <Grid.Column>
                <ProfileInfoText
                    title='Altura'
                    icon='arrows alternate vertical'
                    info={`${personal[PERSON_FIELDS.HEIGHT]} m`}
                />
            </Grid.Column>

            <Grid.Column>
                <ProfileInfoText
                    title='Peso'
                    icon='arrows alternate horizontal'
                    info={`${personal[PERSON_FIELDS.WEIGHT]} Kg`}
                />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <ProfileInfoText title='Cidade' icon='building' info={local[PERSON_FIELDS.CITY]} />
            </Grid.Column>

            <Grid.Column>
                <ProfileInfoText title='País' icon='map marker alternate' info={local[PERSON_FIELDS.COUNTRY]} />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <ProfileInfoText title='Código' icon='map outline' info={work[PERSON_FIELDS.COUNTRY_CODE]} />
            </Grid.Column>

            <Grid.Column>
                <ProfileInfoText title='Nascido' icon='home' info={local[PERSON_FIELDS.BORN_PLACE]} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ProfileStepInfo;
