import { combineReducers} from 'redux';
import movies from './movies';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
    movies,
    form:formReducer
});