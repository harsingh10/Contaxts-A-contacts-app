import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import AppModal from '../common/AppModal';
import Message from '../common/Message';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';

const ContactsComponent = ({
  modalVisibilty,
  data,
  loading,
  setModalVisibility,
}) => {
  var customData = [{"contact_picture":"https://randomuser.me/api/portraits/men/0.jpg","country_code":"BR","first_name":"Hardeep","id":"1305","last_name":"singh","phone_number":"9193549618"},
  {"contact_picture":"https://randomuser.me/api/portraits/women/72.jpg","country_code":"GR","first_name":"abhilasha","id":"0296","last_name":"yadav","phone_number":"990130700"},
  {"contact_picture":"https://randomuser.me/api/portraits/men/20.jpg","country_code":"BY","first_name":"lakshya","id":"4563","last_name":"singh","phone_number":"9968574123"},
  {"contact_picture":"https://randomuser.me/api/portraits/men/67.jpg","country_code":"AG","first_name":"ravi","id":"7896","last_name":"vaishnav","phone_number":"9986523144"},
  {"contact_picture":"https://randomuser.me/api/portraits/men/37.jpg","country_code":"OG","first_name":"prateek","id":"9632","last_name":"pathak","phone_number":"997878545"},
  {"contact_picture":"https://randomuser.me/api/portraits/women/85.jpg","country_code":"SG","first_name":"shilpa","id":"3698","last_name":"panchal","phone_number":"998787587"},
  {"contact_picture":"","country_code":"UK","first_name":"anurag","id":"5678","last_name":"sharma","phone_number":"965454233"},
  {"contact_picture":"","country_code":"UP","first_name":"suraj","id":"1245","last_name":"singh","phone_number":"98875465212"},
  {"contact_picture":"https://randomuser.me/api/portraits/men/39.jpg","country_code":"MG","first_name":"kalra","id":"2587","last_name":"chhabda","phone_number":"989875425"},
  {"contact_picture":"https://randomuser.me/api/portraits/women/82.jpg","country_code":"KG","first_name":"richa","id":"1478","last_name":"chadda","phone_number":"963258741"},
  {"contact_picture":"","country_code":"DL","first_name":"Ayush","id":"8756","last_name":"chaudhary","phone_number":"78965412"}];
  const ListEmptyComponent = () => {
    return (
      <View>
        <Message info message="No Contacts Found" />
      </View>
    );
  };
  const renderItem = ({item}) => {
    const {
      contact_picture,
      first_name,
      country_code,
      phone_number,
      last_name,
    } = item;
    return (
      <TouchableOpacity
      style={styles.itemContainer}
      // onPress={() => {
      //   navigate(CONTACT_DETAIL, {item});
      // }}
      >
      <View style={styles.item}>
        {contact_picture ? (
          <Image
            style={{width: 45, height: 45, borderRadius: 100}}
            source={{uri: contact_picture}}
          />
        ) : (
          <View
            style={{
              width: 45,
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.grey,
              borderRadius: 100,
            }}>
            <Text style={[styles.name, {color: colors.white}]}>
              {first_name[0]}
            </Text>
            <Text style={[styles.name, {color: colors.white}]}>
              {last_name[0]}
            </Text>
          </View>
        )}

        <View style={{paddingLeft: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{first_name}</Text>

            <Text style={styles.name}> {last_name}</Text>
          </View>
          <Text
            style={
              styles.phoneNumber
            }>{`${country_code} ${phone_number}`}</Text>
        </View>
      </View>
      <Icon name="right" type="ant" size={18} color={colors.grey} />                      
    </TouchableOpacity>
    );
  };
  return (
    <View>
      <AppModal
        modalTitle="My profile"
        modalBody={
          <View style={{paddingHorizontal: 100, padding: 50}}>
            <Text> hello from modal</Text>
          </View>
        }
        modalVisibilty={modalVisibilty}
        setModalVisibility={setModalVisibility}
      />
      <SafeAreaView>
        {loading && <ActivityIndicator size="large" primary />}

        {!loading && (
          <FlatList
            renderItem={renderItem}
            data={customData}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={()=>(
              <View style={{height:1,backgroundColor:colors.grey}}></View>
            )}
            ListFooterComponent={<View style={{height:60}}></View>}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default ContactsComponent;
