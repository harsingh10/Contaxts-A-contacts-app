import React, { useContext, useEffect, useRef, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container/index';
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/Contacts";
import { GlobalContext } from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import styles from '../../components/common/AppModal/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONTACT_DETAIL} from '../../constants/routeNames';
import {navigate} from "../../navigation/SideMenu/RootNavigator";

const Contacts = ()=>{
    const {setOptions,toggleDrawer} = useNavigation();
    const [modalVisibilty, setModalVisibility] = useState(false);
    const {contactsDispatch,contactsState:{getContacts:{data,loading}}} = useContext(GlobalContext);
    const [sortBy,setSortBy] = useState(null);
    const contactsRef = useRef([]);
    useEffect(() => {   
        getContacts()(contactsDispatch);
    }, [])

    useEffect(() => {
        setOptions({headerLeft:()=>
            <TouchableOpacity onPress={()=>toggleDrawer()}>
                <Icon type="material" size={17} name="menu" style={{padding:10}}/>
            </TouchableOpacity>
        })
    }, []);

    useEffect(() => {
        const prev = contactsRef.current;
    
        contactsRef.current = data;
    
        const newList = contactsRef.current;
        if (newList.length - prev.length === 1) {
          const newContact = newList.find(
            (item) => !prev.map((i) => i.id).includes(item.id),
          );
          navigate(CONTACT_DETAIL, {item: newContact});
          console.log("navigations=======>>>>>>>",newContact);
        }
      }, [data.length]);

    const getSettings = async ()=>{
        const sortPref = await AsyncStorage.getItem("sortBy");
        if(sortPref){
            setSortBy(sortPref);
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            getSettings();
            return () => {};
        }, []),
      );

    return(
        <Container>     
               <ContactsComponent modalVisibilty={modalVisibilty} sortBy={sortBy} data={data} loading={loading} setModalVisibility={setModalVisibility} />   
        </Container>
    )
}

export default Contacts;