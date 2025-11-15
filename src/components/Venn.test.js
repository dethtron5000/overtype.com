import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Venn from './Venn.js';

test('renders without crashing', () => {
  const {container} = render(<Venn />)

  expect(container).toMatchSnapshot();


});
