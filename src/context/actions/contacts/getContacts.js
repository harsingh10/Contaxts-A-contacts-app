// import {
//   GET_CONTACTS_FAIL,
//   GET_CONTACTS_LOADING,
//   GET_CONTACTS_SUCCESS,
// } from '../../../constants/actionTypes';
// import axiosInstance from '../../../helpers/axiosInterceptor';

// export default () => dispatch => {
//   dispatch({
//     type: GET_CONTACTS_LOADING,
//   });

//   axiosInstance
//     .get('/contacts/')
//     .then(res => {
//         console.log("GET_CONTACTS_SUCCESS=====================>>res",res);
//       dispatch({
//         type: GET_CONTACTS_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch(err => {
//         console.log("GET_CONTACTS_FAIL=====================>>res",err);
//         dispatch({
//             type: GET_CONTACTS_FAIL,
//             payload: err.response
//             ? err.response.data
//             : {error: 'Something went wrong, try again'},
//           });
//     });
// };

import {
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS,
  } from '../../../constants/actionTypes';
  import axios from '../../../helpers/axiosInterceptor';
  
  export default () => (dispatch) => {
    dispatch({
      type: GET_CONTACTS_LOADING,
    });
  
    axios
      .get('/contacts/')
      .then((res) => {
                console.log("GET_CONTACTS_SUCCESS=====================>>res",res);
        dispatch({
          type: GET_CONTACTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
                  console.log("GET_CONTACTS_FAIL=====================>>res",err);                                                                                                                                                                                                                                                                                                                                                                                               
        dispatch({
          type: GET_CONTACTS_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
      
  };
