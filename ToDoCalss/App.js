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
import Home from './src/screen/Home';

class App extends Component {
  render() {
    return <Home />;
  }
}

const styles = StyleSheet.create({});

export default App;
