import {createRoot} from 'react-dom/client';
import {Routes, Route, HashRouter} from 'react-router-dom';
import Main from './pages/Main.js';
import Bio from './pages/Bio.js';
import Speaking from './pages/Speaking.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import './index.css';

const container = document.querySelector('#root');

const root = createRoot(container);


root.render(
  <HashRouter>
    <div id="wrapper">
      <Nav />
      <Routes>
        <Route exact="true" path="/" element={<Main />} />
        <Route exact="true" path="/about" element={<Bio />} />
        <Route exact="true" path="/speaking" element={<Speaking />} />
      </Routes>
      <Footer />
    </div>
  </HashRouter>,
);
