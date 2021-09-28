import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import Container from '../common/Container';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CountryPicker from 'react-native-country-picker-modal';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContacts = ({
  onChangeText,
  form,
  setForm,
  onSubmit,
  error,
  loading,
  toggleSwitch,
  sheetRef,
  openSheet,
  closeSheet,
  fileSelected,
  localFile,
  ...props
}) => {
  console.log("local===>>>>",localFile);
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={()=>openSheet()}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Enter First name"
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last name"
          placeholder="Enter Last name"
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
            />
          }
          style={{paddingLeft: 10}}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          error={error?.phone_number?.[0]}
          iconPosition="left"
          label="Phone Number"
          placeholder="Enter phone number"
        />
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
            <Text style={{fontSize:17}}>Add to favorites</Text>
          <Switch
            trackColor={{false: 'red', true: colors.primary}}
            thumbColor={'#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={form.isFavorite }
          />
        </View>
        <CustomButton
          title={loading ? 'Please wait...' : 'Submit'}
          onPress={onSubmit}
          disabled={loading}
          loading={loading}
          primary
        />
      </Container>
      <ImagePicker ref={sheetRef} fileSelected={fileSelected}/>
    </View>
  );
};

export default CreateContacts;
