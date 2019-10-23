import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import handlePostsDataMiddleware from './middlewares/handlePostsDataMiddleware'
import localStorageMiddleware from './middlewares/localStorageMiddleware'

export default function configureStore() {
	return createStore(rootReducer, applyMiddleware(handlePostsDataMiddleware, localStorageMiddleware));
}


