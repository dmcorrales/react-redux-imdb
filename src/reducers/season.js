import {SEASON_SUCCESS} from '../_helpers/action.consts';

const defaultState = {
    results: '',
    list: [],
    isLoading: true,
    filter: '',
}

const reducer = (state = defaultState, action) => {
    
    switch(action.type){

        case SEASON_SUCCESS:{
            return {...state, isLoading: false, results:action.payload}
        }

        default:
            return {...state}
    }
}

export default reducer;