import {createRoot} from 'react-dom/client';
import Bio from './Bio.js';

it('renders without crashing', () => {
  const container = document.createElement('div');

  const root = createRoot(container);
  root.render(<Bio />);
});
