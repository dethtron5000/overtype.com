import React from 'react';

import { createRoot } from 'react-dom/client';
import Main from './Main';

it('renders without crashing', () => {
  const container = document.createElement('div');

  const root = createRoot(container);
  root.render(<Main />);
});
