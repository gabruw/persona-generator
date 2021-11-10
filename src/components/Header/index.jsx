//#region Imports

import Logo from 'assets/images/logo.png';
import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const Header = () => (
    <div className={styles.container}>
        <Image className={styles.image} src={Logo} wrapped centered />
    </div>
);

export default Header;
