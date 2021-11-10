//#region Imports

import { createContext, useCallback, useContext, useState } from 'react';

//#endregion

const initialState = {
    people: []
};

const PersonContext = createContext();

export const PersonContextProvider = ({ children, defaultValues = {} }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const addPerson = useCallback((person) => setState((prev) => ({ people: [...prev.people, person] })), [setState]);

    return <PersonContext.Provider value={{ ...state, addPerson }}>{children}</PersonContext.Provider>;
};

const usePersonContext = () => ({ ...useContext(PersonContext) });

export default usePersonContext;
