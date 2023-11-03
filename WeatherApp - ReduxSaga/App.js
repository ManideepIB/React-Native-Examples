import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Cards from './src/screens/Cards';
import Navigator from './src/navigation/Navigator';

const Stack = createNativeStackNavigator();
const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({});

export default App;
