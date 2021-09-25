import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container/index';
import Icon from '../../components/common/Icon';
const Contacts = ()=>{
    const {setOptions,toggleDrawer} = useNavigation();
    React.useEffect(() => {
        setOptions({headerLeft:()=>
            <TouchableOpacity onPress={()=>toggleDrawer()}>
                <Icon type="material" size={17} name="menu" style={{padding:10}}/>
            </TouchableOpacity>
        })
    }, [])
    return(
        <Container>     
                <Text> Hi from Contacts</Text>   
        </Container>
    )
}

export default Contacts;