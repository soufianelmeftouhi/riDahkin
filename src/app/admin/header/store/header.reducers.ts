import * as ProductSearch from './header.actions';

const initialState={
    search:""
}


export function productsReducerSearch(state=initialState,action:ProductSearch.SearchOfProductes){
    switch(action.type){
        case ProductSearch.SEARCH:
        return {...state,search:action.payload}
        default:
        return state;

    }
}
