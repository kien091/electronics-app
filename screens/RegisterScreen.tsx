import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GoogleSvg from '../assets/images/google.svg';
import FacebookSvg from '../assets/images/facebook.svg';

type RegisterScreenProps = {
  navigation: any;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', paddingHorizontal: 25}}>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 28,
          fontWeight: '500',
          color: '#333',
          marginBottom: 30,
        }}>
        Register
      </Text>

      <InputField
        label={'Full Name'}
        icon={
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
        }
        inputType={''}
        keyboardType={undefined}
        fieldButtonLabel={''}
        fieldButtonFunction={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

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
        fieldButtonFunction={function (): void {
          throw new Error('Function not implemented.');
        }}
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
        keyboardType={undefined}
        fieldButtonLabel={''}
        fieldButtonFunction={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <InputField
        label={'Confirm Password'}
        icon={
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
        }
        inputType="password"
        keyboardType={undefined}
        fieldButtonLabel={''}
        fieldButtonFunction={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 30,
        }}>
        <Ionicons
          name="calendar-outline"
          size={20}
          color="#666"
          style={{marginRight: 5}}
        />
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
            {dobLabel}
          </Text>
        </TouchableOpacity>
      </View>

      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        maximumDate={new Date('2005-01-01')}
        minimumDate={new Date('1980-01-01')}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setDobLabel(date.toDateString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <CustomButton label={'Register'} onPress={() => {}} />

      <Text style={{textAlign: 'center', color: '#666', marginBottom: 12}}>
        Or, register with email ...
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
        <Text>Already registered?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: '#fd6600', fontWeight: '700'}}> Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
