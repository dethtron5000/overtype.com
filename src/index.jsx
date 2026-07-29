import {createRoot} from 'react-dom/client';
import {Routes, Route, HashRouter} from 'react-router';
import Main from './pages/Main.jsx';
import Bio from './pages/Bio.jsx';
import Speaking from './pages/Speaking.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
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
