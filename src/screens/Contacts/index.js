import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container/index';
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/Contacts";
import { GlobalContext } from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';

const Contacts = ()=>{
    const {setOptions,toggleDrawer} = useNavigation();
    const [modalVisibilty, setModalVisibility] = useState(false);
    const {contactsDispatch,contactsState:{getContacts:{data,loading}}} = useContext(GlobalContext);
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
    }, [])
    return(
        <Container>     
               <ContactsComponent modalVisibilty={modalVisibilty} data={data} loading={loading} setModalVisibility={setModalVisibility} />   
        </Container>
    )
}

export default Contacts;