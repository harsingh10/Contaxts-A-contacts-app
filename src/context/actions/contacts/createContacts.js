import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_SUCCESS,
  CREATE_CONTACTS_LOADING,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default data => dispatch => async onSuccess => {
  const requestPayload = {
    country_code: data.phoneCode || '',
    first_name: data.firstName || '',
    last_name: data.lastName || '',
    phone_number: data.phoneNumber || '',
    contact_picture: data.contact_picture || null,
    is_favorite: data.isFavorite || false,
  };
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });
  try {
    console.log(requestPayload);
    const response = await axiosInstance.post('/contacts/', requestPayload);
    if (response) {
      console.log('CREATE_CONTACTS_SUCCESS=======>>>>', response);
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: response.data,
      });
      onSuccess();
    }
  } catch (err) {
    console.log('CREATE_CONTACTS_FAIL=======>>>>', err);

    dispatch({
      type: CREATE_CONTACTS_FAIL,
      payload: err.response
        ? err.response.data
        : {error: 'Something went wrong, try again'},
    });
  }
};
