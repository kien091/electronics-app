import {ScreenName} from './AppNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import SettingScreen from '../screens/SettingScreen';

export type DrawerStackParamList = {
  [ScreenName.HomeDrawer]: undefined;
  [ScreenName.Profile]: undefined;
  [ScreenName.Cart]: undefined;
  [ScreenName.Setting]: undefined;
};

const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name={ScreenName.HomeDrawer} component={TabNavigator} />
      <DrawerStack.Screen name={ScreenName.Profile} component={ProfileScreen} />
      <DrawerStack.Screen name={ScreenName.Cart} component={CartScreen} />
      <DrawerStack.Screen name={ScreenName.Setting} component={SettingScreen} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
