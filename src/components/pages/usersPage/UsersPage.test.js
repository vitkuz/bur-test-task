import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { UsersPage } from './UsersPage';

import usersMock from '../../../tests/__mocks__/usersMock';
const fetchUsersMock = jest.fn();

test('UsersPage should render', () => {
  const wrapper = shallow(<UsersPage users={usersMock} fetchUsers={fetchUsersMock}/>);

  expect(wrapper).toMatchSnapshot();
});

