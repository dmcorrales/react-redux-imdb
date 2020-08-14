import MovieService from '../_services/movies.service';
import {FILTER_MOVIES_SUCCESS, MOVIES_ERROR} from '../_helpers/action.consts';

const findByName = (filter, page = 1) => {
    return dispatch => {
        console.log("page" + page)
        MovieService.findByName(filter, page).then(response => {
                dispatch({payload:response, type:FILTER_MOVIES_SUCCESS, filter});
        }).catch(err => 
            dispatch(dispatch({payload:err, type:MOVIES_ERROR})))
    }
}

export default findByName;