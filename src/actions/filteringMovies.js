import MovieService from '../_services/movies.service';
import { FILTER_MOVIES_SUCCESS, MOVIES_ERROR } from '../_helpers/action.consts';

const findByName = (filter, page = 1, type = 'movie') => {
    return dispatch => {
        MovieService.findByName(filter, page, type).then(response => {
            dispatch({ payload: response, type: FILTER_MOVIES_SUCCESS, filter, type_filtering: type });
        }).catch(err =>
            dispatch(dispatch({ payload: err, type: MOVIES_ERROR })))
    }
}

export default findByName;