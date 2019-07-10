import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { NotFoundPage } from '../../../../components/pages/notFoundPage/NotFoundPage';

test('NotFoundPage should render', () => {
  const wrapper = shallow(<NotFoundPage />);

  expect(wrapper).toMatchSnapshot();
});

