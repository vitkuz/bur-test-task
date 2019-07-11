import * as A from "../actions.types";

export const fetchUsers = () => {
  return {
    type: A.FETCH_USERS,
  }
};

export const setUsers = (users = []) => {
  return {
    type: A.SET_USERS,
    users
  }
};


export const fetchUserById = (id) => {
  return {
    type: A.FETCH_USER_BY_ID,
    id
  }
};

export const setUser = (user = {}) => {
  return {
    type: A.SET_USER,
    user
  }
};
