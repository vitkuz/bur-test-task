import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { LoginPage } from '../../../../components/pages/loginPage/LoginPage';

const wrapper = shallow(<LoginPage />);

test('LoginPage should render', () => {
  expect(wrapper).toMatchSnapshot();
});

test('LoginPage should submit in all fields exists', () => {

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
    target: {
      elements: {
        email: {
          value: "email"
        },
        password: {
          value: "pass"
        }
      }
    }
  });
  expect(wrapper.state('error').length).toBe(0);
  expect(wrapper).toMatchSnapshot();
});

test('LoginPage should set error when some of the required fields are empty', () => {

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
    target: {
      elements: {
        email: {
          value: ""
        },
        password: {
          value: "pass"
        }
      }
    }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
