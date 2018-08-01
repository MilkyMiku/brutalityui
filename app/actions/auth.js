export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(success) {
  return {
    type: LOGIN_SUCCESS,
    success
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}
