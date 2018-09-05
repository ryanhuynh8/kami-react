import { createAction } from 'redux-actions';
import {
    FETCH_MARVEL_HEROES, FETCH_MARVEL_HEROES_SUCCESS, FETCH_MARVEL_HEROES_FAILED, SHOW_OVERLAY, HIDE_OVERLAY,
} from '../store/actionTypes';

export const fetchMarvelHeroes = createAction(FETCH_MARVEL_HEROES);
export const fetchMarvelHeroesSuccess = createAction(FETCH_MARVEL_HEROES_SUCCESS);
export const fetchMarvelHeroesFailed = createAction(FETCH_MARVEL_HEROES_FAILED);

export const showOverlay = createAction(SHOW_OVERLAY);
export const hideOverlay = createAction(HIDE_OVERLAY);
