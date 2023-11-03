import {View, Text} from 'react-native';
import React from 'react';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Navigator = () => {
  const user = useSelector(state => state.auth.user);
  console.log(user, 'user===');
  return (
    <NavigationContainer>
      {true ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
