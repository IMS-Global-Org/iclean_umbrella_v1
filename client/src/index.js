import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

// Style Sheets
import 'semantic-ui-css/semantic.min.css'
import './index.css';

// Apps
import Public from './apps/Public';
import Admin from './apps/Admin'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/** Place App Routes Here */}
      <Switch>
        <Route exact path='/' component={Public} />
        <Route path='/admin' component={Admin} />
        <Route component={Public} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
