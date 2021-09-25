import { useRoute } from '@react-navigation/core';
import React, {useState, useContext, useEffect} from 'react';
import LoginComponent from '../../components/Login/index';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const {
    authDispatch,
    authState: {loading, error},
  } = useContext(GlobalContext);

  const {params} = useRoute();  

  useEffect(() => {
    if(params?.data){
      setIsRegistered(true)
      setForm({...form, userName:params.data.username})
    }
  }, [params]);

  function onChange({name, value}) {
    setIsRegistered(false);
    setForm({...form, [name]: value});
  }

  const onSubmit = () => {
    console.log("LoginUserSubmitform +++", form);
    if (form.userName && form.password.trim().length > 8) {
      loginUser(form)(authDispatch);
    }
  };


  return (
    <LoginComponent
      onSubmit={onSubmit}
      isRegistered={isRegistered}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};
export default Login;
