//#region Imports

import PersonGender from 'components/PersonGender';
import PersonImage from 'components/PersonImage';
import { Navigate, useLocation } from 'react-router';
import ROUTE_NAMES from 'router/route-names';
import { Grid, Segment } from 'semantic-ui-react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import ProfileMainInfoCards from './components/ProfileMainInfoCards';
import ProfileStepInfo from './components/ProfileStepInfo';
import styles from './styles.module.css';

//#endregion

const Content = ({ data }) => {
    const { personal, work, education } = data;

    return (
        <div className={styles.container}>
            <Segment className={styles.segment}>
                <Grid className={styles.grid} columns={2} divided centered>
                    <Grid.Row>
                        <Grid.Column>
                            <PersonImage svgString={personal[PERSON_FIELDS.IMAGE]} />
                        </Grid.Column>

                        <Grid.Column>
                            <Grid.Row className={styles.header}>
                                <PersonGender size='big' gender={personal[PERSON_FIELDS.GENDER]} />
                                <div className={styles.title}>{`${personal[PERSON_FIELDS.NAME]}, ${
                                    personal[PERSON_FIELDS.AGE]
                                }`}</div>
                            </Grid.Row>

                            <ProfileStepInfo {...data} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <ProfileMainInfoCards
                            title='Sobre'
                            data={[
                                { icon: 'id card outline', info: personal[PERSON_FIELDS.NATIONAL_CODE] },
                                { icon: 'call', info: personal[PERSON_FIELDS.CELLPHONE] }
                            ]}
                        />
                        <ProfileMainInfoCards
                            title='Educação'
                            data={[
                                { icon: 'university', info: education[PERSON_FIELDS.UNIVERSITY] },
                                { icon: 'certificate', info: education[PERSON_FIELDS.CERTIFICATE] }
                            ]}
                        />
                        <ProfileMainInfoCards
                            title='Trabalho'
                            data={[
                                { icon: 'briefcase', info: work[PERSON_FIELDS.POSITION] },
                                { icon: 'money bill alternate outline', info: work[PERSON_FIELDS.SALARY] }
                            ]}
                        />
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

const Profile = () => {
    const { state } = useLocation();
    return state ? <Content data={state} /> : <Navigate to={ROUTE_NAMES.PERSON} />;
};

export default Profile;
