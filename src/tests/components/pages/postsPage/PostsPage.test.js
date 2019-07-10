import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { PostsPage } from '../../../../components/pages/postsPage/PostsPage';

import postsMock from '../../../__mocks__/postsMock';
const fetchPostsMock = jest.fn();

test('PostsPage should render', () => {
  const wrapper = shallow(<PostsPage posts={postsMock} fetchPosts={fetchPostsMock}/>);

  expect(wrapper).toMatchSnapshot();
});

