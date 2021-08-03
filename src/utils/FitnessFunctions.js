import Fitness from '@ovalmoney/react-native-fitness';
import { logMessage, logError } from './log';
import * as DateUtils from './DateUtils';

const permissions = [
  {kind: Fitness.PermissionKinds.Steps, access: Fitness.PermissionAccesses.Read},
  {kind: Fitness.PermissionKinds.Distances, access: Fitness.PermissionAccesses.Read},
  {kind: Fitness.PermissionKinds.Calories, access: Fitness.PermissionAccesses.Read},
  {kind: Fitness.PermissionKinds.Activity, access: Fitness.PermissionAccesses.Read},
  {kind: Fitness.PermissionKinds.SleepAnalysis, access: Fitness.PermissionAccesses.Read},
];

export const authorize = () => {
  return new Promise((resolve, reject) => {
    Fitness.isAuthorized(permissions).then((res) => {
      if (res) {
        resolve(res);
      } else {
        Fitness.requestPermissions(permissions).then((res) => {
          resolve(res);
        }).catch((err) => {
          logError('authorize', err);
          reject(err);
        });
      }
    }).catch((err) => {
      logError('checkIsAuthorized', err);
      reject(err);
    });
  });
};

export const getSteps = () => {
  return new Promise((resolve, reject) => {
    Fitness.getSteps({
      startDate: DateUtils.getStartOfDayBySubtractString(7),
      endDate: DateUtils.getEndofDateString(),
      interval: 'days',
    }).then((result) => {
      logMessage('getSteps', result);
      resolve(result);
    }).catch((err) => {
      logError('getSteps', err);
      reject(err);
    });
  });
};

export const getCalories = () => {
  return new Promise((resolve, reject) => {
    Fitness.getCalories({
      startDate: DateUtils.getStartOfDayBySubtractString(7),
      endDate: DateUtils.getEndofDateString(),
      interval: 'days',
    }).then((result) => {
      logMessage('getCalories', result);
      resolve(result);
    }).catch((err) => {
      logError('getCalories', err);
      reject(err);
    });
  });
};

export const getDistances = () => {
  return new Promise((resolve, reject) => {
    Fitness.getDistances({
      startDate: DateUtils.getStartOfDayBySubtractString(7),
      endDate: DateUtils.getEndofDateString(),
      interval: 'days',
    }).then((result) => {
      logMessage('getDistances', result);
      resolve(result);
    }).catch((err) => {
      logError('getDistances', err);
      reject(err);
    });
  });
};

export const getSleepAnalysis = () => {
  return new Promise((resolve, reject) => {
    Fitness.getSleepAnalysis({
      startDate: DateUtils.getStartOfDayBySubtractString(7),
      endDate: DateUtils.getEndofDateString()
    }).then((result) => {
      logMessage('getSleepAnalysis', result);
      resolve(result);
    }).catch((err) => {
      logError('getSleepAnalysis', err);
      reject(err);
    });
  });
};
