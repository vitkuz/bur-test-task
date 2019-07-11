import * as A from "./actions.types";

export const setCurrentUser = (user) => {
    return {
        type: A.SET_CURRENT_USER,
        user
    }
};

export const logIn = (payload) => {
    return {
        type: A.LOGIN_ATTEMPT,
        payload
    }
};

export const logInSuccess = (payload) => {
    return {
        type: A.LOGIN_SUCCESS,
        payload
    }
};

export const logInFail = (payload) => {
    return {
        type: A.LOGIN_FAIL,
        payload
    }
};

export const register = (payload) => {
    return {
        type: A.REGISTER_ATTEMPT,
        payload
    }
};

export const registerSuccess = (payload) => {
    return {
        type: A.REGISTER_SUCCESS,
        payload
    }
};

export const registerFail = (payload) => {
    return {
        type: A.REGISTER_FAIL,
        payload
    }
};

export const logOut = () => {
    return {
        type: A.LOG_OUT,
    }
};
