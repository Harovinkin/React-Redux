import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/rootReducer'

const loggerMiddleware = store => next => action => {
  const res = next(action);
  console.table(store.getState());

  return res;
}

const store = createStore(
    rootReducer, 
    applyMiddleware(
      loggerMiddleware,
      ReduxThunk
    )
  )

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
