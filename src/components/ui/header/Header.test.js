import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import UserMenu from '../userMenu/UserMenu.component';

test('Header should render', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});

test('Header should have 3 cols', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find(Logo)).toHaveLength(1);
});

test('Header should have Menu, UserMenu and Logo', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find(Logo)).toHaveLength(1);
  expect(wrapper.find(Menu)).toHaveLength(1);
  expect(wrapper.find(UserMenu)).toHaveLength(1);
});

