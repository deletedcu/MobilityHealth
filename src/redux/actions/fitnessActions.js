import * as fitnessTypes from '../types/fitnessTypes';
import * as Fitness from '../../utils/FitnessFunctions';
import {logMessage, logError} from '../../utils/log';

export const setLoading = status => {
  return dispatch => {
    dispatch({type: fitnessTypes.LOADING, payload: status});
  };
};

export const setDemo = status => {
  return dispatch => {
    dispatch({type: fitnessTypes.DEMO, payload: status});
  };
};

export const authorize = () => {
  return async dispatch => {
    try {
      const res = await Fitness.authorize();
      dispatch({type: fitnessTypes.AUTHORIZE, payload: res});
    } catch (err) {
      dispatch({type: fitnessTypes.AUTHORIZE, payload: false});
    }
  };
};

export const getActivities = () => {
  return async dispatch => {
    let steps = [];
    let calories = [];
    let distances = [];
    try {
      steps = await Fitness.getSteps();
      calories = await Fitness.getCalories();
      distances = await Fitness.getDistances();
      dispatch({type: fitnessTypes.ACTIVITIES, payload: {steps, calories, distances}});
    } catch (err) {
      dispatch({type: fitnessTypes.ACTIVITIES, payload: {steps, calories, distances}});
    }
  };
};

export const getSleepAnalysis = () => {
  return async dispatch => {
    try {
      const result = await Fitness.getSleepAnalysis();
      dispatch({type: fitnessTypes.SLEEP, payload: result});
    } catch (err) {
      dispatch({type: fitnessTypes.SLEEP, payload: []});
    }
  }
}