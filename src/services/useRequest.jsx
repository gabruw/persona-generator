//#region Imports

import { useCallback, useState } from 'react';

//#endregion

const initalState = {
    data: null,
    errors: null,
    status: null,
    isLoading: false
};

const useRequest = () => {
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback(() => setRequestState(initalState), []);

    const run = useCallback(async (callback) => {
        setRequestState({ ...initalState, isLoading: true });

        let response = null;
        await callback()
            .then(({ data, status }) => {
                response = { ...initalState, data, status };
            })
            .finally(() => setRequestState(response));

        return response;
    }, []);

    return {
        run,
        clear,
        requestState
    };
};

export default useRequest;
