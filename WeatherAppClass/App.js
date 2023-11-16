import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './src/navigation/Navigator';

class App extends Component {
  render() {
    return <Navigator />;
  }
}

const styles = StyleSheet.create({});

export default App;
