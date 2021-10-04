import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import taskreducer from './taskreducer';

const middlewares = [thunk];

export default () => {
  let store = createStore(taskreducer, applyMiddleware(...middlewares));
};
