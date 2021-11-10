//#region Imports

import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const ProfileInfoText = ({ title, icon, info }) => (
    <Fragment>
        <div className={styles.titleContainer}>
            <Icon name={icon} />
            <div className={styles.title}>{title}</div>
        </div>

        <div>{info}</div>
    </Fragment>
);

export default ProfileInfoText;
