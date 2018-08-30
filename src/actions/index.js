import { createAction } from 'redux-actions';
import {
    DUMMY_ACTION,
    FETCH_CONFIGURATION,
    FETCH_CONFIGURATION_SUCCESS,
    FETCH_CONFIGURATION_FAILED,
    HANDLE_ERROR_API,
    HIDE_MODAL_HANDLE_ERROR_API,
    VALIDATION_SAID,
    VALIDATION_SAID_SUCCESS,
    VALIDATION_SAID_FAILED,
    VALIDATE_OTP,
    VALIDATE_OTP_SUCCESS,
    VALIDATE_OTP_FAILED,
} from '../store/actionTypes';

export const dummyAction = createAction(DUMMY_ACTION);
export const fetchConfiguration = createAction(FETCH_CONFIGURATION);
export const fetchConfigurationSuccess = createAction(
    FETCH_CONFIGURATION_SUCCESS,
);
export const fetchConfigurationFailed = createAction(
    FETCH_CONFIGURATION_FAILED,
);

export const handleErrorApi = createAction(HANDLE_ERROR_API);
export const hideModalHandleErrorApi = createAction(
    HIDE_MODAL_HANDLE_ERROR_API,
);

export const validationSaid = createAction(VALIDATION_SAID);
export const validationSaidSuccess = createAction(VALIDATION_SAID_SUCCESS);
export const validationSaidFailed = createAction(VALIDATION_SAID_FAILED);

export const validateOtp = createAction(VALIDATE_OTP);
export const validateOtpSuccess = createAction(VALIDATE_OTP_SUCCESS);
export const validateOtpFailed = createAction(VALIDATE_OTP_FAILED);
