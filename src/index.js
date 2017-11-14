import React from 'react';
import ReactDOM from 'react-dom';

import { Route, HashRouter } from 'react-router-dom';

import Main from './pages/Main';
/* import Speaking from './pages/Speaking'; */
/* <Route exact path="/bio" component={Main} />
        <Route exact path="/speaking" component={Speaking} /> */

import Nav from './components/Nav';
import Footer from './components/Footer';

// import socketMiddleware from './middleware/socketMiddleware';

import './index.css';

ReactDOM.render(

  (
    <HashRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Footer />
      </div>
    </HashRouter>
  ),
  document.getElementById('root'),
);
