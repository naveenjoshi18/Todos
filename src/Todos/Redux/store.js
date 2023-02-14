import { createStore, applyMiddleware} from 'redux'
import listReducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(listReducer,applyMiddleware(thunk))

export default store