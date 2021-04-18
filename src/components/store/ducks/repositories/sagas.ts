/* eslint-disable no-console */
import { call, put, Effect } from 'redux-saga/effects';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { Repository } from './types';

interface ReposResponse {
    data: Repository[];
  }

export function* load(action: Effect) {
  console.log('action: ', action);

  try {
    const response: ReposResponse = yield call(api.get, `users/${action.payload}/repos`);

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
