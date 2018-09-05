import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import apiService from '../services/apiService';

import { FETCH_MARVEL_HEROES } from '../store/actionTypes';
import {
    fetchMarvelHeroesSuccess,
} from '../actions';

export const fetchMarvelEpic = action$ =>
    action$
        .ofType(FETCH_MARVEL_HEROES)
        .switchMap(action => apiService.fetchMarvelHeroes(action.payload))
        .map(res => fetchMarvelHeroesSuccess(res))
        .catch(error => {
            console.debug(error);
        });

export default combineEpics(fetchMarvelEpic);
