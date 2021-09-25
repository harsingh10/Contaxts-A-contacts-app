import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import RegisterComponent from '../../components/Register/index';
import { LOGIN } from '../../constants/routeNames';
import register,{clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const{authDispatch, authState:{loading,data,error}} = useContext(GlobalContext);
    const {navigate} = useNavigation();

 useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
            // console.log("exited focuseffect",(data.length>0 || error) );
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

 function onChange({name, value}){
    setForm({...form, [name]: value});
    if(value !==''){
        if(name==="password"){
            if(value.length < 6){
                setErrors((prev)=>{return{...prev,[name]:"Minimum 6 character"}})
            }
            else{
                setErrors((prev)=>{return{...prev,[name]:null}})
            }
        }
        else{
            setErrors((prev)=>{return{...prev,[name]:null}
        })
        }
    }else{
        setErrors((prev)=>{return{...prev,[name]:"This field is required"}
    })
    }
  };

  const onSubmit = () => {
    console.log("RegisterScreensForm +++", form)
    if (!form.userName) {
        setErrors((prev) => {
          return {...prev, userName: 'Please add a username'};
        });
      }
    if (!form.firstName) {
        setErrors(prev => {
        return {
          ...prev,
          'firstName': 'Please enter a firstName',
        }
      });
    }
    if (!form.lastName) {
        setErrors(prev => {
        return {
          ...prev,
          'lastName': 'Please enter a lastName',
        };
      });
    }
    if (!form.email) {
        setErrors(prev => {
        return {
          ...prev,
          'email': 'Please enter a email',
        };
      });
    }
    if (!form.password) {
        setErrors(prev => {
        return {
          ...prev,
          'password': 'Please enter a password',
        };
      });
    }  
  if( Object.values(form).length ===5 &&
  Object.values(form).every(item=>item.trim().length>0) &&
  Object.values(errors).every(item=> !item)){
    register(form)(authDispatch)((response)=>{
      navigate(LOGIN,{data:response});
    });
}
  }

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  )

};

export default Register;
