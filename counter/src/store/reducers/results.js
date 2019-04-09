const initialState = {
    results: [],
    posts: []
}
const reducer = (state = initialState, action)=>{
    switch(action.type){
        
        case 'STORE_RESULT':
        return {
            ...state, 
            results : state.results.concat({id: new Date(),  data: action.counter })
        }
        case 'REMOVE_RESULT':
        return {
            ...state, 
            results : state.results.filter(item => item.id != action.id)
        }
        case 'SAVE_DATA': 
        return {
            ...state, 
            posts: action.payload
        }
    }
    return state;
}
export default reducer; 