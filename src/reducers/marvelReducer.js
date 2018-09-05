import { handleActions } from 'redux-actions';
import { FETCH_MARVEL_HEROES_SUCCESS } from '../store/actionTypes';
import { PER_PAGE } from '../constants';

const initialState = {
    heroes: [],
    errors: null,
};

const actions = {
    [FETCH_MARVEL_HEROES_SUCCESS]: (state = initialState, action) => ({
        ...state,
        heroesMetaData: action.payload.data,
        pagesCount: Math.floor(action.payload.data.total / PER_PAGE) + 1,
    }),
};

export default handleActions(actions, initialState);
