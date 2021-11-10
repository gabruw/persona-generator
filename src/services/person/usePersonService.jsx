//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import useRequest from 'services/useRequest';
import ENDPOINTS from 'utils/constants/api/endpoints';

//#endregion

const usePersonService = () => {
    const api = useApi();
    const { run, requestState, clear } = useRequest();

    const fetchPerson = useCallback(async () => {
        const response = await run(async () => await api.get(ENDPOINTS.PERSON.GET));
        return response;
    }, [run, api]);

    return {
        clear,
        fetchPerson,
        requestState
    };
};

export default usePersonService;
