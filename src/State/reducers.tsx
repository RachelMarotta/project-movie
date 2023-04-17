import { combineReducers } from 'redux';
// import { DetailsReducer } from './Details/reducer'
// import { FavoritesReducer } from './Favorites/reducer'
import { HomeReducer } from './Home/reducer'

export const rootReducer = combineReducers(
	{
		home: HomeReducer,
		// details: DetailsReducer,
		// favorites: FavoritesReducer,
	}
)
