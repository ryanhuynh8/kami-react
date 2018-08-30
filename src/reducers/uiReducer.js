import { handleActions } from 'redux-actions';
import { VALIDATE_OTP, VALIDATE_OTP_SUCCESS, VALIDATE_OTP_FAILED } from '../store/actionTypes';

const initialState = {
    overlayLoading: false,
};

const actions = {
    [VALIDATE_OTP]: state => ({
        ...state,
        overlayLoading: true,
    }),
    [VALIDATE_OTP_SUCCESS]: state => ({
        ...state,
        overlayLoading: false,
    }),
    [VALIDATE_OTP_FAILED]: state => ({
        ...state,
        overlayLoading: false,
    }),

};

export default handleActions(actions, initialState);
