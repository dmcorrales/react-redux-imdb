import { PAGINATION_NUMBER } from '../_helpers/action.consts';

const updatePagination = (page) => {
    return dispatch => {
        dispatch({ page, type: PAGINATION_NUMBER });
    }
}

export default updatePagination;