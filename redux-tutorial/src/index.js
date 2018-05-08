import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';


// change act to es6 param type, payload


const allReducer = combineReducers({
    products: productReducer,
    user: userReducer,
});

const allStoreEnchencer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducer, 
    {
        products: [{name: 'iPhone'}],
        user: 'Micheal'
    },
    allStoreEnchencer
);

ReactDOM.render(
    <Provider store={store}>
        <App aRandomProps = 'whatever' />
    </Provider>, 
    document.getElementById('root')
    
);
registerServiceWorker();
