import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const storeEnhancers = compose(
  applyMiddleware(thunk)
);

export const store = createStore(rootReducer, storeEnhancers);
