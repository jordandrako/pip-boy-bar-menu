import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import(/* webpackChunkName: 'App' */ './App/App').then(App => {
  render(
    <BrowserRouter>
      <Route>
        {(props: RouteComponentProps<any>) => <App.default {...props} />}
      </Route>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
  )
})

serviceWorker.register();
