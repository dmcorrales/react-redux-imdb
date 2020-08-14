import { combineReducers} from 'redux';
import movies from './movies';
import season from './season';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
    movies,
    season,
    form:formReducer
});