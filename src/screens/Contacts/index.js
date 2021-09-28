import React, { useContext, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container/index';
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/Contacts";
import { GlobalContext } from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import styles from '../../components/common/AppModal/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contacts = ()=>{
    const {setOptions,toggleDrawer} = useNavigation();
    const [modalVisibilty, setModalVisibility] = useState(false);
    const {contactsDispatch,contactsState:{getContacts:{data,loading}}} = useContext(GlobalContext);
    const [sortBy,setSortBy] = useState(null);
    useEffect(() => {   
        getContacts()(contactsDispatch);
    }, [])
    console.log("data + loading===>>>",data,loading);
    React.useEffect(() => {
        setOptions({headerLeft:()=>
            <TouchableOpacity onPress={()=>toggleDrawer()}>
                <Icon type="material" size={17} name="menu" style={{padding:10}}/>
            </TouchableOpacity>
        })
    }, []);

    const getSettings = async ()=>{
        const sortPref = await AsyncStorage.getItem("sortBy");
        console.log("heeloFocus======>?>>>>>>>>>>>>>>>>>>",sortPref)
        if(sortPref){
            setSortBy(sortPref);
             console.log("heeloFocus======>?>>>>>>>>>>>>>>>>>>",sortPref)
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