//#region Imports

import React from 'react';
import { Loader } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const CircularProgress = () => <Loader className={styles.loader} inline='centered' size='large' active />;

export default CircularProgress;
