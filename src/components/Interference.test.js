import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Interference from './Interference.js';

test('renders without crashing', () => {
  const {container} = render(<Interference />)

  expect(container).toMatchSnapshot();


});

