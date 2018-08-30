import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import apiService from '../services/apiService';

import { VALIDATION_SAID } from '../store/actionTypes';
import {
    validationSaidSuccess,
    handleErrorApi,
} from '../actions';

export const validationSaidEpic = action$ =>
    action$
        .ofType(VALIDATION_SAID)
        .switchMap(action => apiService.validationSaid(action.payload))
        .map(res => validationSaidSuccess(res))
        .catch(error => {
            return Observable.of(handleErrorApi(error.response.errors));
        });

export default combineEpics(validationSaidEpic);
