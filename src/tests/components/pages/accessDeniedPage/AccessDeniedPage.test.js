import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { AccessDeniedPage } from '../../../../components/pages/accessDeniedPage/AccessDeniedPage';

test('AccessDeniedPage should render', () => {
  const wrapper = shallow(<AccessDeniedPage />);

  expect(wrapper).toMatchSnapshot();
});

