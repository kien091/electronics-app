import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/AppNavigation';
import {StyleSheet} from 'react-native';
import TabNavigation from './navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
