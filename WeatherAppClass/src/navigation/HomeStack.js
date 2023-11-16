import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        {/* <Stack.Screen name="Cards" component={Cards} />  */}
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
