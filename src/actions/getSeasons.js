import MovieService from '../_services/movies.service';
import { SEASON_SUCCESS, MOVIES_ERROR } from '../_helpers/action.consts';

const getSeasons = (tv_id, season_number) => {
    return dispatch => {
        MovieService.getSeasonById(tv_id, season_number).then(response => {
            dispatch({ payload: response, type: SEASON_SUCCESS });
        }).catch(err =>
            dispatch(dispatch({ payload: err, type: MOVIES_ERROR })))
    }
}

export default getSeasons;