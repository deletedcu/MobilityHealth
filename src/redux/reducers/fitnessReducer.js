import * as fitnessTypes from '../types/fitnessTypes';

const initialState = {
  isAuthorized: false,
  loading: false,
  steps: [],
  calories: [],
  distances: [],
  sleeps: [],
  demoAvailable: false,
};

const fitnessReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case fitnessTypes.AUTHORIZE:
      return {...state, isAuthorized: payload};
    case fitnessTypes.LOADING:
      return {...state, loading: payload};
    case fitnessTypes.ACTIVITIES:
      return {...state, steps: payload.steps, calories: payload.calories, distances: payload.distances, loading: false};
    case fitnessTypes.SLEEP:
      return {...state, sleeps: payload, loading: false};
    case fitnessTypes.DEMO:
      return {...state, demoAvailable: payload};
    default:
      return state;
  }
};

export default fitnessReducer;
