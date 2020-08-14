import MovieService from '../_services/movies.service';
import {FILTER_MOVIES_SUCCESS, MOVIES_ERROR} from '../_helpers/action.consts';

const findById = (id) => {
    return dispatch => {
        MovieService.findById(id).then(response => {
                dispatch({payload:response, type:FILTER_MOVIES_SUCCESS});
        }).catch(err => 
            dispatch(dispatch({payload:err, type:MOVIES_ERROR})))
    }
}

export default findById;