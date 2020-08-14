import MovieService from '../_services/movies.service';
import { MOVIES_SUCCESS, MOVIES_ERROR } from '../_helpers/action.consts';

const listMovies = (page = 1) => {
    return dispatch => {
        MovieService.getAll(page).then(response => {
            dispatch({ payload: response, type: MOVIES_SUCCESS });
        }).catch(err =>
            dispatch(dispatch({ payload: err, type: MOVIES_ERROR })))
    }
}

export default listMovies;