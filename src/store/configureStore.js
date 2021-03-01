import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({

    }), applyMiddleware(thunk))
}

export default configureStore