import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from './AppNavigation';
import PhoneScreen from '../screens/PhoneScreen';
import LaptopScreen from '../screens/LaptopScreen';
import IPadScreen from '../screens/IPadScreen';
import SmartWatchScreen from '../screens/SmartWatchScreen';
import AccessoriesScreen from '../screens/AccessoriesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type TabStackParamList = {
  [ScreenName.Phone]: undefined;
  [ScreenName.Laptop]: undefined;
  [ScreenName.IPad]: undefined;
  [ScreenName.SmartWatch]: undefined;
  [ScreenName.Accessories]: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#ffffff', height: 72},
        tabBarInactiveTintColor: '#888888',
        tabBarActiveTintColor: '#000000',
        tabBarLabelStyle: {marginBottom: 12, fontWeight: '600'},
      }}>
      <TabStack.Screen
        name={ScreenName.Phone}
        component={PhoneScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'phone-portrait' : 'phone-portrait-outline'}
              color={color}
              size={size}
              style={{
                backgroundColor: focused ? '#FDCC98' : '',
                padding: 6,
                borderRadius: 10,
              }}
            />
          ),
        })}
      />
      <TabStack.Screen
        name={ScreenName.Laptop}
        component={LaptopScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'laptop' : 'laptop-outline'}
              color={color}
              size={size}
              style={{
                backgroundColor: focused ? '#FDCC98' : '',
                padding: 6,
                borderRadius: 10,
              }}
            />
          ),
        })}
      />
      <TabStack.Screen
        name={ScreenName.IPad}
        component={IPadScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'tablet-portrait' : 'tablet-portrait-outline'}
              color={color}
              size={size}
              style={{
                backgroundColor: focused ? '#FDCC98' : '',
                padding: 6,
                borderRadius: 10,
              }}
            />
          ),
        })}
      />
      <TabStack.Screen
        name={ScreenName.SmartWatch}
        component={SmartWatchScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'watch' : 'watch-outline'}
              color={color}
              size={size}
              style={{
                backgroundColor: focused ? '#FDCC98' : '',
                padding: 6,
                borderRadius: 10,
              }}
            />
          ),
        })}
      />
      <TabStack.Screen
        name={ScreenName.Accessories}
        component={AccessoriesScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'apps' : 'apps-outline'}
              color={color}
              size={size}
              style={{
                backgroundColor: focused ? '#FDCC98' : '',
                padding: 6,
                borderRadius: 10,
              }}
            />
          ),
        })}
      />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
