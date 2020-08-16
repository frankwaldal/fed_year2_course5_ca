import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

import './styles/indexStyles.scss';

import MainSite from './Site/MainSite';

library.add(faChevronRight, faEnvelopeOpen);

ReactDOM.render(
  <React.StrictMode>
    <MainSite />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
