import {SEASON_SUCCESS, SEASON_EPISODES_SUCCESS} from '../_helpers/action.consts';

const defaultState = {
    results: '',
    list: [],
    isLoading: true,
    detail: [],
    filter: '',
}

const reducer = (state = defaultState, action) => {
    
    switch(action.type){

        case SEASON_EPISODES_SUCCESS:{
            return {...state, detail:action.payload}
        }

        case SEASON_SUCCESS:{
            return {...state, isLoading: false, results:action.payload}
        }

        default:
            return {...state}
    }
}

export default reducer;