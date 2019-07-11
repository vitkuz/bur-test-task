import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { AccessDeniedPage } from './AccessDeniedPage';

test('AccessDeniedPage should render', () => {
  const wrapper = shallow(<AccessDeniedPage />);

  expect(wrapper).toMatchSnapshot();
});

