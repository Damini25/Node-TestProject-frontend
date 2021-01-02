import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, ReactReduxContext } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './common/utilities/httpInterceptor';
import { rootReducer } from './common/store/reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import rootSaga from './common/store/sagas/rootSaga';
import { history } from './common/utilities/history';

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routeMiddleware,sagaMiddleware]
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
