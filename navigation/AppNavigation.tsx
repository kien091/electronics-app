import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhoneScreen from '../screens/PhoneScreen';
import OnBoardingScreen from '../screens/OnboardingScreen';

import {NavigatorScreenParams} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator, {TabStackParamList} from './TabNavigation';
import DrawerNavigator, {DrawerStackParamList} from './DrawerNavigation';

export enum ScreenName {
  Onboarding = 'Onboarding',
  Login = 'Login',
  Register = 'Register',
  Phone = 'Phone',
  Laptop = 'Laptop',
  IPad = 'IPad',
  SmartWatch = 'SmartWatch',
  Accessories = 'Accessories',
  Profile = 'Profile',
  Cart = 'Cart',
  Setting = 'Setting',
  Home = 'Home',
  HomeDrawer = 'HomeDrawer',
  Drawer = 'Drawer',
}

export type RootStackParamList = {
  [ScreenName.Onboarding]: undefined;
  [ScreenName.Login]: undefined;
  [ScreenName.Register]: undefined;
  [ScreenName.Home]: NavigatorScreenParams<TabStackParamList>;
  [ScreenName.Drawer]: NavigatorScreenParams<DrawerStackParamList>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={ScreenName.Onboarding}
        component={OnBoardingScreen}
      />
      <RootStack.Screen name={ScreenName.Login} component={LoginScreen} />
      <RootStack.Screen name={ScreenName.Register} component={RegisterScreen} />
      <RootStack.Screen name={ScreenName.Home} component={TabNavigator} />
    </RootStack.Navigator>
  );
};

// use AppNavigation
export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
