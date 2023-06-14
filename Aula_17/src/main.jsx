import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {combineReducers, createStore} from "redux"
import ProductsReducer from './reducers/products.js'
import {Provider} from "react-redux"

const store = createStore(
  combineReducers({
    products:ProductsReducer
  })
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
