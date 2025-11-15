import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './Nav.js';

import {HashRouter} from 'react-router';

test('renders without crashing', () => {
  const {container} = render(
    <HashRouter>
      <Nav />
    </HashRouter>
  )
  

  expect(container).toMatchSnapshot();


});
