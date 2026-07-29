import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Bio from './Bio.jsx';

test('renders without crashing', () => {
  const {container} = render(<Bio />)

  expect(container).toMatchSnapshot();


});
