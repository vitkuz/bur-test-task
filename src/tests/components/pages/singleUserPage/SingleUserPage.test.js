import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SingleUserPage } from '../../../../components/pages/singleUserPage/SingleUserPage';

import users from '../../../__mocks__/usersMock';

const fetchUserByIdMock = jest.fn();

const matchMock = {
  params: {
    userId: 1
  },
  isExact: true,
  path: "",
  url: ""
};

test('SingleUserPage should render', () => {
  const wrapper = shallow(<SingleUserPage user={users[0]} fetchUserById={fetchUserByIdMock} match={matchMock}/>);

  expect(wrapper).toMatchSnapshot();
});

