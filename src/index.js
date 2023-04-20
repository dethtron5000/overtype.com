import React from 'react';
import { createRoot } from 'react-dom/client';

import { Routes, Route, HashRouter } from 'react-router-dom';

import Main from './pages/Main';
import Bio from './pages/Bio';
import Speaking from './pages/Speaking';
/* <Route exact path="/bio" component={Main} />
        <Route exact path="/speaking" component={Speaking} /> */

import Nav from './components/Nav';
import Footer from './components/Footer';

// import socketMiddleware from './middleware/socketMiddleware';

import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(

  (
    <HashRouter>
      <div>
        <Nav />
        <Routes>
          <Route exact="true" path="/" element={<Main />} />
          <Route exact="true" path="/about" element={<Bio />} />
          <Route exact="true" path="/speaking" element={<Speaking />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  ),
);
