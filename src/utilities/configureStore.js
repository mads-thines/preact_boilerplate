import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/Root';
import { isProduction } from '../utilities/common';


const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(thunk, promise);
  // If Production
  if (isProduction) {
    return createStore(
      rootReducer,
      middleware
    );
  }

  // If Not Production
  let enhancer;
  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }

  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
};

export default configureStore;
