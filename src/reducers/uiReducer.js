import { handleActions } from 'redux-actions';
import { HIDE_OVERLAY, SHOW_OVERLAY } from '../store/actionTypes';

const initialState = {
    overlayLoading: false,
    showOverlay: false,
    hero: null,
};

const actions = {
    [SHOW_OVERLAY]: (state, action) => ({
        ...state,
        showOverlay: true,
        hero: action.payload
    }),
    [HIDE_OVERLAY]: state => ({
        ...state,
        showOverlay: false,
        hero: null,
    }),
};

export default handleActions(actions, initialState);
