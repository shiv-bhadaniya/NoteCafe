import { combineReducers } from 'redux';

import root from './root';
import auth from './auth';

export const reducers = combineReducers({ root, auth });