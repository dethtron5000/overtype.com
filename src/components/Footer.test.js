import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer.js';

test('renders without crashing', () => {
  const {container} = render(<Footer />)

  expect(container).toMatchSnapshot();


});
