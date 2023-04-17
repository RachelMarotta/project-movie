import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
// import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import HomeReducer from './Home/reducer'

const configureStore = () => {
	return createStore(
		HomeReducer,
    composeWithDevTools(applyMiddleware(thunk))
	)
}

export default configureStore;
