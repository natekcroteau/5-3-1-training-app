import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const user = (state={
    userName: null,
    userPassword: null
  }, action) => {
  switch(action.type){
    case "SIGN_UP_USER":
      //firebase signup
      return null
    case "SIGN_IN_USER":
      //firebase login
      return null
    default:
      return state
  }
}

const rootReducer = combineReducers({user})
const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);