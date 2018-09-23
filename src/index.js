import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
    <Provider>
        <App store = {store}/>
    </Provider>
    , document.getElementById('app')
);
