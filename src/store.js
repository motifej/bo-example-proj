import 'regenerator-runtime/runtime'; // eslint-disable-line
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import reducer from 'reducers/main';

const sagaMiddleware = createSagaMiddleware();

const configurateStore = (history) => {
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
    createLogger({
      collapsed: true,
    }),
  ];

  const store = createStore(reducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(sagas);

  return store;
};


export default configurateStore;
