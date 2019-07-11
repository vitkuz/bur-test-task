import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { RegisterPage } from './RegisterPage';

const wrapper = shallow(<RegisterPage />);

test('RegisterPage should render', () => {
  expect(wrapper).toMatchSnapshot();
});

test('RegisterPage should submit when all fields exists', () => {

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
    target: {
      elements: {
        email: {
          value: 'email'
        },
        username: {
          value: 'username'
        },
        password: {
          value: 'pass'
        }
      }
    }
  });
  expect(wrapper.state('error').length).toBe(0);
  expect(wrapper).toMatchSnapshot();
});

test('RegisterPage should set error when some of the required fields are empty', () => {

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
    target: {
      elements: {
        email: {
          value: ''
        },
        username: {
          value: ''
        },
        password: {
          value: 'pass'
        }
      }
    }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
