import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect,useContext } from 'react';
import {View,TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import Container from '../../components/common/Container';
import DetailComponent from '../../components/DetailComponent';
import { GlobalContext } from '../../context/Provider';
import Icon from "../../components/common/Icon";
import colors from '../../assets/theme/colors';
import deleteContact from '../../context/actions/contacts/deleteContact';
import { CONTACT_LIST } from '../../constants/routeNames';


const ContactDetail = ()=>{
    const {params:{item}} = useRoute();

    const {
        contactsDispatch,
        contactsState: {
          deleteContact: {loading},
        },
      } = useContext(GlobalContext);

      const {setOptions, navigate} = useNavigation();

    useEffect(() => {
        if (item) {
          setOptions({
            title: item.first_name + ' ' + item.last_name,
            headerRight: () => {
              return (
                <View style={{flexDirection: 'row', paddingRight: 10}}>
                  <TouchableOpacity>
                    <Icon
                      size={21}
                      color={colors.grey}
                      name={item.is_favorite ? 'star' : 'star-border'}
                      type="material"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Delete!',
                        'Are you sure you want to remove ' + item.first_name,
                        [
                          {
                            text: 'Cancel',
                            onPress: () => {},
                          },
    
                          {
                            text: 'OK',

                            onPress: () => {
                              console.log("Onpress delete================>>>>>",item.id,CONTACT_LIST);
                              deleteContact(item.id)(contactsDispatch)(() => {
                                navigate(CONTACT_LIST);
                              });
                            }
                          },
                        ],
                      );
                    }}
                    style={{paddingLeft: 10}}>
                    {
                    false ? (
                      <ActivityIndicator size="small" color={colors.primary} />
                    ) : (
                      <Icon
                        color={colors.grey}
                        size={21}
                        name="delete"
                        type="material"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              );
            },
          });
        }
      }, [item,
        //  loading
        ]);
    return(
        // <View> 
        //  <Text> {item.first_name}</Text>   
        // </View>
        <Container>
           <DetailComponent contact={item} /> 
        </Container>
    )
}

export default ContactDetail;