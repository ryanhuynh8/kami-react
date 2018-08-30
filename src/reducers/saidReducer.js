import { handleActions } from 'redux-actions';
import { VALIDATION_SAID, VALIDATION_SAID_SUCCESS, VALIDATION_SAID_FAILED } from '../store/actionTypes';

const initialState = {
    saidValidation: false,
    errors: null,
};

const actions = {
    [VALIDATION_SAID]: (state = initialState) => ({
        ...state,
        saidValidation: false,
    }),
    [VALIDATION_SAID_SUCCESS]: (state, action) => ({
        ...state,
        saidValidation: true,
        response: action.payload,
    }),
    [VALIDATION_SAID_FAILED]: (state, action) => ({
        ...state,
        saidValidation: false,
        errors: action.payload,
    }),

};

export default handleActions(actions, initialState);
