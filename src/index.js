import React, {
    Component
} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise-middleware'

import BookReducer from "Reducers/books";
import App from 'App/App';

let store = createStore(BookReducer, applyMiddleware(promiseMiddleware()));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)