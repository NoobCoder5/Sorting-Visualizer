import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { createStore, applyMiddleware } from 'redux';

import allReducer from "./AllReducer";
import { Provider } from "react-redux";

const store = createStore(
  allReducer
);
ReactDOM.render(
  <Provider store={store}>

    <App /> 
  </Provider>,

  document.getElementById("root")
);


