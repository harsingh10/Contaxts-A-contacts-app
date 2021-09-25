import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import env from '../../config/env';
import Message from '../common/Message';
// import axiosInstance from '../../helpers/axiosInterceptor';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  error,
  loading,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {DEV_BACKEND_URL} = env;
  // console.log('DEV_BACKEND_URL', DEV_BACKEND_URL);
  // console.log('_DEV_', __DEV__);
  // useEffect(() => {
  //   const data = axiosInstance.get("/contats").catch((err)=>{
  //     console.log(err, err.response);
  //   })
  //   console.log("data=======>>>>",data);
  // }, [])
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message
              danger
              message={error.error}
              retry
              retryfn={() => {
                console.log('11');
              }}
              onDismiss={() => {}}
            />
          )}
          {/* {console.log(error)} */}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            error={errors.firstName || error?.first_name?.[0]}
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={(prev)=>setIsSecureEntry((prev)=>!prev)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            onPress={onSubmit}
            disabled={loading}
            loading={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
