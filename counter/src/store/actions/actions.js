import axios from 'axios';
export const INCREAMENT = 'INCREAMENT';
export const DECREAMENT = 'DECREAMENT';
export const STORE_RESULT = 'STORE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';

export const onIncreamentAction = data => dispatch =>{
    setTimeout(()=>{
        console.log(data);
        dispatch({type:'INCREAMENT', payload: data})
    }, 1000); 
}

export const getData = data => dispatch =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    dispatch({type: 'SAVE_DATA', payload:response.data })
  })
  .catch(function (error) {
    console.log(error);
  });
} 