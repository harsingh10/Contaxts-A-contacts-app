import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CONTACT_LIST,CONTACT_DETAIL,SETTINGS, CREATE_CONTACT} from '../constants/routeNames';
import Contacts from "../screens/Contacts";
import CreateContact from "../screens/CreateContact";
import ContactDetail from "../screens/ContactDetail";
import Settings from "../screens/Settings";

const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <HomeStack.Screen name={SETTINGS} component={Settings} />
            <HomeStack.Screen  name={CREATE_CONTACT} component={CreateContact} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;