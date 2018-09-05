import { handleActions } from 'redux-actions';
import { HIDE_OVERLAY, SHOW_OVERLAY } from '../store/actionTypes';

const initialState = {
    overlayLoading: false,
    showOverlay: false,
};

const actions = {
    [SHOW_OVERLAY]: state => ({
        ...state,
        showOverlay: true,
    }),
    [HIDE_OVERLAY]: state => ({
        ...state,
        showOverlay: false,
    }),
};

export default handleActions(actions, initialState);
