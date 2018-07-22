import * as ProductActions from './products.actions';

const initialState={
    numberOfPoroducts:1
}


export function productsReducer(state=initialState,action:ProductActions.IncrementNumberOfProductes){
    switch(action.type){
        case ProductActions.INCREMENT_NUMBER:
        return {...state,numberOfPoroducts:state.numberOfPoroducts+action.payload}
        default:
        return state;

    }
} 