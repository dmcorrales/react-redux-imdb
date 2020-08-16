import MovieService from '../_services/movies.service';
import { LIST_CREDITS_SUCCESS, MOVIES_ERROR } from '../_helpers/action.consts';

const getListcredits = (id, type = 'movie') => {
    return dispatch => {
        MovieService.getListCredits(id, type).then(response => {
            dispatch({ payload: response, type: LIST_CREDITS_SUCCESS });
        }).catch(err =>
            dispatch(dispatch({ payload: err, type: MOVIES_ERROR })))
    }
}

export default getListcredits;