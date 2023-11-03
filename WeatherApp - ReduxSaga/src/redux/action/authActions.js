import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from '../constants';

export const loginSuccess = (username, password) => ({
  type: LOGIN_SUCCESS,
  payload: {username, password},
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
