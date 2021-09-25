import { REGISTER_FAIL,REGISTER_LOADING,REGISTER_SUCCESS,CLEAR_AUTH_STATE  } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor"

export const clearAuthState = () => (dispatch) =>{
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
}
export default ({
    email,
    firstName: first_name,
    lastName: last_name,
    password,
    userName: username,
})=>dispatch=>(onSuccess)=>{
    dispatch({
        type: REGISTER_LOADING,
    });
axiosInstance.post('auth/register',{
    username,
    first_name,
    last_name,
    email,
    password,
}).then((res)=>{
    console.log("dispatchREGISTER_SUCCESS",res)
    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
    });
    onSuccess(res.data);
}).catch((err)=>{
    console.log("dispatchREGISTER_FAIL",err)
    dispatch({
        type: REGISTER_FAIL,
        payload: err ? err : {error:"something went wrong"}
    });
})
}
