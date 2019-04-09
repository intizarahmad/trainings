import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , combineReducers , applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk' //
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import counter  from './store/reducers/counter';
import results from './store/reducers/results';

const rootReducer = combineReducers({
    counterState: counter,
    resultsState: results
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk) );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
