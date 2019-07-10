import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../../../../components/ui/header/Header';
import Logo from '../../../../components/ui/logo/Logo';

test('header to match snapshots', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
