import {useSelector} from 'react-redux';
import { useDispatchWrap } from "./utilHooks";
import {
  setLoading,
  setDemo,
  authorize,
  getActivities,
  getSleepAnalysis,
} from '../redux';

export const useAuthorize = () => {
  const isAuthorized = useSelector(state => state.fitness.isAuthorized);
  const authorizeF = useDispatchWrap(authorize);
  return {isAuthorized, authorizeF};
};

export const useLoading = () => {
  const loading = useSelector(state => state.fitness.loading);
  const setLoadingF = useDispatchWrap(setLoading);
  return {loading, setLoadingF};
};

export const useDemo = () => {
  const demoAvailable = useSelector(state => state.fitness.demoAvailable);
  const setDemoF = useDispatchWrap(setDemo);
  return {demoAvailable, setDemoF};
}

export const useActivities = () => {
  const {demoAvailable, steps, calories, distances} = useSelector(state => state.fitness);
  const getActivitiesF = useDispatchWrap(getActivities);

  return {
    demoAvailable,
    steps,
    calories,
    distances,
    getActivitiesF,
  };
};

export const useSleepAnalysis = () => {
  const {demoAvailable, sleeps} = useSelector(state => state.fitness);
  const getSleepAnalysisF = useDispatchWrap(getSleepAnalysis);
  
  return {
    demoAvailable,
    sleeps,
    getSleepAnalysisF,
  };
};
