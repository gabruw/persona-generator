//#region Imports

import { Grid } from 'semantic-ui-react';
import ProfileInfoCard from '../ProfileInfoCard';
import styles from './styles.module.css';

//#endregion

const ProfileMainInfoCards = ({ title, data }) => (
    <Grid className={styles.grid} columns={2} divided centered>
        <div className={styles.title}>{title} </div>

        <Grid.Row className={styles.row}>
            {data.map(({ info, icon }, index) => (
                <Grid.Column key={index}>
                    <ProfileInfoCard icon={icon} info={info} />
                </Grid.Column>
            ))}
        </Grid.Row>
    </Grid>
);

export default ProfileMainInfoCards;
