const redux = require('redux');

// Create a initial State
const  initialState = {
    counter : 0
}
// Reducers 
const rootReducers = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_ONE':
        return {
            ...state, 
            counter: state.counter+1
        }
        case 'ADD_TEN':
        return {
            ...state, 
            counter: state.counter+action.payload
        }
    }
    return state;
}
// Create store
const store = redux.createStore(rootReducers);
console.log(store.getState());
store.subscribe(()=>{
    console.log('INSIDE SUBSCRIPTIONS', store.getState());
})
// Dispatcing an actions
store.dispatch({type: 'ADD_ONE'});
store.dispatch({type: 'ADD_TEN',  payload: 10});
store.dispatch({type: 'ADD_ONE'});

console.log(store.getState());