import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackNavigator, StackActions, NavigationActions, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Observer, Provider } from 'mobx-react';


import * as Expo from 'expo';
import { Google } from 'expo';


import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component  {
  render() {
    return <AppNavigator />;
  }
}


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
