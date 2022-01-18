import {combineReducers, createStore} from 'redux'
import ProductReducer from './Reducer/ProductReducer'
import ProductIdReducer from './Reducer/ProductIdReducer'

var store=createStore(combineReducers({
    products:ProductReducer,
    product:ProductIdReducer
}),{
    products:[],
    product:{}
})

export default store;