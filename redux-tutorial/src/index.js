import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';


// change act to es6 param type, payload


const allReducer = combineReducers({
    products: productReducer,
    user: userReducer,
});

const store = createStore(
    allReducer, 
    {
        products: [{name: 'iPhone'}],
        user: 'Micheal'
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    
);
registerServiceWorker();
