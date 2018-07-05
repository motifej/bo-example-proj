import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import ui from './ui';
import example from './example';

const rootReducer = combineReducers({
  ui,
  example,
  router: routerReducer,
});

export default rootReducer;
