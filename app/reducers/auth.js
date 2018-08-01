import * as ActionTypes from '../actions';

export default function authReducer(
  state = {
    // isAuthenticated: !AuthService.isTokenExpired(),
    // isFetching: false,
    // profile: AuthService.getProfile(),
    // token: AuthService.getToken(),
    error: null
  },
  action
) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state
        // isFetching: false,
        // isAuthenticated: true,
        // profile: action.success[0],
        // token: action.success[1]
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        // isFetching: false,
        // isAuthenticated: false,
        // profile: {},
        // token: null,
        error: action.error
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state
        //  isAuthenticated: false,
        //   profile: {}
      };
    default:
      return state;
  }
}
