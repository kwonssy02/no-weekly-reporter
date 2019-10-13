import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko'; // the locale you want

import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.scss';

const store = configureStore();
ko.options.weekStartsOn = 1;
registerLocale('ko', ko); // register it with the name you want
setDefaultLocale(ko);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
