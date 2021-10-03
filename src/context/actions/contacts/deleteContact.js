import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_LOADING,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default (id) => (dispatch) => async onSuccess => {
  console.log("data==================Recieved",id);
  dispatch({
    type: DELETE_CONTACT_LOADING,
  });
  try {
    const response = await axiosInstance.delete(`/contacts/${id}`);
    if (response) {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
      onSuccess();
    }
  } catch (err) {
    dispatch({
      type: DELETE_CONTACT_FAIL,
      payload: err.response
        ? err.response.data
        : {error: 'Something went wrong, try again'},
    });
  }
};
