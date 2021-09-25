import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};
    case LOGIN_SUCCESS:
      return {...state, loading: false, data: payload, isLoggedIn: true};
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};
    case LOGOUT_USER:
      return {...state, loading: false, data: null, isLoggedIn: false}  
    case CLEAR_AUTH_STATE:
      return {...state, loading: false, error: null, data: null};
    default:
      return state;
  }
};

export default auth;
