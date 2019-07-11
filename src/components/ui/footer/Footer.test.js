import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from './Footer';

test('Header should render', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
});

