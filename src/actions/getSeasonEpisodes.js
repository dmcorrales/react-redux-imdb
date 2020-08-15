import MovieService from '../_services/movies.service';
import { SEASON_EPISODES_SUCCESS, MOVIES_ERROR } from '../_helpers/action.consts';

const getSeasonEpisodes = (tv_id,season_number,episode_number) => {
    return dispatch => {
        MovieService.getSeasonEpisodesById(tv_id,season_number,episode_number).then(response => {
            dispatch({ payload: response, type: SEASON_EPISODES_SUCCESS });
        }).catch(err =>
            dispatch(dispatch({ payload: err, type: MOVIES_ERROR })))
    }
}

export default getSeasonEpisodes;