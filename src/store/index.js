import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const middleware = [];

if (process.env.NODE_ENV === `development`) {
  // https://github.com/evgenyrodionov/redux-logger#options
  const logger = createLogger();
  middleware.push(logger);
}

const store = createStore(applyMiddleware(...middleware))(createStore)();

export default store;
