import { combineReducers } from 'redux';

import { repositoriesReducer } from './repositories';

export default combineReducers({
  repositories: repositoriesReducer,
});
