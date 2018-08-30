import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';
// import { persistStore, autoRehydrate } from 'redux-persist';
import 'rxjs';
import rootReducer from '../reducers';
import rootEpic from '../epics';

export const history = createHistory();

const initialState = {};

const enhancers = [];
const epicMiddleware = createEpicMiddleware();

const middleware = [
    routerMiddleware(history),
    epicMiddleware,
];

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);

epicMiddleware.run(rootEpic);

export default store;
