import React, {useContext, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import Input from '../../components/common/Input';
import CreateContacts from '../../components/CreateContacs';
import {GlobalContext} from '../../context/Provider';
import createContacts from '../../context/actions/contacts/createContacts';
import {useNavigation} from '@react-navigation/core';
import {CONTACT_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const [localFile, setLocalFile] = useState(null);
  const sheetRef = useRef(null);
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();

  const onChangeText = ({name, value}) => {
    if (name === 'firstName' && error?.first_name) {
      error.first_name = '';
    }
    if (name === 'lastName' && error?.last_name) {
      error.last_name = '';
    }
    if (name === 'phoneNumber' && error?.phone_number) {
      error.phone_number = '';
    }
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    console.log('toggleSwitch form ======>>>>>', form);
    createContacts(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };
  const toggleSwitch = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const fileSelected = image => {
    closeSheet();
    setLocalFile(image);
    console.log(image);
  };
  return (
    <CreateContacts
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      toggleSwitch={toggleSwitch}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      fileSelected={fileSelected}
      localFile = {localFile}
    />
  );
};
export default CreateContact;
