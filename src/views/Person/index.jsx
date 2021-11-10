//#region Imports

import Header from 'components/Header';
import PersonCardList from 'components/PersonCardList';
import { PersonContextProvider } from 'storages/person/context';

//#endregion

const Person = () => (
    <PersonContextProvider>
        <Header />
        <PersonCardList />
    </PersonContextProvider>
);

export default Person;
