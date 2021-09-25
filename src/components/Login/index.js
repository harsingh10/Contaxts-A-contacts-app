import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input/index';
import CustomButton from '../../components/common/CustomButton/index';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Register from '../../screens/Register/index';
import Message from '../common/Message/index';

const Index = ({onSubmit, isRegistered, onChange, form, error, loading, ...props}) => {
  // const [value, onChangeText] = React.useState('');
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to Contaxts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        
        {isRegistered && (
          <Message success message="Registered Successfully" onDismiss={() => {}} />
        )}
        {error && !error?.error && (
          <Message danger message="Invalid credentials" onDismiss={() => {}} />
        )}
        {error?.error && (
          <Message danger message={error.error} onDismiss={() => {}} />
        )}
        <View style={styles.form}>
          <Input
            label="Username"
            onChangeText={onChange}
            value={form.userName || null}
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
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
            <Text style={styles.infoText}>You already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(Register);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Index;
