import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const user = (state="", action) => {
  switch(action.type){
    case "SET_USER":
      state = action.user
      return state
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