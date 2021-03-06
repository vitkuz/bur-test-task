import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SinglePostPage } from './SinglePostPage';

import posts from '../../../tests/__mocks__/postsMock';

const fetchPostByIdMock = jest.fn();

const matchMock = {
  params: {
    userId: 1
  },
  isExact: true,
  path: "",
  url: ""
};

test('SinglePostPage should render', () => {
  const wrapper = shallow(<SinglePostPage post={posts[0]} fetchPostById={fetchPostByIdMock} match={matchMock}/>);

  expect(wrapper).toMatchSnapshot();
});

