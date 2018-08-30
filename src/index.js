import React from 'react';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Login from './containers/Login';
import store, { history } from './store';
import './styles/index.css'; // eslint-disable-line import/no-unresolved

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
    <div style={styles}>
      <Route exact path="/" component={Login} />
    </div>
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
