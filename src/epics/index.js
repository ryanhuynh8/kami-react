import { combineEpics } from 'redux-observable';
import marvelEpic from './marvelEpic';

const epics = [
    marvelEpic,
];

const rootEpic = combineEpics(...epics);

export default rootEpic;
