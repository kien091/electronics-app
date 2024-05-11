import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import LottieView from 'lottie-react-native';

import GoogleSvg from '../assets/images/google.svg';
import FacebookSvg from '../assets/images/facebook.svg';
import {ScreenName} from '../navigation/AppNavigation';

type LoginScreenProps = {
  navigation: any;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LottieView
            source={require('../assets/images/login_animation.json')}
            autoPlay
            loop
            style={{width: 350, height: 300}}
          />
        </View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          inputType={''}
          fieldButtonLabel={''}
          fieldButtonFunction={function (): void {}}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          keyboardType={undefined}
        />

        <CustomButton
          label={'Login'}
          onPress={() => {
            navigation.navigate(ScreenName.Home);
          }}
        />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 100,
              paddingHorizontal: 14,
              paddingVertical: 14,
              marginRight: 12,
            }}>
            <GoogleSvg width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 100,
              paddingHorizontal: 14,
              paddingVertical: 14,
              marginLeft: 12,
            }}>
            <FacebookSvg width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenName.Register)}>
            <Text style={{color: '#fd6600', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
