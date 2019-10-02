import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import { applyMiddleware, createStore}from 'redux'
import {Provider} from 'react-redux'
import reducers from './main/reducers'
import Todo from './todo/Todo'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//Conecxão com o React Dev Tools do chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//Objeto Estado da minha aplicação todo o estado estara dentro desse Objeto
//Que sera contralado pelo redux
const store = applyMiddleware(multi , thunk , promise)(createStore)(reducers, devTools)


ReactDOM.render(
        <Provider store={store}>
            <App/>

        </Provider>
    ,document.getElementById('app')
)