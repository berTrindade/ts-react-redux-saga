/* eslint-disable max-len */
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (username: string) => ({ type: RepositoriesTypes.LOAD_REQUEST, payload: username });

export const loadSuccess = (payload: Repository[]) => ({ type: RepositoriesTypes.LOAD_SUCCESS, payload });

export const loadFailure = () => ({ type: RepositoriesTypes.LOAD_FAILURE });
