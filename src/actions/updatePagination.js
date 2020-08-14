import MovieService from '../_services/movies.service';
import { PAGINATION_NUMBER, MOVIES_ERROR } from '../_helpers/action.consts';

const updatePagination = (page) => {
    return dispatch => {
        dispatch({ page, type: PAGINATION_NUMBER });
    }
}

export default updatePagination;