import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducers'

const rootReducer = combineReducers({
    //Responsavel pelo estado da aplicação Todo
    todo : todoReducer

})
       
    


export default rootReducer