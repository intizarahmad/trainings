const initialState = {
    counter : 0
}
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INCREAMENT':
        return {
            ...state, 
            counter : state.counter+action.payload
        }
        case 'DECREAMENT':
        return {
            ...state, 
            counter : state.counter-action.payload
        }
    }
    return state;
}
export default reducer; 