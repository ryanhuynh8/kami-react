import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import saidReducer from './saidReducer';
import uiReducer from './uiReducer';

export default combineReducers({
    router: routerReducer,
    said: saidReducer,
    ui: uiReducer,
});
