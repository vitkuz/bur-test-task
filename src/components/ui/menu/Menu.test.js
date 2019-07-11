import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Menu from './Menu';

test('Header should render', () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper).toMatchSnapshot();
});

