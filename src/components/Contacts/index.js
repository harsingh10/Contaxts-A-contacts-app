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
import { useNavigation } from '@react-navigation/core';
import { CREATE_CONTACT,CONTACT_DETAIL } from '../../constants/routeNames';
const ContactsComponent = ({
  modalVisibilty,
  sortBy,
  data,
  loading,
  setModalVisibility,
}) => {
  const {navigate}= useNavigation();

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
      onPress={() => {
        navigate(CONTACT_DETAIL, {item});
      }}
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
    <>
        <View>
      <AppModal
        title="My profile"
        modalBody={
          <View style={{paddingHorizontal: 100, padding: 50}}>
            <Text> hello from modal</Text>
          </View>
        }
        modalVisible={modalVisibilty}
        setModalVisible={setModalVisibility}
      />
      <SafeAreaView>
        {loading && <ActivityIndicator size="large" primary />}

        {!loading && (
          <View style={[{paddingVertical: 20}]}>
          <FlatList
            renderItem={renderItem}
            data={sortBy ? data.sort((a,b)=>{
              if(sortBy === "First Name"){
                if(b.first_name > a.first_name){
                  return -1;
                }else{
                  return 1;
                }
              }
              if(sortBy === "Last Name"){
                if(b.last_name > a.last_name){
                  return -1
                }else{
                  return 1
                }
              }
            })  : data}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={()=>(
              <View style={{height:1,backgroundColor:colors.grey}}></View>
            )}
            ListFooterComponent={<View style={{height:60}}></View>}
          />
          </View>
        )}
      </SafeAreaView>
    </View>
      <TouchableOpacity style={styles.floatingActionButton} onPress={()=>navigate(CREATE_CONTACT)}>
        <Icon  name="plus" size={21} color={colors.white}/>
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
