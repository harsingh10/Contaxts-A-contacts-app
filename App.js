/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import react-native-gesture-handler from 'react-native-gesture-handler'
import React from 'react';
import AppNavContainer from "./src/navigation/index";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
          <AppNavContainer />
     </ GlobalProvider> 

  );
};



export default App;
