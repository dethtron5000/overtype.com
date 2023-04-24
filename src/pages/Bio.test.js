import React from 'react';

import { createRoot } from 'react-dom/client';
import Bio from './Bio';

it('renders without crashing', () => {
  const container = document.createElement('div');

  const root = createRoot(container);
  root.render(<Bio />);
});
