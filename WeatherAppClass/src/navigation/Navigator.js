import {View, Text} from 'react-native';
import React, {Component} from 'react';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';

import {connect} from 'react-redux';

class Navigator extends Component {
  render() {
    const {auth} = this.props;
    const user = auth.user;
    // console.log(user, 'user from navigator');
    return (
      <NavigationContainer>
        {user ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigator);
