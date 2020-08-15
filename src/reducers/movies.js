import {MOVIES_SUCCESS, PAGINATION_NUMBER,FILTER_MOVIES_SUCCESS} from '../_helpers/action.consts';

const defaultState = {
    results: '',
    list: [],
    isLoading: true,
    filter: '',
    type_filtering: 'movie',
    page: 1,
}

const reducer = (state = defaultState, action) => {
    
    switch(action.type){

        case PAGINATION_NUMBER:{
            return {...state, page:action.page}
        }

        case FILTER_MOVIES_SUCCESS:{
            let list = [];
            if(state.page == 1){
                list = action.payload.data.results;
            }else{
                list = state.list.concat(action.payload.data.results)
            }
           
            return {...state, isLoading: false, results:action.payload, list, type_filtering:action.type_filtering , filter:action.filter}
        }

        case MOVIES_SUCCESS:{
            let list = state.list.concat(action.payload.data.results)
            return {...state, isLoading: false, results:action.payload, list}
        }

        default:
            return {...state}
    }
}

export default reducer;