import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ServerErrorPage } from './ServerErrorPage';

test('ServerErrorPage should render', () => {
  const wrapper = shallow(<ServerErrorPage />);

  expect(wrapper).toMatchSnapshot();
});

