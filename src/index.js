import React from 'react';
import ReactDOM from 'react-dom';

import { Route, HashRouter } from 'react-router-dom';

import Main from './pages/Main';
import Bio from './pages/Bio';
import Speaking from './pages/Speaking';
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
        <Nav />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={Bio} />
        <Route exact path="/speaking" component={Speaking} />        
        <Footer />
      </div>
    </HashRouter>
  ),
  document.getElementById('root'),
);
