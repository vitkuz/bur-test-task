import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Home } from '../../../../components/pages/homePage/Home';

import postsMock from '../../../__mocks__/postsMock';
const fetchPostsMock = jest.fn();

test('Home should render', () => {
  const wrapper = shallow(<Home posts={postsMock} fetchPosts={fetchPostsMock}/>);

  expect(wrapper).toMatchSnapshot();
});

