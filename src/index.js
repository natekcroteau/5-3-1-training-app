import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const user = (state="", action) => {
  switch(action.type){
    case "SET_USER":
      return state = action.user
    default:
      return state
  }
}

const loggedIn = (state=false, action) => {
  switch(action.type){
    case "LOG_IN":
      return state = true
    case "LOG_OUT":
      return state = false
    default:
      return state
  }
}

const rootReducer = combineReducers({user, loggedIn})
const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);