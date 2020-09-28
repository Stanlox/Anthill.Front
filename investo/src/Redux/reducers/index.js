import { combineReducers } from 'redux';
import Favorite from './Favorite';

const rootReducer = combineReducers({
    favorites: Favorite
});

export default rootReducer;