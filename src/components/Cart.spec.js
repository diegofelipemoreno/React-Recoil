import React from 'react';
import {render} from '@testing-library/react';

import Cart from './Cart';

const cartProps = {
  id: 'a',
  quantity: 1
};

test('should render default component', () => {
  const {container} = render(<Cart {...cartProps} />);

  expect(container.firstChild).toBeDefined();
});