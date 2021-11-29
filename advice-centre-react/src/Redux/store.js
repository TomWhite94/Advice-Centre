import { createStore, applyMiddleware, compose } from 'redux'
import adviceCentre from './reducers'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(adviceCentre, composeEnhancer(applyMiddleware(thunk) ) )

export default store