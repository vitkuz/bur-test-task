import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Menu from '../../../../components/ui/menu/Menu';

test('Header should render', () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper).toMatchSnapshot();
});

