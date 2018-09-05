import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import marvelReducer from './marvelReducer';
import uiReducer from './uiReducer';

export default combineReducers({
    router: routerReducer,
    marvel: marvelReducer,
    ui: uiReducer,
});
