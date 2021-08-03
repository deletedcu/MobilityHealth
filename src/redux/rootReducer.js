import { combineReducers } from 'redux';

import fitnessReducer from './reducers/fitnessReducer';

const rootReducer = combineReducers({
  fitness: fitnessReducer,
});

export default rootReducer;