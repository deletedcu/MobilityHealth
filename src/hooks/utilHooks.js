import {useDispatch} from 'react-redux';

export const useDispatchWrap = func => {
  const dispatch = useDispatch();
  return (...params) => dispatch(func(...params));
};