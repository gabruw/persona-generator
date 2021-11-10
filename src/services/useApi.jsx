//#region Imports

import axios from 'axios';
import ENDPOINTS from 'utils/constants/api/endpoints';

//#endregion

const useApi = () => {
    return axios.create({
        baseURL: ENDPOINTS.BASE
    });
};

export default useApi;
