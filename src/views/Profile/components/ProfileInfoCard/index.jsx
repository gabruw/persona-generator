//#region Imports

import { Icon } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const ProfileInfoCard = ({ info, icon }) => (
    <div className={styles.container}>
        <Icon name={icon} color='grey' size='big' />
        <div className={styles.info}>{info}</div>
    </div>
);

export default ProfileInfoCard;
